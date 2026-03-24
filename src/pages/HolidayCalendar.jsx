import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getHolidayCalendarList } from "../services/sharepoint/holidayCalendarService";
import "./HolidayCalendar.css";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BRANCHES = [
  "Andhra Pradesh",
  "Delhi",
  "Gujarat",
  "Maharashtra",
  "Tamilnadu",
  "Telangana",
];

const NON_BRANCH_FIELDS = new Set([
  "id",
  "name",
  "title",
  "holiday",
  "holidayname",
  "holidaytitle",
  "date",
  "holidaydate",
  "eventdate",
  "createdat",
  "updatedat",
  "location",
  "locations",
  "country",
  "state",
  "states",
  "branch",
  "branches",
  "month",
  "year",
]);

const BRANCH_KEYWORDS = {
  "Andhra Pradesh": ["andhrapradesh", "andhra", "ap"],
  Delhi: ["delhi", "dl"],
  Gujarat: ["gujarat", "gj"],
  Maharashtra: ["maharashtra", "mh"],
  Tamilnadu: ["tamilnadu", "tamilnadu", "tamil", "tn"],
  Telangana: ["telangana", "ts"],
};

const normalizeText = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const isTruthyValue = (value) => {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value === 1;

  const normalized = normalizeText(value);
  return ["true", "yes", "y", "1", "x", "check", "checked"].includes(
    normalized
  );
};

const parseHolidayDate = (value) => {
  if (!value) return null;
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value;

  const text = String(value).trim();
  if (!text) return null;

  const ddmmyyyy = text.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);
  if (ddmmyyyy) {
    const [, day, month, year] = ddmmyyyy;
    const parsed = new Date(Number(year), Number(month) - 1, Number(day));
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  const yyyymmdd = text.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);
  if (yyyymmdd) {
    const [, year, month, day] = yyyymmdd;
    const parsed = new Date(Number(year), Number(month) - 1, Number(day));
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  const parsed = new Date(text);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatHolidayDate = (value) => {
  const parsedDate = parseHolidayDate(value);
  if (!parsedDate) return value || "-";

  const day = String(parsedDate.getDate()).padStart(2, "0");
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const year = parsedDate.getFullYear();
  return `${day}-${month}-${year}`;
};

const pickField = (item, candidates) => {
  const entries = Object.entries(item || {});

  for (const candidate of candidates) {
    const normalizedCandidate = normalizeText(candidate);

    const entry = entries.find(
      ([key]) => normalizeText(key) === normalizedCandidate
    );

    if (entry && entry[1] !== undefined && entry[1] !== null && entry[1] !== "") {
      return entry[1];
    }
  }

  return null;
};

const getHolidayName = (item) =>
  pickField(item, ["name", "title", "holiday", "holidayName", "holidayTitle"]) ||
  "-";

const getHolidayDate = (item) =>
  pickField(item, ["date", "holidayDate", "eventDate"]);

const splitLocations = (item) => {
  const raw =
    pickField(item, [
      "locations",
      "location",
      "branch",
      "branches",
      "state",
      "states",
      "country",
    ]) || "";

  if (Array.isArray(raw)) {
    return raw.map((value) => normalizeText(value));
  }

  return String(raw)
    .split(/[;,|]/)
    .map((value) => normalizeText(value))
    .filter(Boolean);
};

const hasHolidayForBranch = (item, branch) => {
  const branchKeywords = BRANCH_KEYWORDS[branch] || [normalizeText(branch)];
  const locations = splitLocations(item);

  if (
    locations.some((location) =>
      branchKeywords.some((keyword) => location.includes(keyword))
    )
  ) {
    return true;
  }

  for (const [key, value] of Object.entries(item || {})) {
    const normalizedKey = normalizeText(key);
    if (NON_BRANCH_FIELDS.has(normalizedKey)) continue;

    const matchesBranch = branchKeywords.some((keyword) =>
      normalizedKey.includes(keyword)
    );

    if (matchesBranch && isTruthyValue(value)) {
      return true;
    }
  }

  return false;
};

function HolidayCalendar() {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(() =>
    String(new Date().getMonth())
  );
  const [selectedYear, setSelectedYear] = useState(() =>
    String(new Date().getFullYear())
  );

  useEffect(() => {
    const loadHolidays = async () => {
      try {
        const response = await getHolidayCalendarList();
        const list = response?.data?.data || response?.data || [];
        setHolidays(Array.isArray(list) ? list : []);
      } catch (err) {
        setError("Unable to load holiday calendar right now.");
      } finally {
        setLoading(false);
      }
    };

    loadHolidays();
  }, []);

  const yearOptions = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const years = holidays
      .map((item) => parseHolidayDate(getHolidayDate(item)))
      .filter(Boolean)
      .map((dateObj) => dateObj.getFullYear());

    return [...new Set([currentYear, ...years])].sort((a, b) => b - a);
  }, [holidays]);

  const filteredHolidays = useMemo(() => {
    return [...holidays]
      .filter((item) => {
        const dateObj = parseHolidayDate(getHolidayDate(item));
        if (!dateObj) return false;

        const monthMatch = dateObj.getMonth() === Number(selectedMonth);

        const yearMatch = dateObj.getFullYear() === Number(selectedYear);

        return monthMatch && yearMatch;
      })
      .sort((first, second) => {
        const firstDate = parseHolidayDate(getHolidayDate(first));
        const secondDate = parseHolidayDate(getHolidayDate(second));

        if (!firstDate && !secondDate) return 0;
        if (!firstDate) return 1;
        if (!secondDate) return -1;
        return firstDate.getTime() - secondDate.getTime();
      });
  }, [holidays, selectedMonth, selectedYear]);

  return (
    <section className="holiday-calendar-page">
      <div className="holiday-calendar-hero">
        <div className="container">
          <h1 className="holiday-calendar-title">Holiday Calendar</h1>
          <div className="holiday-calendar-breadcrumb">
            <Link to="/" className="holiday-calendar-breadcrumb-link">
              Home
            </Link>
            <span className="holiday-calendar-breadcrumb-separator"> / </span>
            <span>Holiday Calendar</span>
          </div>
        </div>
      </div>

      <div className="container holiday-calendar-content py-5">
        {loading && <p>Loading holidays...</p>}
        {!loading && error && <p className="text-danger">{error}</p>}

        {!loading && !error && holidays.length === 0 && (
          <p>No holidays available.</p>
        )}

        {!loading && !error && holidays.length > 0 && (
          <>
            <div className="holiday-calendar-filters row g-3">
              <div className="col-12 col-sm-6 col-md-3">
                <label className="holiday-filter-label" htmlFor="holidayMonth">
                  MONTH:
                </label>
                <select
                  id="holidayMonth"
                  className="form-select holiday-filter-select"
                  value={selectedMonth}
                  onChange={(event) => setSelectedMonth(event.target.value)}
                >
                  {MONTHS.map((monthName, index) => (
                    <option key={monthName} value={index}>
                      {monthName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <label className="holiday-filter-label" htmlFor="holidayYear">
                  YEAR:
                </label>
                <select
                  id="holidayYear"
                  className="form-select holiday-filter-select"
                  value={selectedYear}
                  onChange={(event) => setSelectedYear(event.target.value)}
                >
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="holiday-table-card">
              <div className="table-responsive">
                <table className="table holiday-table mb-0">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Holiday / Festival</th>
                      {BRANCHES.map((branch) => (
                        <th key={branch}>{branch}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHolidays.length === 0 && (
                      <tr>
                        <td colSpan={2 + BRANCHES.length} className="text-center py-4">
                          No holidays found for the selected month and year.
                        </td>
                      </tr>
                    )}

                    {filteredHolidays.map((item, idx) => (
                      <tr key={item.id || idx}>
                        <td>{formatHolidayDate(getHolidayDate(item))}</td>
                        <td>{getHolidayName(item)}</td>
                        {BRANCHES.map((branch) => (
                          <td key={`${item.id || idx}-${branch}`} className="text-center">
                            {hasHolidayForBranch(item, branch) ? (
                              <span className="holiday-check" aria-label={`${branch} holiday`}>
                                ✓
                              </span>
                            ) : (
                              <span className="holiday-empty" aria-hidden="true" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="holiday-note-card">
              <h2>About Holiday Calendar</h2>
              <p>
                This calendar displays all company holidays across different branches.
                Holidays are marked with a checkmark for each branch where they apply.
              </p>
              <div className="holiday-note-highlight">
                <strong>Note:</strong> Use the Month and Year filters to view holidays
                for specific periods.
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default HolidayCalendar;

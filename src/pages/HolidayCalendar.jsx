import { useEffect, useState } from "react";
import { getHolidayCalendarList } from "../services/sharepoint/holidayCalendarService";

function HolidayCalendar() {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <section className="container py-5">
      <h1 className="mb-3">Holiday Calendar</h1>

      {loading && <p>Loading holidays...</p>}
      {!loading && error && <p className="text-danger">{error}</p>}

      {!loading && !error && holidays.length === 0 && (
        <p>No holidays available.</p>
      )}

      {!loading && !error && holidays.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Holiday</th>
                <th>Date</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((item, idx) => (
                <tr key={item.id || idx}>
                  <td>{item.name || item.title || "-"}</td>
                  <td>{item.date || item.holidayDate || "-"}</td>
                  <td>{item.location || item.country || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default HolidayCalendar;

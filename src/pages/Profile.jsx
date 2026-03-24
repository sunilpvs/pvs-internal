import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Profile() {
  const { userData } = useContext(AppContext);

  const fullName = userData
    ? `${userData.f_name || ""} ${userData.l_name || ""}`.trim()
    : "User";

  return (
    <section className="container py-5">
      <h1 className="mb-3">Profile</h1>
      <div className="card p-4 shadow-sm">
        <p className="mb-2"><strong>Name:</strong> {fullName}</p>
        <p className="mb-2"><strong>Email:</strong> {userData?.email || "-"}</p>
        <p className="mb-0"><strong>Employee ID:</strong> {userData?.employee_id || "-"}</p>
      </div>
    </section>
  );
}

export default Profile;

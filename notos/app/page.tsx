import Task from "../components/Task"
import Image from "next/image";

  return (
    <>
      <p>Logged in as {session.user.email}</p>

      {/* Display user info (name, email, etc.) */}
      <h1>User Profile</h1>
        <pre>{loginAccount(session.user.email)}</pre>

      {/* Ends the session and redirects to Auth0 to log out */}
      <a href="/auth/logout">Logout</a>
    </>
  );
}

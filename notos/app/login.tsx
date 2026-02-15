import { auth0 } from "../app/lib/auth0";
import { loginAccount, checkSupabaseConnection } from "../app/lib/supabase";
import { Header } from "../components/Header";

export default async function Home() {
  // Check if user is authenticated
  const session = await auth0.getSession();

  if (!session) {
    return (
      <>
        {/* Redirects to Auth0 to sign up */}
        <a href="/auth/login?screen_hint=signup">Signup</a>
        <br />
        {/* Redirects to Auth0 to log in */}
        <a href="/auth/login">Login</a>
      </>
    );
  }

  return (
    <>
      {/* <Header /> */}
      <main>
        <p>Logged in as {session.user.email}</p>

        {/* Display user info (name, email, etc.) */}
        <h1>User Profile</h1>
        {/* <pre>{loginAccount(session.user.email)}</pre> */}

        {/* Ends the session and redirects to Auth0 to log out */}
        <a href="/auth/logout">Logout</a>
      </main>
    </>
  );
}

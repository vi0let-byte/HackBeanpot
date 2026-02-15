"use client";

import { useState } from "react";
import { auth0 } from "../app/lib/auth0";
import { loginAccount, checkSupabaseConnection } from "../app/lib/supabase";
import { Header } from "../components/Header";
import ShowButtonHover from "@/components/ButtonHover";
import Task from "../components/Task";

export default async function Page() {
  const session = await auth0.getSession();
  if (!session) {
    return (
      <>
        <Header email={null} perfName={null} />
        {/* Redirects to Auth0 to sign up */}
        <a href="/auth/login?screen_hint=signup">Signup</a>
        <br />
        {/* Redirects to Auth0 to log in */}
        <a href="/auth/login">Login</a>
      </>
    );
  }

  return (
    <div>
      <div>
        <Header email={session.user.email} perfName={session.user.name} />
        <p>Logged in as {session.user.email}</p>

        {/* Display user info (name, email, etc.) */}
        <h1>User Profile</h1>
        <pre>{loginAccount(session.user.email)}</pre>

        {/* Ends the session and redirects to Auth0 to log out */}
        <a href="/auth/logout">Logout</a>
      </div>
      <div>
      </div>
    </div>
  );
}

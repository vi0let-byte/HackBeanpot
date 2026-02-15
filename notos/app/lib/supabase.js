import { supabase_client } from './supabaseClient';
import { auth0 } from "../lib/auth0";

const supabase = supabase_client

let email = null;

export function getEmail() {
  return email;
}

export async function checkSupabaseConnection() {
  const { data, error } = await supabase.from('users').select('')

  if (error) {
    console.error('Supabase client connection error:', error.message)
    return false
  } else {
    console.log('Supabase client is working. Data received:', data)
    return true
  }
}

/**
 * Logs in a user by checking if they exist in the database. If they do, it returns a greeting. If not, it registers the user and returns a message indicating a new user was created.
 * @param {string} user_data - The email of the user to log in or register.
 * @returns {Promise<string>} A message indicating the result of the login or registration process.
 */
export const loginAccount = async user_data => {
  email = user_data;
  const active_user = await isActiveUser(user_data);
  if (active_user) {
    return `hello ${await getPreferedName(user_data)}`;
  }
  await register(user_data);
  return 'new user created with email: ' + await getPreferedName(user_data);
}

/**
 * checks if a user with the given email exists in the 'users' table of the database. It returns true if the user exists and false otherwise.
 * @param {string} user_ID - The email ID of the user to check.
 * @returns {Promise<boolean>} A boolean indicating if the user exists.
 */
export const isActiveUser = async user_ID => {
  const { data, error } = await supabase
    .from('users').select('*').eq('emailId', user_ID);
  console.log(error);
  const length = data ? data.length : 0;
  return length > 0;
}

/**
 * Registers a new user by inserting their email into the 'users' table of the database. It returns the result of the insertion operation, including any data or errors that occur.
 * @param {string} user_data - The email ID of the user to register.
 * @returns {Promise<{data: any, error: any}>} The result of the registration operation.
 */
const register = async user_data => {
    const prefered_name = user_data.split('@')[0];
    const { data, error } = await supabase
        .from('users')
        .insert({"emailId": user_data, "balloons": null, "bundles": null, "perfName": prefered_name});
    console.log("test: register " + data);
    return { data, error };
}

/**
 * gets the user data for a given email from the 'users' table in the database. It returns the user data if found, or null if no user with the given email exists.
 * @param {*} user_email - The email ID of the user whose data is to be retrieved.
 * @returns {Promise<Object|null>} The user data if found, or null if not found.
 */
export const getUserData = async () => {  
  const { data, error } = await supabase
    .from('users').select("*").eq('emailId', email);
  return data ? data[0] : null;
}

/**
 * Retrieves the preferred name of a user based on their email ID. It queries the 'users' table in the database and returns the preferred name associated with the given email ID.
 * @param {string} user_data - The email ID of the user whose preferred name is to be retrieved.
 * @returns {Promise<string>} The preferred name of the user.
 */
export const getPreferedName = async user_email => {
    const userData = await getUserData(user_email);
    return userData ? userData.perfName : null;
}

/**
 * Checks if the current user session is active by retrieving the session information from the authentication service. It returns the email of the user if the session is active, or null if there is no active session.
 * @returns {Boolean} if the session is off
 */
export const checkSessionActive = async () => {
  const session = await auth0.getSession();
  console.log("Session: ", session);
  if (!session || session === null) {
    email = null;
    return false;
  }

  // Update the module-level email so server renders will reflect current session
  if (session.user && session.user.email) {
    email = session.user.email;
  }

  return true;
}

/**
 * Gets the 'balloons' JSON column for the current user (by email).
 * @returns {Promise<any|null>} The balloons JSON object, or null if not found.
 */
export const getUserBalloons = async () => {
  if (!email) return null;
  const { data, error } = await supabase
    .from('users')
    .select('balloons')
    .eq('emailId', email)
    .single();
  if (error) {
    console.error('Error fetching balloons:', error.message);
    return null;
  }
  return data ? data.balloons : null;
};

/**
 * Sets the 'balloons' JSON column for the current user (by email).
 * @param {any} balloons - The JSON object to set as balloons.
 * @returns {Promise<boolean>} True if update succeeded, false otherwise.
 */
export const setUserBalloons = async (balloons) => {
  if (!email) return false;
  const { error } = await supabase
    .from('users')
    .update({ balloons })
    .eq('emailId', email);
  if (error) {
    console.error('Error updating balloons:', error.message);
    return false;
  }
  return true;
};
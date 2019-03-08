import { auth } from './firebase'

/**
 * Create user session
 * @param {string} action - createUser, signIn
 * @param {string} email
 * @param {string} password
 */

const userSession = (action, email, password ) => auth[`${action}WithEmailAndPassword`](email, password)

const logout = () => auth.signOut()

export {
  userSession,
  logout
}
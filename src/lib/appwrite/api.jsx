import {account} from './config'
import {  ID } from 'appwrite';

export async function createAccount(email, username, password) {
  try {
    const newAccount = await account.create(ID.unique(), email, password, username);
    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function loginAccount(email, password) {
  try {
    const userId = localStorage.getItem('userId');
    if (!userId) throw new Error('User ID not found in localStorage');
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
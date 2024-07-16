import { Account,Client,Databases,Storage,Avatars } from "appwrite";

export const appwriteConfig ={
    projectId: '6694dfe10037719a7413',
    url: 'https://cloud.appwrite.io/v1',
}
export const client = new Client();
client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);




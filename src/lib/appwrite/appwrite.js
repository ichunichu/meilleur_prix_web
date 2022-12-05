import {Client, Account, ID, Functions, Databases, Storage} from 'appwrite';


export const client = new Client()
    .setEndpoint('http://45.140.164.127/v1') // Your API Endpoint
    .setProject('638dc03878130d4ed972');               // Your project ID

export const functions = new Functions(client);
export const database = new Databases(client)
export const storage = new Storage(client)

const account = new Account(client)

export function login (email,password,setstate){
    account.createEmailSession(email,password).then((res)=>{
        setstate(res)
        console.log("setSession to", res)
    },(error)=>{console.log(error)})
}

export function getSession(sessionId,setState){
    account.getSession(sessionId).then((res) => {
        setState(res)
    },(error)=>{
        console.log(error)
    })
}

export function getAccount(setState){
    console.log(account)
    account.get().then((res) => {
        setState(res)
    },(error)=>{
        console.log(error)
    })
}

export function createAccount (email,password,setState){
    account.create(
        ID.unique(),
        email,
        password,
        undefined
    ).then((res)=>{
       return login(email,password,setState)
    },(error)=>{
        console.log(error)
    })
}





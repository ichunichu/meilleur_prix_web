import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {getAccount, getSession} from "./lib/appwrite/appwrite";
import {Auth} from "./screens/Auth";
import {Header} from "./components/Header";
import {Grid} from "./components/Grid";

function App() {
  const [isLoading,setIsLoading] = useState(true)
  const [session,setSession] = useState(undefined)
  const [account,setAccount]= useState(undefined)



  useEffect(()=>{
    if (! session) {
      console.log("try getting sessionId")
      let res = localStorage.getItem("sessionId");
      console.log("sessionId", res)
      if (res) {
        getSession(res, setSession)
      }

    }


    if (! account){
      getAccount(setAccount)
    }


    console.log("EFFECT")
    console.log("account",account)
    console.log("session",session)
    if (session && session.$id){
      localStorage.setItem("sessionId",session.$id)
      console.log("stored", session.$id)
    }
    setIsLoading(false)
  },[session])

  if (isLoading){
    return <h1>Is Loading</h1>
  }

  return (
      (session && account ?<><Header/><Grid/></>: <Auth setSession={setSession}/>)

  );
}

export default App;

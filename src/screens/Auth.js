import {useState} from "react";
import {createAccount, login} from "../lib/appwrite/appwrite";

export function Auth({setSession}){
    const [newAccount,setNewAccount] = useState(false)
    return <div>
        {newAccount ? <Register setSession={setSession}/>:<Login setSession={setSession}/>}
        {newAccount ?
            <div>
                <span> already have a account ?</span>
                <button onClick={()=>{setNewAccount(!newAccount)}}>login</button>
            </div>
            :
            <div>
                <span> no account ?</span>
                <button onClick={()=>{setNewAccount(!newAccount)}}>create account</button>
            </div>}
    </div>
}

function Login({setSession}){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return <div>
        <div>
        <input value={email} onChange={(event)=>{
            setEmail(event.target.value)
        }
        } type={"email"} placeholder={"example@example.com"}/>
        <input value={password} type={"password"} onChange={(event)=>{
        setPassword(event.target.value)}
        } placeholder={"password"}/>
            <button onClick={()=>{
                login(email,password,setSession)
            }
            }>Login</button>

        </div>

    </div>
}
function Register({setSession}){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return <div>
        <div>
            <input value={email} onChange={(event)=>{
                setEmail(event.target.value)
            }
            } type={"email"} placeholder={"example@example.com"}/>
            <input value={password} type={"password"} onChange={(event)=>{
                setPassword(event.target.value)}
            } placeholder={"password"}/>
            <button onClick={()=>{
                createAccount(email,password,setSession)
            }
            }>Register</button>

        </div>

    </div>
}
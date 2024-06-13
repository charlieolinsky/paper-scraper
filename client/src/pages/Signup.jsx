import { useState } from "react"
import supabase from "../utils/supabase"

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onButtonClick = async () => {
        console.log(email)
        console.log(password)
        
        const {data, err} = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (err != null) {
            console.log(err)
        }

        console.log("user signed up")
        console.log(data)
    }

    return (
        <form id="signupForm">
            <label>
                <input 
                    value={email}
                    placeholder="Enter email"
                    onChange={(ev) => setEmail(ev.target.value)}
                />
            </label>
            <label>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                />
            </label>

            <input type="button" onClick={onButtonClick} value={'Log in'} />
        </form>
    )
}

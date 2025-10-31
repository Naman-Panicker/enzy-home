"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";





export default function Signin(){


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    async function handleSignin(){


        try{
            const res = await axios.post("http://localhost:3000/api/user",{
            username,
            password
        })

            if(res.status === 200 ){
                router.push(res.data.redirectTo)
                alert(res.data.message)
            }

            else{
                alert(res.data.message)
            }
        }

        catch(error: any){
            alert(error.response?.data?.message || "Login failed")
        }
    
    }
    



    return <div className="h-screen bg-white flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-2xl bg-gradient-to-r from-enzy-600 to-enzy-300 bg-clip-text text-transparent font-extrabold flex justify-center">
                            Sign in
                        </div>
                    </div>
                    <div className="pt-2">

                        <LabelledInput onChange={(e)=>{
                            setUsername(e.target.value);
                        }}label="Username" placeholder="Enter Admin Username"/>

                        <LabelledInput onChange = {(e)=>{
                            setPassword(e.target.value);
                        }}label="Password" type={"password"} placeholder="Enter Admin Password" />

                        <button onClick={handleSignin} type="button" className="mt-8 w-full text-white bg-gradient-to-r from-enzy-600 to-enzy-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
                    </div>
                </div>
            </a>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}

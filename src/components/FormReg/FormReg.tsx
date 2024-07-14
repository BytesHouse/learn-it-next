'use client'
import Image from "next/image"
import React, {useState} from "react";
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";


export default function FormReg() {
    const [state, setState] = useState<boolean>(false)

const handleClickTogglState = () => {
        setState(!state)

}

    return <div className="container mx-auto" >
        <Image src="/assets/images/loginimage.png"
        width="400" height="400"/>
        {state ?  <Login changeFunc={handleClickTogglState}/> : <Register/> }
    </div>
}
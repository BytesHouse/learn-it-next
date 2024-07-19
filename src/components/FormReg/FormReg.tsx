'use client'
import Image from "next/image"
import React, {useState} from "react";
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";


export default function FormReg() {
    const [state, setState] = useState<boolean>(false)

const handleClickToggleState = () => {
        setState(!state)
}

    return <div className="border mx-auto flex flex-col md:flex-row max-w-[800px] h-[500px] rounded-[20px] font-famaly: Gilroy-Medium" >
        <Image src="/assets/images/loginimage.png"
        width="400" height="400"/>
        {state ?  <Login changeFunc={handleClickToggleState}/> : <Register/> }
    </div>
}
import React from "react"
import "./Header.css"
import logo from "../../assets/1.jpg"
const Header = () => {
    return(
        <div className="flex justify-between mt-5">
            <img className="object-contain" src={logo} alt="logo" />
            <div className="cont">
                <div className="rounded-full border border-pink-500 bg-white w-36 h-10 flex items-center justify-center shadow-md">
                    <p className="text-pink-500 text-base font-normal">Try It Free</p>
                </div>  
            </div>
        </div>
    )
}

export default Header
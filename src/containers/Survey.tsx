import React from "react";
import { useNavigate } from "react-router-dom";

export default function Survey(){
    let navigate = useNavigate();
    return(
        <div>
            Select your desire questioner <b className="cursor-pointer" onClick={()=> navigate('/survey/indecision')}>indecision</b> / <b className="cursor-pointer" onClick={()=> navigate('/survey/closure')}>closure cognitive</b> 
        </div>
    )
}
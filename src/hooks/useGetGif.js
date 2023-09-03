
import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useGetGif=(category)=>{

    const [state,setstate]=useState({
        data:[],
        isLoading:true
    })

    useEffect(() => {

        setTimeout(() => {

            getGifs(category).then(data=>{
                setstate({
                    data:data,
                    isLoading:false
                })
            }) 
            
        }, 1000);         
    
    }, [category])

    return state

}
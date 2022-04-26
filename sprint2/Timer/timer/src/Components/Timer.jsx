import React, { useEffect, useState } from 'react'
               
export const Timer = () => {
    const [count,setcount]= useState(0);
    useState(()=>{
        const id= setInterval(()=>{
            setcount(function(prev){
                if(prev===30){
                    clearInterval(id);
                    return prev;
                }
                return prev+1;
            })
        },1000)

    },[]);
  return (
    <>
    <h1>Counter:{count}</h1>
    </>
  )
}
import React from 'react'
import { useParams } from 'react-router'
export default function LogIn() {
  let {category, id}=useParams()
  return (
    <div>
    

    <div>LogIn-{category}</div>
    <div>LogIn-{id}</div>

    </div>
  )
}

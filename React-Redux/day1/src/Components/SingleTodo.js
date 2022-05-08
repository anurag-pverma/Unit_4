import React from 'react'
import { useSelector } from 'react-redux'

function SingleTodo() {
    const singledata = useSelector((state)=>state.singledata)
  return (
    <div>{singledata.title}</div>
  )
}

export default SingleTodo



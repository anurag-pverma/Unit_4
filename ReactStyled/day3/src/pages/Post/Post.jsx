import React from 'react'
import { useParams } from 'react-router'

export default function Post() {
    let {Category}=useParams()
  return (
    <div>Post Page-{Category}</div>
  )
}

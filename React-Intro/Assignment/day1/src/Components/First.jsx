import React from 'react'
import JoinUs from './JoinUs'
import Settings from './Settings'
import Login from './Login'
import ContactUs from './ContactUs'
import Search from './Search'
import Help from './Help'
import Home from './Home'
import Download from './Download'
import Single from './Single'


export default function First() {
  return (
   <>
   <div className='os'>
   <h1>Mobile Operating Syestem</h1>
    <li>Android</li>
    <li>Blackberry</li>
    <li>IPhone</li>
    <li>Window Phone</li>
   </div>
   <div className="manufactures">
       <h1>Mobile Manufactures</h1>
       <li>Samsung</li>
       <li>Micromax</li>
       <li>HTC</li>
       <li>Apple</li>
   </div>

   <div className="spread">

    <JoinUs/>
    <Settings/>
    <Login/>
    <ContactUs/>
    <Search/>
    <Help/>
    <Home/>
    <Download/>
   </div>
   
   <Single/>
   
   </>
  )
}

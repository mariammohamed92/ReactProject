// import React from 'react'
// import { useState, useEffect} from 'react'
// import './About.css'
// export default function About() {
// const[quntity,setQuntity]=useState(0)
// const[userName,setUserName]=useState("Nour")

// // useeffect
// // Mounting
// useEffect(()=>{
//     console.log("Hello Mounting");
//     return ()=>{
//         console.log("Hello didMounting");

//     }
// } , [])

// // update
// useEffect(()=>{
//     if (quntity===0) {
//         return;
//     }
//     console.log("Hello update");
    
// } , [quntity])

// function increase() {
//     setQuntity(Math.random())
// }
// function Name() {
//     setUserName("Mariam")
// }
//   return <>
//   <h1 >About</h1>
//   <h2 >quntity:{quntity}</h2>
//   <h2>userName:{userName}</h2>

//   <button type="button" onClick={increase} className='btn btn-info'>Increase</button>
//   <button type="button" onClick={Name} className='btn btn-info'>change User Name</button>

  
//   </>
// }
// stateless 
// hooks  usestate 
// lifecycle useEffect(()=>{} ,[])
// Mounting useEffect(()=>{log} ,[])
// update useEffect(()=>{log} ,[count])
// unMounting useEffect(()=>{return log} ,[])

// router
// http://localhost:3000/Home
// http://localhost:3000/About
// npm i react-router-dom


import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios'
export default function Parent() {
  const[people,setPeople]=useState([])

 async  function get() {
    let {data}= await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=28ecc2fc0e774905bc6fd00ba0f65002`)
    console.log(data);
  setPeople(data.articles)
  }
  useEffect(()=>{
    get()
  } , [])
  return <>
  <div className="container">
    <div className="row">
      {people.map((ele)=>
      <div className="col-md-3" key={ele.id}>
      <img src={ele.urlToImage} alt=""className="w-100" />
        <h1>{ele.author}</h1>
        <p>{ele.description}</p>
      </div>
      )}
    </div>
  </div>
  </>
}


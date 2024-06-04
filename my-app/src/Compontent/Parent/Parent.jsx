// import React, { Component } from 'react'
// import Child  from '../Child/Child.jsx';



// export default class Parent extends Component {

 

//     state={
// Product:[
// {name:"Tosiba",Price:5000,catogry:"Tv", desc:"good",id:1},
// {name:"Htc",Price:5000,catogry:"Tv", desc:"good",id:2},
// {name:"Oppo",Price:5000,catogry:"Tv", desc:"good",id:3},

// ]
//     }

//     deleteProduct=(index)=>{
//         let Product=[...this.state.Product];
//         Product.splice(index,1);
//         this.setState({Product})
//     }


//   render() {
//     return<>
//     <div className="bg-black py-5">
// <div className="container">
//     <div className="row">
//        {this.state.Product.map((x,index)=>
//         <Child m={x} key={x.id} delete={this.deleteProduct} index={index} />
//        )}

//     </div>
// </div>
//     </div>

//     </>
//   }
// }
// 

import React from 'react'
import { useEffect , useState} from 'react'
import axios from 'axios'
export default function Parent() {
  const[people,setPeople]=useState([])

 async  function get() {
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`)
    console.log(data);
  setPeople(data.results)
  }
  useEffect(()=>{
    get()
  } , [])
  return <>
  <div className="container">
    <div className="row">
      {people.map((ele)=>
      <div className="col-md-3" key={ele.id}>
      <img src={"https://image.tmdb.org/t/p/w500" +ele.poster_path} alt=""
        className="w-100" />

        <h1>{ele.title}</h1>
        <p>{ele.overview}</p>
      </div>
      )}
    </div>
  </div>
  </>
}


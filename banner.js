import React, { useState } from 'react'
import './banner.css'
import { useEffect } from "react";
import {APIKEY,imageurl}  from '../../constants/constants'
import axios from '../axios'

function Banner() {
  const [Movie,setMovie]=useState()
  useEffect(()=>{
axios.get(`trending/all/week?api_key=${APIKEY}&language=en-US`).then((response)=>{
  console.log(response.data.results[0]);
  setMovie(response.data.results[0]);
})
  },[])
  return    (
    
        <div   style={{backgroundImage:`url(${Movie ?imageurl+ Movie.backdrop_path:""})`}}  className='banner'>
            <div className='content'>
                <h1 className='title'>{Movie?Movie.title:""}</h1>
            </div>
            <div className='banner_buttons'>
                <button className='button'>play</button>    
                <button className='button'>My List</button>         
                 </div>
                 <div className='description'>
                 <h1>{Movie?Movie.overview:""}</h1>
        </div>
       
        </div>
      )
    
  
}

export default Banner

import React from 'react'
import Youtube from 'react-youtube'
import {useEffect,useState} from 'react';
import {APIKEY,imageurl}  from '../../constants/constants'
import  axios  from "../axios";
import './RawPost.css'

function RawPost(props) {
  const [urlid,seturlId]=useState('');
  const [Movies,setMovies]=useState([]);
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results);
      
    }).catch(err=>{
      alert('network error');
    })
      },[])
      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
      };
      const handleMovie=(id)=>{
        console.log(id);
       axios.get(`/movie/${id}/videos?api_key=${APIKEY}&language=en-US`).then(response=>{
          //console.log(response.data)
          if(response.data.results.length!==0){
              seturlId(response.data.results[0])
          }
        })
      }
  return (
    
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {Movies.map((obj)=>
         
        <img  onClick={()=>handleMovie(obj.id)}   className={props.isSmall?'smallPoster':'Poster' }alt='poster' src={`${imageurl+obj.backdrop_path}`}/>
        )} 
      </div>
     {urlid && <Youtube  opts={opts} videoId={urlid.Key} />}
      
    </div>
  )
}

export default RawPost

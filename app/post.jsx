"use client"
//import useState from 'react'
import LikeButton from './like-button'

export default function Post({data}){

let {title, body, id}=data
return(
<>
<h1>{title}</h1>
<p>{body}</p>
<LikeButton/>
</>

)

}
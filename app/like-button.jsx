"use client"
import {useState} from 'react'
export default function LikeButton(){
    let [isLiked, setIsLiked]=useState(false)
    return(
        <div>
        <button onClick={()=>{setIsLiked(!isLiked)}}>{isLiked ? "unLike" : "Like"}</button>
        </div>
    )


}
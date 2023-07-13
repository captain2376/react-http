import React, { useEffect, useState } from 'react'

export const PostListOne = () => {
    const[posts,setPosts]=useState([])
    const[errMsg,setErrMsg]=useState('')
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>setPosts(data))
        .catch(err=>{
            console.log(err)
            setErrMsg('error retreiving data')
        })
    },[])
    return (
        <div>
           List of Posts{
                posts.length?posts.map(
                    post=><div key={post.id} >{post.title}</div>):null
                }
                {
                    errMsg?<div>{errMsg}</div>:null
                }
        </div>
    )
}

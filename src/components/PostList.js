import axios from 'axios'
import React, { Component } from 'react'

 class PostList extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           posts:[]
        }
      }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
      
    render() {
        const {posts}=this.state
        return (
            <div>
                List of Posts{
                this.state.posts.length?
                posts.map(
                    post=><div key={post.id} >{post.title}</div>):null
                }
            </div>
        )
    }
}

export default PostList

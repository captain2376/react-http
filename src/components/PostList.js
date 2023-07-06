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
            this.setState({
                posts:response.data
            })
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

//flow starts with constructor state property called posts
//which is an empty array
//control flows to render method :text list of posts is displayed
//actual list is not rendered because the array is empty at the moment
//control flows to componentDidMount() we make get requeset to api endpoint
//once data is retrieved update the state post property
//when we change state,component will re-render
//this time array is not empty ande hence the list of titles are
//rendered in the browser
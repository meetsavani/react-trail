import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

export default class Posts extends Component {
    state = {
        posts: []
    }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                //               console.log(res);
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }


    postList = (pos) => {
        //console.log(pos);
        // console.log(this.state);
        if (pos.length !== 0) {
            var p = pos.map(post => {
                // console.log(post);
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="ball" />
                        <div className="center card-content">
                            <Link to={'/post/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div >
                    </div >
                )
            })
            return p;
        }
        else {
            return (
                <div className="center">No posts yet
                </div>
            );
        }
    }

    render() {
        // console.log(this.state);

        // console.log(posts);
        const { posts } = this.state;
        // //   this.postList(posts);
        // const postList = posts.length ? (
        //     posts.map(post => {
        //         return (
        //             <div className="post card" key={post.id}>
        //                 <img src={Pokeball} alt="A pokeball" />
        //                 <div className="center card-content">
        //                     <Link to={'/' + post.id}>
        //                         <span className="card-title">{post.title}</span>
        //                     </Link>
        //                     <p>{post.body}</p>
        //                 </div>
        //             </div>
        //         )
        //     })
        // ) : (
        //         <div className="center">No posts yet</div>
        //     )


        return (
            <div className="container home" >
                <h4 className="center">Posts</h4>
                {this.postList(posts)}
            </div>
        );
    }
}

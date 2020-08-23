import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../action/pa'

class Home extends Component {
    handleChange = (e) => {
        this.props.deletePost(e);
    }
    render() {
        console.log(this.props);

        // console.log(this.state);

        // console.log(posts);
        //const { posts } = this.state;
        // //   this.postList(posts);
        // const handleChange = () => {
        //     this.props.deletePost(this.props.post.id);
        // }

        const postList = this.props.posts.length ? (
            this.props.posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="center card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                            <button className="btn" onClick={() => { this.handleChange(post.id) }}>Delete</button>
                        </div>

                    </div>
                )
            })
        ) : (
                <div className="center">No posts yet</div>
            )


        return (
            <div className="container home" >
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
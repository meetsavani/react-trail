const initState = {
    posts: [
        { id: '1', title: 'title1', body: 'loren ipsum ipsum1' },
        { id: '2', title: 'title2', body: 'loren ipsum ipsum2' },
        { id: '3', title: 'title3', body: 'loren ipsum ipsum3' }
    ]
}

const reducer = (state = initState, action) => {
    console.log(action);
    if (action.type === "DELETE_POST") {
        let newPost = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPost
        }
    }

    return state;
}

export default reducer;
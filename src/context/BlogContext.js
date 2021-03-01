import createDataContext from './createDataContext'

const reducer =(state, action)=>{
    switch (action.type) {
        case 'add':
            return [...state, {title: action.title, content:action.content,  id: Math.floor(Math.random()*99999)}]
        case 'delete':
            return state.filter((blogPost)=>blogPost.id !== action.payload)
        case 'edit':
            return state.map((blogPost)=>{
                return blogPost.id===action.payload.id ? action.payload : blogPost
            })
        default:
            return state
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({type:'add', title, content})
        callback()
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type:'delete', payload: id})
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback)=>{
        dispatch({type:'edit', payload: {id, title, content}})
        callback()
    }
}

export const {Context, Provider} = createDataContext(
    reducer,
    {addBlogPost, deleteBlogPost, editBlogPost},
    [{title: 'test title', content:'test content', id:1}]
)
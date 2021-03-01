import createDataContext from './createDataContext'
import JsonServer from '../api/JsonServer'

const reducer =(state, action)=>{
    switch (action.type) {
        case 'get':
            return action.payload
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

const getBlogPosts = dispatch => {
    return async () => {
        const response = await JsonServer.get('/blogposts')

        dispatch({ type: 'get', payload: response.data })
    }
}

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await JsonServer.post('/blogposts',{title, content})
        if(callback) {
            callback()
        }
    }
}

const deleteBlogPost = dispatch => {
    return async (id) => {
        await JsonServer.delete(`/blogposts/${id}`)
        dispatch({type:'delete', payload: id})
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback)=>{
        await JsonServer.put(`/blogposts/${id}`,{title, content})
        dispatch({type:'edit', payload: {id, title, content}})
        if (callback) {
            callback()            
        }
    }
}

export const {Context, Provider} = createDataContext(
    reducer,
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    []
)
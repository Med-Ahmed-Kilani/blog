import React from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
    const blogPosts = [
        {name:'ahmed',age:21},
        {name:'mouhamed',age:21}
    ]
    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext
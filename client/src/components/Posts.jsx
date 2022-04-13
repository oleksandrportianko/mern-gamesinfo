import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../redux/reducers/postsReducer'

const Posts = () => {
   const dispatch = useDispatch()
   const allPosts = useSelector(state => state.posts.allPosts)

   useEffect(() => {
      dispatch(getAllPosts())
   }, [dispatch])

  return (
   <div>
      All Posts
      {allPosts.map(post => (
         <div key={post._id}>{post.name}/{post.title}</div>
      ))}
   </div>
  )
}

export default Posts
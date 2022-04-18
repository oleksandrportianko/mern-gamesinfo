import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../redux/reducers/authReducer'
import { getAllPosts } from '../redux/reducers/postsReducer'

const Posts = () => {
   const dispatch = useDispatch()
   const allPosts = useSelector(state => state.posts.allPosts)

   const getUserInformation = () => {
      dispatch(getUserData())
   }

   useEffect(() => {
      dispatch(getAllPosts())
   }, [dispatch])

  return (
   <div>
      All Posts
      {allPosts.map(post => (
         <div key={post._id}>{post.name}/{post.title}</div>
      ))}
      <button onClick={() => getUserInformation()} className='button-form'>Get data</button>
   </div>
  )
}

export default Posts
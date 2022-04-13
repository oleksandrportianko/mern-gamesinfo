import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewPost } from '../redux/reducers/postsReducer'

const AddPostForm = () => {
   const [title, setTitle] = React.useState('')
   const [name, setName] = React.useState('')
   const dispatch = useDispatch()

   const addNewGamesPost = () => {
      dispatch(addNewPost(title, name))
   }
 
  return (
   <div className='d-flex flex-column'>
      AddPostForm
      <input className='input-form' type="text" onChange={(e) => setName(e.target.value)} placeholder='Name...' />
      <input className='input-form' type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Title...' />
      <button className='button-send-form' onClick={() => addNewGamesPost()}>Add post</button>
   </div>
  )
}

export default AddPostForm
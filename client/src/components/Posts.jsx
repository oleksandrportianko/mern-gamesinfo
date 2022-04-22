import { Modal } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../redux/reducers/postsReducer'
import { addNewPost } from '../redux/reducers/postsReducer'

const Posts = () => {
   const dispatch = useDispatch()
   const allPosts = useSelector(state => state.posts.allPosts)
   const isAuth = useSelector((state) => state.auth.isAuth)
   const [showModal, setShowModal] = useState(false);
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

   const handleShowClose = () => setShowModal(false);
   const handleShowOpen = () => setShowModal(true);

   const addPost = () => {
      dispatch(addNewPost(title, description))
   }

   useEffect(() => {
      dispatch(getAllPosts())
   }, [dispatch])

   return (
      <div>
         {isAuth ?
            <button class="show-modal-for-add-post-button" onClick={() => handleShowOpen()}>
               Add new post
            </button> : ''}
         {allPosts.map(post => (
            <div key={post._id}>{post.name}/{post.title}</div>
         ))}
         <Modal show={showModal} onHide={() => handleShowClose()} centered>
            <Modal.Header closeButton>
               <Modal.Title>Adding new post</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column'>
               <label htmlFor="title mt-1">Title</label>
               <input className='input-add-post' onChange={(e) => setTitle(e.target.value)} type="text" name='title' placeholder='Title' />
               <label htmlFor="description">Description</label>
               <textarea className='textarea-add-post' onChange={(e) => setDescription(e.target.value)} type="text" name='description' placeholder='Description' />
               <button onClick={() => addPost()} className='button-add-post mt-4'>Add post</button>
            </Modal.Body>
         </Modal>
      </div>
   )
}

export default Posts
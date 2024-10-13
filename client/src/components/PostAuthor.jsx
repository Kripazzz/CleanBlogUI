
import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/rmphoto.jpg'

const PostAuthor = () => {
  console.log('PostAuthor rendered');
  return (
    <Link to={`/posts/users/sdfsdf`} className='post_author'>
      <div className="post_author-avatar">
        <img src={Avatar} alt="Author Avatar" />
      </div>
      <div className='post_author_details'>
        <h5>By: Ernest Achiever</h5>
        <small>Just Now</small>
      </div>
      
    </Link>
  )
}

export default PostAuthor

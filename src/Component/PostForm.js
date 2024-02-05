import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'

function PostForm({post={title:"this is default post Form title",
content:"this is default content"}}) {
  return (
  <Card className='border-0 shadow-sm mt-3'>
    <CardBody>
        <h1>{post.title} </h1>
        <CardText>
            {post.content}
        </CardText>
              <div>
            <Link className='btn btn-secondary' to={'/single/'+post.postId}>View Application </Link>
        </div>
    </CardBody>
  </Card>
  )
}

export default PostForm
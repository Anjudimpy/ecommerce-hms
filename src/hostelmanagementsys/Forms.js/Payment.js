import React from 'react'
import { Form } from 'reactstrap'
import { useState } from 'react'
import {Input} from 'reactstrap'

const Payment = () => {

  
  const [post, setPost]=useState({
    title:'',
    content:'',
    categoryId:''
  })

  const fieldChanged=(event)=>{
    setPost({...post,'title':event.target.value})
  }
  return (
    <div>
      <div>
  <Input
    bsSize="sm"
  />
</div>
        {JSON.stringify(post)}
      {/* <Form>
        <label for="title">test</label>
        <input
        type='text'
        id='title'
        placeholder='enter here'
        name='title'
        onChange={fieldChanged}
        />
      </Form> */}
    </div>
  )
}

export default Payment
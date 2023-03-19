import React from 'react'
import CommentForm from './CommentForm'

const CreateComment = (props: any) => {
  return (
    <div>
        <CommentForm onSave={props.onSave} />
    </div>
  )
}

export default CreateComment

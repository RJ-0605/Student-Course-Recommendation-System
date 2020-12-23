import React from 'react'

export default function CommentBox( { value, onChange, addNewComment } ) {

  function handleChange(e) {
    onChange(e.target.value)
  } 

  
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Leave a comment</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={value} onChange={handleChange} ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick={e => {
        e.preventDefault(); 
        addNewComment();
      }} >Comment</button>
    </form>
  )
}
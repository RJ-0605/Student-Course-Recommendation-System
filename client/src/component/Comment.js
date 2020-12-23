import React from 'react'

export default function Comment( {comment} ) {
  return (
    <div className="media mt-5">
      <i className='bx bxs-face-mask' style={{  fontSize: "48pt" }}></i>
      <div className="media-body pl-3">
        <h5 className="mt-0">Anonymous</h5>
        <span> { comment } </span>
      </div>
    </div>
  )
}
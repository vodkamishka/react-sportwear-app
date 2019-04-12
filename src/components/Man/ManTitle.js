import React from 'react'

const ManTitle = (props) => {
    return (
      <div className="row">
      <div className = "col-10 mx-auto my-1 text-center">
      <h1 className = "text-capitalize font-weight-bold text">
      {props.title}<strong className = "text-blue">{props.products}</strong>
      </h1>
      </div>
      </div>
    )
  }

  export default ManTitle;

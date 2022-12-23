import React, { useState } from 'react'
// import PropTypes from 'prop-types'

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Sorry Sir, Blank fields are not allowed !")
    }
    else{
      props.addTodo(title, desc)
      setTitle("")
      setDesc("")
    }
  }
  return (
    <div className='container my-3'>
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" value={title} className="form-control" id="title" onChange={(e) => { setTitle(e.target.value) }} aria-describedby="Title-help" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Describtion</label>
          <input type="text" value={desc} className="form-control" onChange={(e) => { setDesc(e.target.value) }} id="desc" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  )
}

// AddTodo.propTypes = {

// }

export default AddTodo

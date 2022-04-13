import React from 'react'

const CardItem = ({ task, status }) => {
  const statusClasses = status == 'cp' ? 'bg-blue-600' : 'bg-orange-600'
  return (
    <div className="mb-2 cursor-grab rounded-sm bg-white py-1 px-2 shadow-md">
      <div className={`my-2 h-2 w-12 rounded-full ${statusClasses}`}></div>
      <p>{task}</p>
    </div>
  )
}

export default CardItem

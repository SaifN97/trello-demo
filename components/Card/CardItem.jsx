import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const CardItem = ({ task, status, id, index }) => {
  const statusClasses = status == 'cp' ? 'bg-blue-600' : 'bg-orange-600'
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="mb-2 rounded-sm bg-white py-1 px-2 text-sm text-slate-700 shadow-md"
        >
          <div className={`my-2 h-2 w-12 rounded-full ${statusClasses}`}></div>
          <p>{task}</p>
        </div>
      )}
    </Draggable>
  )
}

export default CardItem

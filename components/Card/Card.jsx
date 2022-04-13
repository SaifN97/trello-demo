import React, { useEffect, useRef, useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { v4 as uuid } from 'uuid'
import CardItem from './CardItem'

const Card = ({ card }) => {
  const { id, title, cardItems } = card

  const inputRef = useRef()
  const [taskInput, setTaskInput] = useState('')
  const [visible, setVisible] = useState(false)
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    setTaskList([...cardItems])
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!taskInput) {
      setVisible(false)
      return
    }
    setTaskList((prev) => {
      return [...prev, { id: uuid(), title: taskInput, status: 'cp' }]
    })
    setVisible(false)
    resetInput()
  }

  const resetInput = () => {
    setTaskInput('')
    setVisible(false)
  }
  return (
    <>
      <div className="min-w-[300px] rounded-sm bg-slate-200 p-3">
        <h1 className="mb-2 text-sm font-semibold tracking-normal text-slate-700">
          {title}
        </h1>
        <Droppable droppableId={id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {taskList.map(({ id, title, status }, index) => (
                <CardItem
                  key={id}
                  id={id}
                  task={title}
                  status={status}
                  index={index}
                />
              ))}
            </div>
          )}
        </Droppable>
        <form>
          {visible && (
            <textarea
              ref={inputRef}
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Write a task"
              className=" w-full rounded-md px-3 py-1 outline-none "
            />
          )}
          {!visible && (
            <button
              type="button"
              className="my-2 w-full rounded-sm bg-slate-500 py-1 px-3 text-center text-white"
              onClick={() => setVisible(true)}
            >
              New Task
            </button>
          )}
          {visible && (
            <div className="gap-3 md:flex">
              <button
                type="submit"
                onClick={handleSubmit}
                className="my-2 w-full rounded-sm bg-green-500 py-1 px-3 text-center text-white"
              >
                Add Task
              </button>
              <button
                type="button"
                onClick={resetInput}
                className="my-2 w-full rounded-sm bg-red-500 py-1 px-3 text-center text-white"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  )
}

export default Card

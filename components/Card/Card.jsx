import React from 'react'

const Card = ({ title, children }) => {
  return (
    <div className="min-w-[300px] rounded-sm bg-slate-200 p-3">
      <h1 className="mb-2 text-base font-semibold tracking-normal">{title}</h1>
      {children}
    </div>
  )
}

export default Card

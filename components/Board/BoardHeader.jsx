import { ImEarth } from 'react-icons/im'
import { BiFilter, BiDotsHorizontal } from 'react-icons/bi'

const BoardHeader = () => {
  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-4">
        <h1 className="pl-10 text-xl font-bold text-white">Kanban Board</h1>

        <span className="divider"></span>
        <button className="flex items-center gap-2 rounded-sm bg-sky-500 px-2 py-1 text-white hover:opacity-90">
          <ImEarth className="text-sm text-white" />
          Public
        </button>
        <span className="divider"></span>

        <button className="relative h-8 w-8 rounded-full bg-slate-200 p-1 font-semibold ">
          SN
          <img
            src="/assets/chevron.png"
            alt="chevron"
            className="absolute bottom-0 right-0 h-3 w-3"
          />
        </button>
      </div>

      <div className=" flex gap-4">
        <span className="divider"></span>
        <button className="flex items-center gap-2 rounded-sm bg-sky-500 px-2 py-1 text-white  hover:opacity-90">
          <BiFilter className="text-xl" /> Filter
        </button>
        <button className="flex items-center gap-2 rounded-sm bg-sky-500 px-2 py-1 text-white hover:opacity-90">
          <BiDotsHorizontal /> Show menu
        </button>
      </div>
    </div>
  )
}

export default BoardHeader

import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import BoardHeader from '../components/Board/BoardHeader'
import Card from '../components/Card/Card'
import store from '../data'

const Home = () => {
  const [data, setData] = useState(store)

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) return

    // const sourceCard = data.cards[source.droppableId]
    // const destinationCard = data.cards[destination.droppableId]
    // console.log(source)
    // const draggingCard = sourceCard.cardItems.filter(
    //   (card) => card.id === draggableId
    // )[0]

    // if (source.droppableId === destination.droppableId) {
    //   sourceCard.cardItems.splice(source.index, 1)
    //   destinationCard.cardItems.splice(destination.index, 0, draggingCard)
    //   const newState = {
    //     ...data,
    //     cardItems: {
    //       ...data.cards,
    //       [sourceCard.id]: destinationCard,
    //     },
    //   }
    //   setData(newState)
    // }
  }
  return (
    <div className="min-h-screen overflow-x-scroll bg-sky-600">
      <BoardHeader />
      <main>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="min-w-4xl flex items-start space-x-3 px-3">
            {data.cardIds.map((id) => {
              const card = data.cards[id]

              return <Card card={card} key={id} />
            })}
          </div>
        </DragDropContext>
      </main>
    </div>
  )
}

export default Home

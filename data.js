import { v4 as uuid } from 'uuid'

const todoItems = [
  {
    id: uuid(),
    title: 'Help Desk Call AA984',
    status: 'cp',
  },
  {
    id: uuid(),
    title: 'Help Desk Call AA879',
    status: 'cp',
  },
]
const devItems = [
  {
    id: uuid(),
    title: 'Help Desk Call AA156',
    status: 'fault',
  },
  {
    id: uuid(),
    title: 'Help Desk Call AA456',
    status: 'cp',
  },
]
const testItems = [
  {
    id: uuid(),
    title: 'Help Desk Call AA198',
    status: 'fault',
  },
]
const doneItems = [
  {
    id: uuid(),
    title: 'Help Desk Call AA861',
    status: 'cp',
  },
  {
    id: uuid(),
    title: 'Help Desk Call AA356',
    status: 'fault',
  },
]

const data = {
  cards: {
    'card-1': {
      id: uuid(),
      title: 'To Do',
      cardItems: todoItems,
    },
    'card-2': {
      id: uuid(),
      title: 'Development',
      cardItems: devItems,
    },
    'card-3': {
      id: uuid(),
      title: 'Testing',
      cardItems: testItems,
    },
    'card-4': {
      id: uuid(),
      title: 'Done',
      cardItems: doneItems,
    },
  },
  cardIds: ['card-1', 'card-2', 'card-3', 'card-4'],
}

export default data

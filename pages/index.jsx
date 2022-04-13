import BoardHeader from '../components/Board/BoardHeader'
import Card from '../components/Card/Card'
import CardItem from '../components/Card/CardItem'

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-scroll bg-sky-600">
      <BoardHeader />
      <main>
        <div className="min-w-4xl flex space-x-3 px-3">
          <Card title={'To Do'}>
            <CardItem task={'Helpdesk Call AA11568'} status="cp" />
            <CardItem task={'Helpdesk Call AA11348'} status="cp" />
          </Card>
          <Card title={'Development'}>
            <CardItem task={'Helpdesk Call AA11778'} status="fault" />
            <CardItem task={'Helpdesk Call AA11523'} status="cp" />
          </Card>
          <Card title={'Testing'}>
            <CardItem task={'Helpdesk Call AA34568'} status="fault" />
          </Card>
          <Card title={'Done'}>
            <CardItem task={'Helpdesk Call AA12435'} status="cp" />
            <CardItem task={'Helpdesk Call AA01763'} status="fault" />
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Home

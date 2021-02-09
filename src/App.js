import Header from './components/Header/header'
import TinderCard from './components/tinderCards/tinderCards'
import SwipeButtons from './components/swipeButtons/swipeButtons'
import StoreProvider from './store/store'
import './App.css'

function App () {
  return (
    <div className='app'>
      <StoreProvider>
        <Header />
        <TinderCard />
        <SwipeButtons />
      </StoreProvider>
    </div>
  )
}

export default App

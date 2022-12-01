import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import { store } from './redux'
import GamePage from './pages/GamePage/GamePage'
import OrderPage from './pages/OrderPage/OrderPage'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
        <Routes>
          <Route path="/games/:title" element={<GamePage />} exact />
        </Routes>
        <Routes>
          <Route path="/order" element={<OrderPage />} exact />
        </Routes>
      </div>
    </Provider>
  )
}

export default App

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchInitialData } from './service/initialload'
import SearchPage from './components/search/SearchPage'
import 'typeface-roboto'
import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchInitialData())
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <SearchPage />
      </header>
    </div>
  )
}

export default App

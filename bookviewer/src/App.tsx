import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchBookData } from './services/bookDataService'
import { BookData } from './types';
import Chapter from './components/Chapter'
import Home from './components/Home';
import './App.css'

function App() {
 const [data, setData] = useState<BookData>({
  book: '',
  chapters: []
 })

  useEffect(()  => {
    fetchBookData()
    .then(data => {
      console.log(data)
        setData(data)
      })
  }, [])


  return (
    <>
      <div className="header">
        <h1>{data.book}</h1>
        <h2>by Sir Arthur Conan Doyle</h2>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home chapters={data.chapters}/>}></Route>
          <Route path="/chapters/:name" element={<Chapter chapters={data.chapters}/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App

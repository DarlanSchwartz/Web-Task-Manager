import { useState } from 'react'
import MainPage from './Pages/MainPage'
import GlobalStyle from './globalStyle'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle/>
      <MainPage/>
    </>
  )
}

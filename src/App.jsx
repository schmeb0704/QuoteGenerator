import React from 'react'
import Quote from './components/quoteBox'

function App() {
  const [quoteList, setQuoteList] = React.useState([])
  let ranNum = Math.floor(Math.random() * quoteList.length)

  React.useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => setQuoteList(data))
  }, [])

  return (
    <>
      <Quote list={quoteList} num={ranNum}/>
    </>
  )
}

export default App

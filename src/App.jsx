import React from 'react'
import Quote from './components/quoteBox'

function App() {
  const [quoteList, setQuoteList] = React.useState([])
  const [ranNum, setRanNum] = React.useState(Math.floor(Math.random() * quoteList.length))

  React.useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => setQuoteList(data))
  }, [])

  function changeQuote(){
    setRanNum(Math.floor(Math.random() * quoteList.length))
  }

  return (
    <>
      <Quote list={quoteList} num={ranNum}/>
      <button onClick={changeQuote}>New Quote</button>
    </>
  )
}

export default App

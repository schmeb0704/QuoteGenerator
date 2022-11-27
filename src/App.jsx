import React from 'react'
import Quote from './components/quoteBox'

function App() {
  const [quoteList, setQuoteList] = React.useState([])
  

  React.useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => setQuoteList(data))
  }, [])

  const [ranNum, setRanNum] = React.useState(Math.floor(Math.random() * quoteList.length))

  function changeQuote(){
    setRanNum(Math.floor(Math.random() * quoteList.length))
  }

  return (
    <>
      <main id="quote-box">
        <Quote list={quoteList} num={ranNum}/>
        <button id="new-quote" onClick={changeQuote}>New Quote</button>
      </main>
    </>
  )
}

export default App

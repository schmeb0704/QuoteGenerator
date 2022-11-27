import React from 'react'
import Quote from './components/quoteBox'

function App() {
  const [quoteList, setQuoteList] = React.useState([])
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)

  React.useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => setQuoteList(data))
  }, [])

  const [ranNum, setRanNum] = React.useState(Math.floor(Math.random() * quoteList.length))

  function changeQuote(){
    setRanNum(Math.floor(Math.random() * quoteList.length))
    const randomColor = `rgb(${r}, ${g}, ${b})`
    const root = document.querySelector(".background")
    const box = document.querySelector("#quote-box")
    root.style.backgroundColor = randomColor
    box.style.color = randomColor
  }


  return (
    <>
    <div className="background">
      <main id="quote-box">
          <Quote list={quoteList} num={ranNum} clickEvent={changeQuote}/>
        </main>
    </div>

    </>
  )
}

export default App

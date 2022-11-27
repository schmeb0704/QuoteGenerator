import React from "react"

export default (props) =>{
  const [quoteList, setQuoteList] = React.useState([])
  let ranNum = Math.floor(Math.random() * quoteList.length)

  React.useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => setQuoteList(data))
  }, [])

  const newList = quoteList.map(quote => {
    return( 
    <>
      <h1 id={Date.now()} className="quote-text">{quote.text}</h1>
      <p className="author">{quote.author}</p>
    </>)
    
  })

  return(
    <div>
      {newList[ranNum]}
    </div>
  )
}
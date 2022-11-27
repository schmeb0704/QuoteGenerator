import React from "react"

export default (props) =>{
  const quoteList = props.list
  const newList = quoteList.map(quote => {
    return( 
    <>
      <h1 id={Date.now()} className="quote-text">{quote.text}</h1>
      <p className="author">{quote.author}</p>
    </>)
    
  })

  return(
    <div>
      {newList[props.num]}
    </div>
  )
}
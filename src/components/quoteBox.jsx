import React from "react"

export default (props) =>{
  const quoteList = props.list
  const newList = quoteList.map(quote => {
    return( 
    <>
      <h1 key={Date.now()} id="text" className="quote-text"><span className="material-symbols-outlined">format_quote</span>{quote.text}</h1>
      <p id="author">{quote.author}</p>
    </>)
    
  })

  return(
    <div>
      {newList[props.num]}
    </div>
  )
}
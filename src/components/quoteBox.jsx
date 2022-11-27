import React from "react"

export default (props) =>{
  const quoteList = props.list
  const newList = quoteList.map(quote => {
    const href = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`
    return( 
    <>
      <h1 key={Date.now()} id="text" className="quote-text"><span className="material-symbols-outlined">format_quote</span>{quote.text}</h1>
      <p id="author">{quote.author}</p>
      <a id="tweet-quote" href={href}><i className='bx bxl-twitter'></i></a>
    </>)
    
  })

  const toDisplay = newList[props.num]
  const wtf = quoteList[props.num]

  

  return(
    <div>
      {toDisplay}
     
    </div>
  )
}
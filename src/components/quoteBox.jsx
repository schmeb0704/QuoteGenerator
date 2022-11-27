import React from "react"

export default (props) =>{
  const quoteList = props.list
  const newList = quoteList.map(quote => {
    const href = quote.author !== null ? `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}` : `https://twitter.com/intent/tweet?text="${quote.text}" - Unknown`
    return( 
    <>
      <section className="quote-part">
        <h1 key={Date.now()} id="text" className="quote-text"><span className="material-symbols-outlined">format_quote</span>{quote.text}</h1>
        <p id="author">{quote.author}</p>
      </section>
      <section className="buttons">
        <button className="tweet-btn"><a id="tweet-quote" href={href} target="_blank"><i className='bx bxl-twitter'></i></a></button>
        <button id="new-quote" onClick={props.clickEvent}>New Quote</button>
      </section>
    </>)
    
  })
  const toDisplay = newList[props.num]

  

  return(
    <div className="wrapper">
      {toDisplay}
    </div>
  )
}
import React from 'react'

export default function Quote({ quote }: { quote: { text: string; author: string; } }) {
  
  return(
  <div>{quote.text}</div>
  )
}

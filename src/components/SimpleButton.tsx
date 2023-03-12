import React from "react"

export function SimpleButton() {
  const [count, setCount] = React.useState(0)
  return <button onClick={()=>setCount(count+1)}>Click me: {count}</button>
}

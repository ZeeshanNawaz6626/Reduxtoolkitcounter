import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const count = useSelector((state) => state.counter.value)
  return (
    <>
  
    <h1>Header</h1>
    {count}
    </>
  )
}

export default Header
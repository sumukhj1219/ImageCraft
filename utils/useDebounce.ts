import React, { useEffect, useState } from 'react'

const useDebounce = (value:string, delay:number) => {
  const [debounced, setDebounced] = useState(value)
  useEffect(()=>{
    const timer = setTimeout(()=>{
        setDebounced(value)
    }, delay || 500)
    return ()=> {
        clearTimeout(timer)
      }
  }, [value, delay])
  return debounced
}

export default useDebounce

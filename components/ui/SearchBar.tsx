'use client'
import useDebounce from '@/utils/useDebounce'
import { useRouter, useSearchParams } from 'next/navigation'
import queryString from 'query-string'
import React, { ChangeEventHandler, useEffect, useState } from 'react'

const SearchBar = () => {
  const router = useRouter()
  const params = useSearchParams()
  const name = params.get('name')
  const [value, setValue] = useState(name || "")
  const debounced = useDebounce(value, 500)
  console.log(debounced)
  const onChange:ChangeEventHandler<HTMLInputElement>=(e)=>{
    setValue(e.target.value)
  }
  useEffect(()=>{
    const query={
        name:debounced,
    }
    const url = queryString.stringifyUrl({
        url: window.location.href,
        query
    }, {skipEmptyString:true, skipNull:true})
    router.push(url)
  }, [debounced, router])
  return (
    <div>
       <div className="form-control m-2">
      <input type="text" onChange={onChange} value={value} placeholder="Search" className="input input-bordered w-96 md:w-auto" />
    </div>
    </div>
  )
}

export default SearchBar

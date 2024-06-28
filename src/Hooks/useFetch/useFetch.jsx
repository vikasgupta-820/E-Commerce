import React, { useCallback, useState } from 'react'

const useFetch = () => {
    const[data, setData] = useState(null)
    const[isloading,setIsLoading] = useState(false)
    const[error, setError] = useState(null)

    const fetchData = useCallback(async(url,headers={}) => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch(url,headers)
            if(!response.ok)
                {
                    throw new Error('Network response was not ok');
                }
            const result = await response.json()
            setData(result)
            
        } catch (error) {
            setError(error)
        } finally{
            setIsLoading(false)
        }

    },[])


  return {data,isloading,error,fetchData}
}

export default useFetch
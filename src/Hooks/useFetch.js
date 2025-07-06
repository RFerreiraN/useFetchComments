import { useEffect, useState } from 'react';

export const useFetch = (url) => {

  const [comment, setComment] = useState({
    data: null,
    isLoading: true,
    errors: null
  })

  const getFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json()
      setComment({
        data,
        isLoading: false,
        errors: null
      })
    } catch (error) {
      setComment({
        data: null,
        isLoading: false,
        errors: error
      })
    }
  }

  useEffect(() => {
    if (!url) return
    getFetch()
  }, [url])

  return {
    data: comment.data,
    isLoading: comment.isLoading,
    errors: comment.errors
  }
}

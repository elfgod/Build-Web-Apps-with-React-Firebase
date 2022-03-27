import React, { useEffect } from 'react'

import { useParams, useHistory } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Article = () => {
  const { id } = useParams()
  const url = 'http://localhost:3000/articles/' + id
  const { data: article, isPending, error } = useFetch(url)
  const history = useHistory()

  useEffect(() => {
    if (error) {
      // redirect
      // history.goBack()
      setTimeout(() => {
        history.push('/')
      }, 2000)
    }
  }, [error, history])

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div className='card'>
          <h2>{article.title}</h2>
          <p>By 2{article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}

export default Article

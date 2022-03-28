import React from 'react'
import RecipeList from '../../components/RecipeList'
import { useFetch } from '../../hooks/useFetch'
// styles
import './Home.css'

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Home

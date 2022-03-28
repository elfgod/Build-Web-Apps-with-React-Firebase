import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// Styles
import './Search.css'

// Components
import RecipeList from '../../components/RecipeList'

const Search = () => {
  // ?q=
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/recipes?q=' + query
  const { error, isPending, data } = useFetch(url)

  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {/* We already have a RecipeList UI we just need to pass the data props */}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Search

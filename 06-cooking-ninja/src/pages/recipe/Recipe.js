import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'

const Recipe = () => {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { error, isPending, data: recipe } = useFetch(url)
  return (
    <div className='recipe'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe

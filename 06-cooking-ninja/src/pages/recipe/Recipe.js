import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'

// styles
import './Recipe.css'

const Recipe = () => {
  const { id } = useParams()
  // Json web server
  // const url = 'http://localhost:3000/recipes/' + id
  // const { error, isPending, data: recipe } = useFetch(url)
  const { mode } = useTheme()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        console.log(doc)
        if (doc.exists) {
          setIsPending(false)
          setRecipe(doc.data())
        } else {
          setIsPending(false)
          setError('Could not find recipe')
        }
      })

    // Ubsubscribe to prevent memory leaks, from listener
    return () => unsub()
  }, [id])

  const handleClick = () => {
    console.log('id: ', id)
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Something completely different',
    })
  }

  return (
    <div className={`recipe ${mode}`}>
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
          <button onClick={handleClick}>Update Me</button>
        </>
      )}
    </div>
  )
}

export default Recipe

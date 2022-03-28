import { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Create.css'

const Create = () => {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()

  const { postData, data, error } = useFetch(
    'http://localhost:3000/recipes',
    'POST'
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime, ingredients)
    // We don't to pass in an id, json server automatically generates one
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes',
    })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
      setNewIngredient('')
      ingredientInput.current.focus()

      // Another way to do it:
      // setIngredients([...ingredients, newIngredient])
      // setNewIngredient('')
      // ingredientInput.current.focus()
    }
  }

  // redirect the user when we get date response
  useEffect(() => {
    if (data) {
      // Sending the user to the home page after creating a new recipe
      history.push('/')
      // Sending the user to the recipe page
      // history.push('/recipes/' + data.id)
      // Another way to do it:
      // window.location.href = '/'
    }
  }, [data])

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className='btn' onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{' '}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>
        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking time (minutes)</span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className='btn'>submit</button>
      </form>
    </div>
  )
}

export default Create

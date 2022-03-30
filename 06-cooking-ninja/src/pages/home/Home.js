import { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'

// Components
import RecipeList from '../../components/RecipeList'
// import { useFetch } from '../../hooks/useFetch'

// styles
import './Home.css'

const Home = () => {
  // Json web server
  // const { data, isPending, error } = useFetch('http://localhost:3000/recipes')

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').onSnapshot(
      (snapshot) => {
        console.log('snapshot: ', snapshot)
        if (snapshot.empty) {
          setError('No recipes to load')
          setIsPending(false)
        } else {
          let results = []
          snapshot.forEach((doc) => {
            console.log('doc: ', doc)
            results.push({ id: doc.id, ...doc.data() })
          })
          setData(results)
          setIsPending(false)
        }
      },
      (err) => {
        setError(err.message)
        setIsPending(false)
      }
    )
    // Ubsubscribe to prevent memory leaks, from listener
    return () => unsub()
  }, [])

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Home

// Without real time listener
//  useEffect(() => {
//    setIsPending(true)

//    projectFirestore
//      .collection('recipes')
//      .get()
//      .then((snapshot) => {
//        console.log('snapshot: ', snapshot)
//        if (snapshot.empty) {
//          setError('No recipes to load')
//          setIsPending(false)
//        } else {
//          let results = []
//          snapshot.forEach((doc) => {
//            console.log('doc: ', doc)
//            results.push({ id: doc.id, ...doc.data() })
//          })
//          setData(results)
//          setIsPending(false)
//        }
//      })
//      .catch((err) => {
//        setError(err)
//        setIsPending(false)
//      })
//  }, [])

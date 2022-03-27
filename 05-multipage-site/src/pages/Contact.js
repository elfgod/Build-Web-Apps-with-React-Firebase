import { useLocation } from 'react-router-dom'

const Contact = () => {
  const queryString = useLocation().search
  console.log(queryString)

  // This gives us a queryParams object
  const queryParams = new URLSearchParams(queryString)
  // ?name=mario&age=30
  const name = queryParams.get('name')
  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illo
        accusamus rem perferendis quasi nisi. At nobis fugit deleniti ipsum
        rerum commodi iure. Commodi accusamus, autem facere labore eum
        perspiciatis.
      </p>
    </div>
  )
}

export default Contact

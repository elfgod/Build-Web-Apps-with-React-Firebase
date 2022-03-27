import '../styles/Title.css'

export function Title({ title, subtitle }) {
  return (
    <div className='title-block'>
      <h2 className='title'>{title}</h2>
      <br />
      <h3 className='subtitle'>{subtitle}</h3>
    </div>
  )
}

export default Title

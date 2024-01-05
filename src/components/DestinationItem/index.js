import './index.css'

const DestinationItem = props => {
  const {destinationSearch} = props
  const {name, imgUrl} = destinationSearch
  return (
    <li className="image-container">
      <div>
        <img src={imgUrl} className="image" alt=" search icon" />
      </div>
      <h1 className="image-title"> {name} </h1>
    </li>
  )
}

export default DestinationItem

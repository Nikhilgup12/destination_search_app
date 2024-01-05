import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}
  onChangeSearch = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="main-heading"> Destination Search </h1>
          <input
            type="search"
            onChange={this.onChangeSearch}
            className="inputSearch"
            placeholder="search"
            value={searchInput}
          />
          <ul className="search-list">
            {searchResult.map(eachDestination => (
              <DestinationItem
                destinationSearch={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch

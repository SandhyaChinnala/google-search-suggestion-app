// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onEnterSuggestion} = props
  const {suggestion} = suggestionDetails

  const onEnter = () => {
    onEnterSuggestion(suggestion)
  }

  return (
    <li className="suggestion-item-container">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="go-button" onClick={onEnter}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="left-arrow-img"
        />
      </button>
    </li>
  )
}
export default SuggestionItem

import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClick} = props

  const onClickTabItem = () => {
    onClick(tabDetails.tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`tab-item-button ${isActive ? 'active-tab' : ''}`}
        type="button"
        onClick={onClickTabItem}
      >
        {tabDetails.displayText}
      </button>
    </li>
  )
}

export default TabItem

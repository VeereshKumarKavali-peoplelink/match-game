import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'

import './index.css'

const Game = props => {
  const {
    allImagesList,
    tabs,
    thumbnailImages,
    activeTabId,
    currentImageId,
    onClickTab,
    onClickThumbnail,
  } = props

  const getImage = () =>
    allImagesList.find(image => image.id === currentImageId)

  const renderTabs = () => (
    <ul className="tab-items-container">
      {tabs.map(tab => (
        <TabItem
          key={tab.tabId}
          tabDetails={tab}
          isActive={tab.tabId === activeTabId}
          onClick={onClickTab}
        />
      ))}
    </ul>
  )

  const renderThumbnails = () => (
    <ul className="thumbnails-container">
      {thumbnailImages.map(thumbnail => (
        <ThumbnailItem
          key={thumbnail.id}
          thumbnail={thumbnail}
          onClickThumbnail={onClickThumbnail}
        />
      ))}
    </ul>
  )

  const {imageUrl} = getImage()

  return (
    <div className="game-container">
      <img src={imageUrl} alt="match" className="match-image" />
      {renderTabs()}
      {renderThumbnails()}
    </div>
  )
}

export default Game

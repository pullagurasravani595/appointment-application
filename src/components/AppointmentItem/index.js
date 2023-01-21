// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {itemDetails, onToggleBtn} = props
  const {title, date, id, isFavorite} = itemDetails
  const dateFormat = new Date(date)
  const year = dateFormat.getFullYear()
  const month = dateFormat.getMonth() + 1
  const day = dateFormat.getDate()
  const exact = format(new Date(year, day, month), 'dd MMMM yyyy, EEEE')
  console.log(exact)

  const onHighLightedFavoriteIcon = () => {
    onToggleBtn(id)
  }

  const imageUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="container-list">
      <div className="title-date-container">
        <p className="title">{title}</p>
        <p className="time">{exact}</p>
      </div>
      <button
        type="button"
        onClick={onHighLightedFavoriteIcon}
        className="button-icon"
      >
        <img src={imageUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem

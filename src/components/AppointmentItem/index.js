// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starredImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStarred = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="app-list">
      <div className="head-container">
        <p className="title">{title}</p>
        <button
          className="star-btn"
          type="button"
          data-testid="star"
          onClick={onClickStarred}
        >
          <img src={starredImgUrl} alt="star" className="star-img" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem

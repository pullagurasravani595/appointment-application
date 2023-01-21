// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: []}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  addTitleDateToList = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFauroite: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onToggleBtn = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  favoritestars = () => {
    const {appointmentsList} = this.state
    const filterResults = appointmentsList.filter(
      appointment => appointment.isFavorite === true,
    )
    this.setState({appointmentsList: filterResults})
  }

  render() {
    const {appointmentsList} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="card-main-heading">Add Appointment</h1>
          <div className="form-img-container">
            <form onSubmit={this.addTitleDateToList}>
              <div className="label-container">
                <label htmlFor="title" className="label-element">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  className="input-element"
                  placeholder="Title"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="label-container">
                <label htmlFor="date" className="label-element">
                  DATE
                </label>
                <input
                  id="date"
                  type="date"
                  className="input-element"
                  placeholder="Title"
                  onChange={this.onChangeDate}
                />
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="line" />
          <div className="appointments-container">
            <p className="description">Appointsments</p>
            <button
              type="button"
              className="button-starred"
              onClick={this.favoritestars}
            >
              starred
            </button>
          </div>
          <ul className="un-order-list-container">
            {appointmentsList.map(eachItem => (
              <AppointmentItem
                itemDetails={eachItem}
                key={eachItem.id}
                onToggleBtn={this.onToggleBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments

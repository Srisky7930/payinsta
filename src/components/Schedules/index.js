import './index.css'

const Schedules = () => (
  <div className="schedule-container">
    <div>
      <img
        src="https://res.cloudinary.com/dfqkajd1a/image/upload/v1693647510/Group_167_ybifzj.png"
        alt="sch"
        className="schedule-image"
      />
    </div>
    <div className="booking-card">
      <h1 className="book-heading"> Book now </h1>
      <p className="book-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="city">
        <label className="label" htmlFor="city">
          CITY
        </label>
        <input
          className="place"
          placeholder="Placeholder"
          id="city"
          type="text"
        />
      </div>
      <div className="card-arrival">
        <div className="cards">
          <label className="label" htmlFor="city">
            ARRIVAL
          </label>
          <input
            className="place-input"
            placeholder="10 october"
            id="city"
            type="text"
          />
        </div>
        <div className="cards">
          <label className="label" htmlFor="city">
            DEPARTURE
          </label>
          <input
            className="place-input"
            placeholder="11 october"
            id="city"
            type="text"
          />
        </div>
      </div>
      <div className="card-arrival">
        <div className="cards">
          <label className="label" htmlFor="city">
            STAR
          </label>
          <input
            className="place-input"
            placeholder="Star"
            id="city"
            type="text"
          />
        </div>
        <div className="cards">
          <label className="label" htmlFor="city">
            ROOM
          </label>
          <input
            className="place-input"
            placeholder="Room"
            id="city"
            type="text"
          />
        </div>
      </div>
      <button type="button" className="book-now">
        Book Now
      </button>
    </div>
  </div>
)

export default Schedules

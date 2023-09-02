import './index.css'

const Offers = () => (
  <div className="offers-container">
    <div>
      <h1 className="offers-heading"> Testimonials </h1>
    </div>

    <div className="details-name">
      <div className="card-name">
        <img
          src="https://res.cloudinary.com/dfqkajd1a/image/upload/v1693657976/Ellipse_1_gkaj1g.png"
          alt="imj"
        />
        <h1 className="name">Corey Korsgaard </h1>
        <p className="description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{' '}
        </p>
      </div>
      <div className="card-name">
        <img
          src="https://res.cloudinary.com/dfqkajd1a/image/upload/v1693658357/Ellipse_1_3_vhwztu.png"
          alt="imj"
        />
        <h1 className="name"> Jakob Aminoff </h1>
        <p className="description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="card-name">
        <img
          src="https://res.cloudinary.com/dfqkajd1a/image/upload/v1693658306/Ellipse_1_2_o69fnn.png"
          alt="imj"
        />
        <h1 className="name"> Carla Press </h1>
        <p className="description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
    <div className="discount-card">
      <h1 className="offers-student">
        Student Special: Discounted rates on tropical getaways!
      </h1>
      <p className="offers-para">
        Let’s embody your beautiful ideas together, simplify the way you
        visualize your next big things.
      </p>
      <ul className="terms-conditions">
        <li> Privacy Policy </li>
        <li> Terms of Use </li>
        <li> Sales and Refunds </li>
        <li> Legal </li>
        <li> About </li>
        <li> Schedules </li>
        <li> Pricing </li>
        <li> Membership </li>
        <li> Joins </li>
      </ul>
    </div>
  </div>
)

export default Offers

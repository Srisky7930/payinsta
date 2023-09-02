import './index.css'

const Pricing = () => (
  <div className="pricing-container">
    <div>
      <p>Get 20% off for student </p>
      <h1 className="about-heading">Students discounts available.</h1>
      <h2 className="student-text">Get ready for some fun in the sun!</h2>
      <ul>
        <li className="about-lists"> Lorem ipsum dolor sit amet</li>
        <li className="about-lists"> Massa quis natoque sit quam </li>
        <li className="about-lists"> Eros non pellentesque elit </li>
        <li className="about-lists"> tortor id euismod habitant </li>
        <li className="about-lists"> Sed suspendisse id in ultrices</li>
      </ul>
      <button type="button" className="explore-more">
        Explore More
      </button>
    </div>
    <div>
      <img
        src="https://res.cloudinary.com/dfqkajd1a/image/upload/v1693648470/Mask_group_pqxcly.png"
        alt="price"
        className="price-image"
      />
    </div>
  </div>
)

export default Pricing

import './index.css'

const About = () => (
  <div className="card">
    <div>
      <ul className="about-items-list">
        <li className="item">
          <div>
            <img
              src="https://res.cloudinary.com/dfqkajd1a/image/upload/v1693645548/avatar_jjqc0h.png"
              alt="img"
              className="about-image"
            />
          </div>
          <div className="about-name-card">
            <h1> Jenny Wilson </h1>
            <p> Loreum ipsum </p>
          </div>
        </li>
        <li className="item">
          <div>
            <img
              src="https://res.cloudinary.com/dfqkajd1a/image/upload/v1693645558/avatar_1_hszg7q.png"
              alt="img1"
              className="about-image"
            />
          </div>
          <div className="about-name-card">
            <h1> Jenny Wilson </h1>
            <p> Loreum ipsum </p>
          </div>
        </li>
        <li className="item">
          <div>
            <img
              src="https://res.cloudinary.com/dfqkajd1a/image/upload/v1693645565/avatar_2_evk3gk.png"
              alt="img2"
              className="about-image"
            />
          </div>
          <div className="about-name-card">
            <h1> Jenny Wilson </h1>
            <p> Loreum ipsum </p>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <div>
        <img
          src="https://res.cloudinary.com/dfqkajd1a/image/upload/v1693646110/Subtract_m5w5r7.png"
          alt="imm"
          className="image-about"
        />
      </div>
      <h1 className="about-heading">Tropical Destinations For Students</h1>
      <h2 className="student-text">
        Student Topical vacation: Relax and Recharge
      </h2>
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
  </div>
)

export default About

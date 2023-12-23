import './about.css';
import about1 from '/about1.svg';
import about2 from '/about2.svg';
import about3 from '/about3.svg';
import about4 from '/about4.svg';
function About() {
  return (
    <div className="about">
    <section className="about__features">
      <h2 className="about__title">Our Features</h2>
      <div className="about__cards">
        <ul className="about__list">
          <li className="about__card">
            <img src={about1} className="about__card-icon" />
            <p className="about__card-title">Free Delivery</p>
            <p className="about__card-text">
              Lorem ipsum, or lipsum as it
              sometimes known, is dummy text
              used in laying out print, graphic </p>
          </li>
          <li className="about__card">
            <img src={about2} className="about__card-icon" />
            <p className="about__card-title">Free Delivery</p>
            <p className="about__card-text">
              Lorem ipsum, or lipsum as it
              sometimes known, is dummy text
              used in laying out print, graphic </p>
          </li>
          <li className="about__card">
            <img src={about3} className="about__card-icon" />
            <p className="about__card-title">Free Delivery</p>
            <p className="about__card-text">
              Lorem ipsum, or lipsum as it
              sometimes known, is dummy text
              used in laying out print, graphic </p>
          </li>
          <li className="about__card">
            <img src={about4} className="about__card-icon" />
            <p className="about__card-title">Free Delivery</p>
            <p className="about__card-text">
              Lorem ipsum, or lipsum as it
              sometimes known, is dummy text
              used in laying out print, graphic </p>
          </li>
        </ul>
      </div>
    </section>
  </div>
  )  
}

export default About;
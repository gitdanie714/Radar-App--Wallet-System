import React from 'react';
import "../styles/Reviews.css";
import profile from "../Assets/Images/profile.jpg";

function Reviews() {
  return (
    <div className='main-container'> 
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <section className="section_container">
        <h2>Reviews</h2>
        <h1>What our customers say</h1>
        <div className="section-grid">
          <div className="section-card">
            <span><i className="ri-double-quotes-l"></i></span>
            <h4>Love the simplicity</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo numquam ut culpa facere porro eos,
              quo soluta qui vero error non inventore incidunt animi aut eligendi aspernatur, 
              ab commodi nisi.
            </p>
            <img src={profile} alt='user' />
            <h5>Sydney Deray</h5>
            <h6>Managing Director</h6>
          </div>

          <div className="section-card">
            <span><i className="ri-double-quotes-l"></i></span>
            <h4>Love the simplicity</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo numquam ut culpa facere porro eos,
              quo soluta qui vero error non inventore incidunt animi aut eligendi aspernatur, 
              ab commodi nisi.
            </p>
            <img src={profile} alt='user' />
            <h5>Grant Deray</h5>
            <h6>Managing Director</h6>
          </div>

          <div className="section-card">
            <span><i className="ri-double-quotes-l"></i></span>
            <h4>Love the simplicity</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo numquam ut culpa facere porro eos,
              quo soluta qui vero error non inventore incidunt animi aut eligendi aspernatur, 
              ab commodi nisi.
            </p>
            <img src={profile} alt='user' />
            <h5>Tanya Deray</h5>
            <h6>Managing Director</h6>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;

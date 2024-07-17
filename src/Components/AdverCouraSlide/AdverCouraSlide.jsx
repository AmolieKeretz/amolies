import React from 'react'
import './AdverCouraSlide.css'
import banner_One from '../Assests/banner_one.jpg'
import banner_Two from '../Assests/banner_Two.jpg';
import banner_Three from '../Assests/banner_Three.jpg';
import banner_Four from '../Assests/banner_Four.jpg';

const AdverCouraSlide = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide p-4" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner_One} className="d-block w-100 rounded-5" alt="Pizza Banner" />
        </div>
        <div className="carousel-item">
          <img src={banner_Two} className="d-block w-100 rounded-5" alt="KFC Banner" />
        </div>
        <div className="carousel-item">
          <img src={banner_Three} className="d-block w-100 rounded-5" alt="Momo Banner" />
        </div>
        <div className="carousel-item">
          <img src={banner_Four} className="d-block w-100 rounded-5" alt="Noodle Banner" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default AdverCouraSlide

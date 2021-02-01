import axios from "axios";
import FsLightbox from "fslightbox-react";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import ProgressiveImage from 'react-progressive-image';
import Slider from "react-slick";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";


function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler({
      toggler: !toggler,
    });
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <ProgressiveImage
                  src={information.aboutImage}
                  placeholder="/images/about-image-placeholder.png"
                >
                  {src => <img src={src} alt="aboutimage"  />}
                </ProgressiveImage>
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">Asif Khan</span>
                </h3>
                <p>
                  Think of me as Peter Petrelli from the show 'Heroes'. Basically I'm a quick study and can learn anything I need to accomplish my goals. Needless to say, when it comes to developing apps; I promise to deliver and do what excites (:.
                </p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>Full Name</b> Asif Khan
                    </li>
                  )}
                  {!information.age ? null : (
                    <li>
                      <b>Age</b> 22 Years
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>Nationality</b> Bengali
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>Languages</b> English, Bangla, Urdu and Hindi
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b> thecodedkhan@gmail.com
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Location</b> Toronto
                    </li>
                  )}
                  {!information.freelanceStatus ? null : (
                    <li>
                      <b>Freelance</b> Contact for availability
                    </li>
                  )}
                </ul>
                <a href={information.cvfile} download className="mi-button">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map((service) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
      </div>
    </Layout>
  );
}

export default About;

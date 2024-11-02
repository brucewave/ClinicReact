import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>

      {/* Home Banner */}
      <section className="section section-search">
        <div className="container-fluid">
          <div className="banner-wrapper">
            <div className="banner-header text-center">
              <h1>Search Doctor, Make an Appointment</h1>
              <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
            </div>
            {/* Search */}
            <div className="search-box">
              <form action="templateshub.net">
                <div className="form-group search-location">
                  <input type="text" className="form-control" placeholder="Search Location" />
                  <span className="form-text">Based on your Location</span>
                </div>
                <div className="form-group search-info">
                  <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                  <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                </div>
                <button type="submit" className="btn btn-primary search-btn">
                  <i className="fas fa-search"></i> <span>Search</span>
                </button>
              </form>
            </div>
            {/* /Search */}
          </div>
        </div>
      </section>
      {/* /Home Banner */}


      {/* Popular Section */}
      <section className="section section-doctor">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-header ">
                <h2>Book Our Doctor</h2>
                <p>Lorem Ipsum is simply dummy text </p>
              </div>
              <div className="about-content">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                <p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>
                <a href="javascript:;">Read More..</a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="doctor-slider slider">
                <Slider {...settings}>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-01.jpg" />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Ruby Perrin</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <span className="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Florida, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $300 - $1000
                          <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-02.jpg" />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Darren Elder</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">(35)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Newyork, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $50 - $300
                          <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-03.jpg" />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Deborah Angel</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">(27)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Georgia, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $400
                          <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-04.jpg" />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Sofia Brient</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">MBBS, MS - General Surgery, MCh - Urology</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">(4)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Louisiana, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $150 - $250
                          <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-05.jpg" />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Marvin Campbell</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">MBBS, MD - Ophthalmology, DNB - Ophthalmology</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">(66)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Michigan, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $50 - $700
                          <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-06.jpg" />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Katharine Berthold</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">(52)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Texas, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $500
                          <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-07.jpg" />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Linda Tobin</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">MBBS, MD - General Medicine, DM - Neurology</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">(43)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Kansas, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $1000
                          <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img className="img-fluid" alt="User Image" src="assets/img/doctors/doctor-08.jpg" />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">Paul Richard</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">MBBS, MD - Dermatology , Venereology & Lepros</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">(49)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> California, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $400
                          <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Popular Section */}


      {/* Latest News Section */}
      <section className="section section-news">
        <div className="container-fluid">
          <div className="section-header text-center">
            <h2>Latest News</h2>
            <p className="sub-title">Stay updated with our latest news and articles</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="news-item" style={{ display: 'flex', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '15px', padding: '20px', backgroundColor: '#fff', marginBottom: '20px' }}>
                <div className="news-img" style={{ flex: '1', textAlign: 'center' }}>
                  <img src="assets/img/doctors/doctor-02.jpg" className="img-fluid" alt="News" style={{ borderRadius: '15px', maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="news-content" style={{ flex: '2', paddingLeft: '20px' }}>
                  <h5>New Clinic Opening</h5>
                  <p>We are excited to announce the opening of our new clinic in downtown.</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news-item" style={{ display: 'flex', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '15px', padding: '20px', backgroundColor: '#fff', marginBottom: '20px' }}>
                <div className="news-img" style={{ flex: '1', textAlign: 'center' }}>
                  <img src="assets/img/doctors/doctor-02.jpg" className="img-fluid" alt="News" style={{ borderRadius: '15px', maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="news-content" style={{ flex: '2', paddingLeft: '20px' }}>
                  <h5>Health Tips for Winter</h5>
                  <p>Learn how to stay healthy during the cold winter months with our expert tips.</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news-item" style={{ display: 'flex', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '15px', padding: '20px', backgroundColor: '#fff', marginBottom: '20px' }}>
                <div className="news-img" style={{ flex: '1', textAlign: 'center' }}>
                  <img src="assets/img/doctors/doctor-02.jpg" className="img-fluid" alt="News" style={{ borderRadius: '15px', maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="news-content" style={{ flex: '2', paddingLeft: '20px' }}>
                  <h5>COVID-19 Vaccine Updates</h5>
                  <p>Stay informed about the latest updates on COVID-19 vaccines and availability.</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Latest News Section */}

      {/* Contact Us Section */}
      <section className="section section-contact">
        <div className="container">
          <div className="section-header text-center">
            <h2>Contact Us</h2>
            <p className="sub-title">We'd love to hear from you! Please fill out the form below to get in touch.</p>
          </div>
          <div className="profile-widget" style={{ display: 'flex', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '15px', padding: '20px', backgroundColor: '#fff' }}>
            <div className="doc-img" style={{ flex: '1', textAlign: 'center' }}>
              <img src="assets/img/doctors/doctor-02.jpg" className="img-fluid" alt="Contact" style={{ borderRadius: '15px', maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="pro-content" style={{ flex: '2', paddingLeft: '20px' }}>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" style={{ marginBottom: '15px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your Email" style={{ marginBottom: '15px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="5" placeholder="Your Message" style={{ marginBottom: '15px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* /Contact Us Section */}

    </div>
  )
}

export default Home


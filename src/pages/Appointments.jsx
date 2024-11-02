import React from 'react';

function Appointments() {
  return (
    <div>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Appointments</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Appointments</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User" />
                      </a>
                      <div className="profile-det-info">
                        <h3>Dr. Darren Elder</h3>
                        <div className="patient-details">
                          <h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li>
                          <a href="doctor-dashboard.html">
                            <i className="fas fa-columns"></i>
                            <span>Dashboard</span>
                          </a>
                        </li>
                        <li className="active">
                          <a href="appointments.html">
                            <i className="fas fa-calendar-check"></i>
                            <span>Appointments</span>
                          </a>
                        </li>
                        <li>
                          <a href="my-patients.html">
                            <i className="fas fa-user-injured"></i>
                            <span>My Patients</span>
                          </a>
                        </li>
                        <li>
                          <a href="schedule-timings.html">
                            <i className="fas fa-hourglass-start"></i>
                            <span>Schedule Timings</span>
                          </a>
                        </li>
                        <li>
                          <a href="invoices.html">
                            <i className="fas fa-file-invoice"></i>
                            <span>Invoices</span>
                          </a>
                        </li>
                        <li>
                          <a href="reviews.html">
                            <i className="fas fa-star"></i>
                            <span>Reviews</span>
                          </a>
                        </li>
                        <li>
                          <a href="chat-doctor.html">
                            <i className="fas fa-comments"></i>
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                          </a>
                        </li>
                        <li>
                          <a href="doctor-profile-settings.html">
                            <i className="fas fa-user-cog"></i>
                            <span>Profile Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href="social-media.html">
                            <i className="fas fa-share-alt"></i>
                            <span>Social Media</span>
                          </a>
                        </li>
                        <li>
                          <a href="doctor-change-password.html">
                            <i className="fas fa-lock"></i>
                            <span>Change Password</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-2.html">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* /Profile Sidebar */}
              </div>
              
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="appointments">
                  {/* Appointment List */}
                  <div className="appointment-list">
                    <div className="profile-info-widget">
                      <a href="patient-profile.html" className="booking-doc-img">
                        <img src="assets/img/patients/patient.jpg" alt="User" />
                      </a>
                      <div className="profile-det-info">
                        <h3><a href="patient-profile.html">Richard Wilson</a></h3>
                        <div className="patient-details">
                          <h5><i className="far fa-clock"></i> 14 Nov 2019, 10.00 AM</h5>
                          <h5><i className="fas fa-map-marker-alt"></i> Newyork, United States</h5>
                          <h5><i className="fas fa-envelope"></i> richard@example.com</h5>
                          <h5 className="mb-0"><i className="fas fa-phone"></i> +1 923 782 4575</h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                        <i className="far fa-eye"></i> View
                      </a>
                      <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                      </a>
                      <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                      </a>
                    </div>
                  </div>
                  {/* /Appointment List */}
                  {/* Repeat similar blocks for other appointments */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      {/* /Main Wrapper */}
      
      {/* Appointment Details Modal */}
      <div className="modal fade custom-modal" id="appt_details">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Appointment Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="info-details">
                <li>
                  <div className="details-header">
                    <div className="row">
                      <div className="col-md-6">
                        <span className="title">#APT0001</span>
                        <span className="text">21 Oct 2019 10:00 AM</span>
                      </div>
                      <div className="col-md-6">
                        <div className="text-right">
                          <button type="button" className="btn bg-success-light btn-sm" id="topup_status">Completed</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="title">Status:</span>
                  <span className="text">Completed</span>
                </li>
                <li>
                  <span className="title">Confirm Date:</span>
                  <span className="text">29 Jun 2019</span>
                </li>
                <li>
                  <span className="title">Paid Amount</span>
                  <span className="text">$450</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Appointment Details Modal */}
    </div>
  );
}

export default Appointments;
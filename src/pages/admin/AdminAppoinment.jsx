import React from 'react';

const AdminAppoinment = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">Appointments</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li className="breadcrumb-item">Appointments</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col">
            {/* Recent Orders */}
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Doctor Name</th>
                        <th>Speciality</th>
                        <th>Patient Name</th>
                        <th>Appointment Time</th>
                        <th>Status</th>
                        <th className="text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment, index) => (
                        <tr key={index}>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar">
                                <img className="avatar-img" src={appointment.doctorImage} alt="User" />
                              </a>
                              <a href="profile.html">{appointment.doctorName}</a>
                            </h2>
                          </td>
                          <td>{appointment.speciality}</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar">
                                <img className="avatar-img" src={appointment.patientImage} alt="User" />
                              </a>
                              <a href="profile.html">{appointment.patientName}</a>
                            </h2>
                          </td>
                          <td>{appointment.time}</td>
                          <td>
                            <div className="status-toggle">
                              <input type="checkbox" id={`status_${index}`} className="check" checked={appointment.status} readOnly />
                              <label htmlFor={`status_${index}`} className="check-toggle">checkbox</label>
                            </div>
                          </td>
                          <td className="text-right">{appointment.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Recent Orders */}
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample data for appointments
const appointments = [
  { doctorName: 'Dr. Ruby Perrin', speciality: 'Dental', patientName: 'Charlene Reed', time: '9 Nov 2019 11.00 AM - 11.15 AM', status: true, amount: '$200.00', doctorImage: 'assets/img/doctors/doctor-thumb-01.jpg', patientImage: 'assets/img/patients/patient1.jpg' },
  { doctorName: 'Dr. Darren Elder', speciality: 'Dental', patientName: 'Travis Trimble', time: '5 Nov 2019 11.00 AM - 11.35 AM', status: true, amount: '$300.00', doctorImage: 'assets/img/doctors/doctor-thumb-02.jpg', patientImage: 'assets/img/patients/patient2.jpg' },
  { doctorName: 'Dr. Deborah Angel', speciality: 'Cardiology', patientName: 'Carl Kelly', time: '11 Nov 2019 12.00 PM - 12.15 PM', status: true, amount: '$150.00', doctorImage: 'assets/img/doctors/doctor-thumb-03.jpg', patientImage: 'assets/img/patients/patient3.jpg' },
  // ... Add more appointments as needed
];

export default AdminAppoinment;
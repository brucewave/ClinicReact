import React from 'react';

function AdminSidebar() {
  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title"> 
                <span>Main</span>
              </li>
              <li className="active"> 
                <a href="index.html"><i className="fe fe-home"></i> <span>Bảng Điều Khiển</span></a>
              </li>
              <li> 
                <a href="/admin/appointment"><i className="fe fe-layout"></i> <span>Cuộc Hẹn</span></a>
              </li>
              <li> 
                <a href="specialities.html"><i className="fe fe-users"></i> <span>Chuyên Ngành</span></a>
              </li>
              <li> 
                <a href="doctor-list.html"><i className="fe fe-user-plus"></i> <span>Bác Sĩ</span></a>
              </li>
              <li> 
                <a href="patient-list.html"><i className="fe fe-user"></i> <span>Bệnh Nhân</span></a>
              </li>
              <li> 
                <a href="transactions-list.html"><i className="fe fe-activity"></i> <span>Giao Dịch</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Sidebar */}
    </div>
  );
}

export default AdminSidebar;

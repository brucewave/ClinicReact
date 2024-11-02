import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Appointments from './pages/Appointments'
import MyPatients from './pages/myPatients'
import PatientDashboard from './pages/patientDashboard'
import PatientProfile from './pages/patientProfile'
import PrivacyPolicy from './pages/privacyPolicy'
import ProfileSettings from './pages/profileSettings'
import Reviews from './pages/Reviews'
import ScheduleTimings from './pages/scheduleTimings'
import Search from './pages/Search'
import SocialMedia from './pages/socialMedia'
import TermCondition from './pages/termCondition'
import VideoCall from './pages/videoCall'
import VoiceCall from './pages/voiceCall'
import Favourites from './pages/Favourites'
import Booking from './pages/Booking'
import Chat from './pages/Chat'
import Header from './components/Header'


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctorProfile" element={<doctorProfile />} />
          <Route path="/appointment" element={<Appointments />} />
          <Route path="/doctorAppointment" element={<doctorAppointment />} />
          <Route path="/myPatients" element={<myPatients />} />
          <Route path="/patientDashboard" element={<patientDashboard />} />
          <Route path="/patientProfile" element={<patientProfile />} />
          <Route path="/privacyPolicy" element={<privacyPolicy />} />
          <Route path="/profileSettings" element={<profileSettings />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/scheduleTimings" element={<scheduleTimings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/socialMedia" element={<socialMedia />} />
          <Route path="/termCondition" element={<TermCondition />} />
          <Route path="/videoCall" element={<VideoCall />} />
          <Route path="/voiceCall" element={<VoiceCall />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import simabPhoto from './image/simab.jpg';
import './App.css';

const CLINIC_DATA = {
  therapies: [
    { name: 'Orthopedic Physiotherapy', desc: 'Relieve joint, muscle, and bone pain effectively.', icon: '🦴', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800' },
    { name: 'Sports Injury Rehab', desc: 'Get back to peak performance with targeted care.', icon: '🏃', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800' },
    { name: 'Neurological Physio', desc: 'Rehabilitation for strokes, Parkinson’s, and more.', icon: '🧠', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800' },
    { name: 'Post-Surgical Care', desc: 'Accelerate your recovery after major surgeries.', icon: '🩹', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800' },
    { name: 'Pediatric Physio', desc: 'Gentle, specialized movement therapy for children.', icon: '👶', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800' },
    { name: 'Geriatric Care', desc: 'Improving mobility and balance for older adults.', icon: '🧓', image: 'https://images.unsplash.com/photo-1516302752946-60f49d3dc71c?auto=format&fit=crop&q=80&w=800' }
  ],
  clinicPhotos: [
    { url: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800', title: 'Private Treatment Room' },
    { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800', title: 'Modern Reception' },
    { url: 'https://images.unsplash.com/photo-1590239103957-c5796f642646?q=80&w=800', title: 'Advanced Rehab Gym' },
    { url: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=800', title: 'Electrotherapy Equipment' },
  ],
  doctors: [
    { id: 'doc1', name: 'Dr. R. Sharma (Senior Physiotherapist)' },
    { id: 'doc2', name: 'Dr. A. Patel (Sports Specialist)' },
    { id: 'doc3', name: 'Dr. S. Verma (Neuro Specialist)' }
  ]
};

const sliderImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800', 
  simabPhoto
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(goToNext, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex]);

  return (
    <div className="slider-container" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <button className="slider-arrow left-arrow" onClick={goToPrevious}>&#10094;</button>
      <img key={currentIndex} src={sliderImages[currentIndex]} alt="Clinic" className="slider-image animate-fade-in" />
      <button className="slider-arrow right-arrow" onClick={goToNext}>&#10095;</button>
      <div className="slider-dots">
        {sliderImages.map((_, i) => (
          <span key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(i)}></span>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [formData, setFormData] = useState({ patientName: '', doctorId: '', therapy: '', date: '', time: '' });
  const [bookingStatus, setBookingStatus] = useState(null);
  const [selectedTherapy, setSelectedTherapy] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const showUnavailableAlert = () => {
    setBookingStatus({ 
      type: 'warning', 
      message: '⚠️ Online booking is temporarily unavailable due to system upgrades. Please call us at +91 98765 43210.' 
    });
    setTimeout(() => setBookingStatus(null), 6000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showUnavailableAlert();
  };

  const handleOverlayClick = (e) => {      
    if (e.target.className === 'modal-overlay') setSelectedTherapy(null);
  };

  return (
    <div className="App">
      {bookingStatus && <div className={`status-alert status-${bookingStatus.type}`}>{bookingStatus.message}</div>}
      
      <nav className="navbar">
        <a href="#home" className="nav-logo">⚕️ The Physio India</a>
        <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? '✖' : '☰'}</div>
        <ul className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#clinic" onClick={() => setIsMobileMenuOpen(false)}>Clinic</a></li>
          <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#collaborate" onClick={() => setIsMobileMenuOpen(false)}>Partner</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero-container">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="animate-pop-in">Restoring Movement, Restoring Life.</h1>
          <p className="animate-pop-in delay-1">Expert physiotherapy care tailored to your needs.</p>
          <a href="#book" className="btn-primary animate-pop-in delay-2">Book Your Session</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">About The Physio India</h2>
        <div className="about-content">
          <div className="about-text">
            <p>At <strong>The Physio India</strong>, we provide world-class rehabilitation services. Founded on advanced medical science and compassionate care.</p>
            <p>Our specialists use state-of-the-art equipment ensuring you thrive.</p>
          </div>
          <ImageSlider />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2 className="section-title">Expert Therapies</h2>
        <div className="services-grid">
          {CLINIC_DATA.therapies.map((therapy, index) => (
            <div key={index} className="service-card" onClick={() => setSelectedTherapy(therapy)}>
              <div className="service-icon">{therapy.icon}</div>
              <h3>{therapy.name}</h3>
              <p>{therapy.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="booking-section">
        <div className="booking-container">
          <h2 className="section-title">Schedule Appointment</h2>
          <form onSubmit={handleSubmit} onClickCapture={showUnavailableAlert} className="form-grid">
            <div className="form-group full-width">
              <label>Patient Full Name</label>
              <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required placeholder="Rahul Kumar" />
            </div>
            <div className="form-group">
              <label>Therapy</label>
              <select name="therapy" value={formData.therapy} onChange={handleChange} required>
                <option value="" disabled>-- Select Therapy --</option>
                {CLINIC_DATA.therapies.map((t, i) => <option key={i} value={t.name}>{t.name}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Doctor</label>
              <select name="doctorId" value={formData.doctorId} onChange={handleChange} required>
                <option value="" disabled>-- Select Doctor --</option>
                {CLINIC_DATA.doctors.map((doc) => <option key={doc.id} value={doc.name}>{doc.name}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" name="date" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input type="time" name="time" onChange={handleChange} required />
            </div>
            <button type="submit" className="submit-btn">Confirm Booking</button>
          </form>
        </div>
      </section>

      {/* --- RESTORED PARTNER WITH US SECTION --- */}
      <section id="collaborate" className="collab-section" style={{ padding: '80px 20px', backgroundColor: '#f9fafb' }}>
        <h2 className="section-title">Partner With Us</h2>
        <p className="collab-intro" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          The Physio India is actively expanding its network. We seek passionate practitioners and modern clinics to join our mission.
        </p>
        <div className="criteria-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="criteria-card"><h3>👨‍⚕️ For Doctors</h3><ul><li>5+ years experience.</li><li>MPT Certifications.</li></ul></div>
          <div className="criteria-card"><h3>🏥 For Clinics</h3><ul><li>Modern equipment.</li><li>1000+ sq. ft. area.</li></ul></div>
          <div className="criteria-card"><h3>🏢 Corporate</h3><ul><li>Posture workshops.</li><li>Strain reduction.</li></ul></div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="mailto:partners@thephysioindia.in" className="btn-secondary">Apply for Partnership</a>
        </div>
      </section>

      {/* Footer with Icons */}
      <footer className="footer">
        <div className="footer-contact">
          <span className="contact-item"><i className="fa-solid fa-paper-plane"></i> contact@thephysioindia.in</span>
          <span className="separator"> | </span>
          <span className="contact-item"><i className="fa-solid fa-phone"></i> +91 98765 43210</span>
        </div>
        <p>&copy; 2026 The Physio India. All rights reserved.</p>
      </footer>

      {/* Modal */}
      {selectedTherapy && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedTherapy(null)}>×</button>
            <img src={selectedTherapy.image} alt={selectedTherapy.name} className="modal-image" />
            <h3>{selectedTherapy.icon} {selectedTherapy.name}</h3>
            <p>{selectedTherapy.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
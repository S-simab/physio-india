import React, { useState } from 'react';
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
    { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800', title: 'Modern Reception' },
    { url: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800', title: 'Private Treatment Room' },
    { url: 'https://images.unsplash.com/photo-1590239103957-c5796f642646?q=80&w=800', title: 'Advanced Rehab Gym' },
    { url: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=800', title: 'Electrotherapy Equipment' },
  ],
  doctors: [
    { id: 'doc1', name: 'Dr. R. Sharma (Senior Physiotherapist)' },
    { id: 'doc2', name: 'Dr. A. Patel (Sports Specialist)' },
    { id: 'doc3', name: 'Dr. S. Verma (Neuro Specialist)' }
  ]
};

function App() {
  const [formData, setFormData] = useState({ patientName: '', doctorId: '', therapy: '', date: '', time: '' });
  const [bookingStatus, setBookingStatus] = useState(null);
  const [selectedTherapy, setSelectedTherapy] = useState(null);
  // Har state ke sath isko bhi add karein
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingStatus({ type: 'success', message: `Appointment Confirmed! Thank you, ${formData.patientName}. We will see you on ${formData.date} at ${formData.time}.` });
    setFormData({ patientName: '', doctorId: '', therapy: '', date: '', time: '' });
    setTimeout(() => setBookingStatus(null), 6000);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') setSelectedTherapy(null);
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          <span style={{ fontSize: '1.8rem' }}>⚕️</span>The Physio India
        </a>
        
        {/* NEW: Hamburger Icon */}
        <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✖' : '☰'}
        </div>

        {/* UPDATED: Links ke sath active class aur click karne par menu close hone ka logic */}
        <ul className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#clinic" onClick={() => setIsMobileMenuOpen(false)}>Clinic</a></li>
          <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#collaborate" onClick={() => setIsMobileMenuOpen(false)}>Partner</a></li>
        </ul>
      </nav>

      {/* Hero Section with background animation class */}
      <header id="home" className="hero-container">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="animate-pop-in">Restoring Movement, Restoring Life.</h1>
          <p className="animate-pop-in delay-1">Expert physiotherapy care tailored to your specific needs. Start your journey to a pain-free life today with India's top specialists.</p>
          <a href="#book" className="btn-primary animate-pop-in delay-2">Book Your Session</a>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <h2 className="section-title animate-pop-in">About The Physio India</h2>
        <p className="section-subtitle animate-pop-in">Your trusted partner in holistic recovery and well-being.</p>
        
        <div className="about-content">
          <div className="about-text animate-pop-in delay-1">
            <p>
              At <strong>The Physio India</strong>, we provide world-class rehabilitation services. Founded on advanced medical science and compassionate care, our clinic is a leader in holistic recovery.
            </p>
            <p>
              Our internationally trained specialists use evidence-based practices and state-of-the-art equipment to create personalized treatment plans, ensuring you don't just recover—you thrive.
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" 
            alt="Physiotherapy treatment" 
            className="about-image animate-pop-in delay-2"
          />
          
          <div className="stats-container animate-pop-in delay-3">
            <div className="stat-box">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Excellence</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">25+</span>
              <span className="stat-label">Certified Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Clinic Gallery Section with hover animations */}
      <section id="clinic" className="gallery-section">
        <h2 className="section-title animate-pop-in">Our State-of-the-Art Clinic</h2>
        <p className="section-subtitle animate-pop-in">Step inside our modern facility designed for your comfort and recovery.</p>
        
        <div className="gallery-grid">
          {CLINIC_DATA.clinicPhotos.map((photo, index) => (
            <div key={index} className={`gallery-item animate-pop-in delay-${index}`}>
              <img src={photo.url} alt={photo.title} className="gallery-img" />
              <div className="gallery-overlay">{photo.title}</div>
            </div>
          ))}
        </div>
      </section>


      

      {/* Services Grid */}
      <section id="services" className="services-section">
        <h2 className="section-title animate-pop-in">Expert Therapies</h2>
        <p className="section-subtitle animate-pop-in">Specialized treatments for diverse physical needs.</p>
        
        <div className="services-grid">
          {CLINIC_DATA.therapies.map((therapy, index) => (
            <div key={index} className="service-card animate-pop-in" onClick={() => setSelectedTherapy(therapy)} title="Click to view details">
              <div className="service-icon">{therapy.icon}</div>
              <h3>{therapy.name}</h3>
              <p>{therapy.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="booking-section">
        <div className="booking-container animate-pop-in">
          <h2 className="section-title">Schedule Appointment</h2>
          <p className="section-subtitle">Fill in the details below to secure your consultation.</p>
          
          {bookingStatus && (
            <div className={`status-alert status-${bookingStatus.type}`}>{bookingStatus.message}</div>
          )}
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group full-width">
              <label>Patient Full Name</label>
              <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required placeholder="e.g. Rahul Kumar" />
            </div>
            <div className="form-group">
              <label>Required Therapy</label>
              <select name="therapy" value={formData.therapy} onChange={handleChange} required>
                <option value="" disabled>-- Select Therapy --</option>
                {CLINIC_DATA.therapies.map((therapy, index) => <option key={index} value={therapy.name}>{therapy.name}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Select Specialist</label>
              <select name="doctorId" value={formData.doctorId} onChange={handleChange} required>
                <option value="" disabled>-- Select Doctor --</option>
                {CLINIC_DATA.doctors.map((doc) => <option key={doc.id} value={doc.name}>{doc.name}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Preferred Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Preferred Time</label>
              <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </div>
            <button type="submit" className="submit-btn">Confirm Booking</button>
          </form>
        </div>
      </section>

     {/* Collaboration Section */}
<section id="collaborate" className="collab-section">
  <h2 className="section-title">Partner With Us</h2>
  <p className="collab-intro">
    The physio india is actively expanding its network. We seek passionate practitioners and modern clinics to join our mission.
  </p>

  <div className="criteria-grid">
    <div className="criteria-card">
      <h3>👨‍⚕️ For Doctors</h3>
      <ul>
        <li>5+ years clinical experience.</li>
        <li>MPT or specialized certifications.</li>
        <li>Evidence-based practice commitment.</li>
      </ul>
    </div>

    <div className="criteria-card">
      <h3>🏥 For Clinics</h3>
      <ul>
        <li>1000+ sq. ft. dedicated space.</li>
        <li>Modern rehab equipment.</li>
        <li>Regulation compliance.</li>
      </ul>
    </div>

    <div className="criteria-card">
      <h3>🏢 Corporate</h3>
      <ul>
        <li>Ergonomic strain reduction programs.</li>
        <li>On-site posture workshops.</li>
        <li>Integration with insurance.</li>
      </ul>
    </div>
  </div>

  <div className="collab-cta">
    <a href="mailto:partners@thephysioindia.in" className="btn-secondary">Apply for Partnership</a>
  </div>
</section>

      {/* Footer */}
      <footer className="footer animate-fade-in">
        <p> contact@thephysioindia.in | &#128222; +91 98765 43210 </p>
        <p>&copy; 2026 The Physio India. All rights reserved.</p>
      </footer>

      {/* MODAL POPUP (Unchanged) */}
      {selectedTherapy && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedTherapy(null)}>×</button>
            <img src={selectedTherapy.image} alt={selectedTherapy.name} className="modal-image" />
            <div className="modal-body">
              <h3>{selectedTherapy.icon} {selectedTherapy.name}</h3>
              <p>{selectedTherapy.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
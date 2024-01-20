// HomePage.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './HomePage.css';

const HomePage = () => {
  const history = useHistory(); // Get the history object
  const [year, setYear] = useState('');
  const [stream, setStream] = useState('');
  const [course, setCourse] = useState('');

  const courses = [
    "Advanced Algorithms",
    "Advanced Data Systems",
    "Advanced NLP (100)",
    // ... Add the rest of the courses here
    "Wireless Communications"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    // Redirect to the review form page for Advanced Algorithms
    history.push(`/review/${encodeURIComponent(course)}/write-review`);
  };

  return (
    <div className="home-container">
      <h1>Welcome to College Course Reviews</h1>
      <form onSubmit={handleSubmit} className="selection-form">
        <div className="form-group">
          <label htmlFor="year-select">Select Year:</label>
          {/* ... (other code) */}
        </div>
        <div className="form-group">
          <label htmlFor="stream-select">Select Stream:</label>
          {/* ... (other code) */}
        </div>
        <div className="form-group">
          <label htmlFor="course-select">Select Course:</label>
          <select id="course-select" value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">--Please choose an option--</option>
            {courses.map((courseName, index) => (
              <option key={index} value={courseName}>{courseName}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default HomePage;

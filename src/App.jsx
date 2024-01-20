// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CourseReviewPage from './CourseReviewPage';
import ReviewFormPage from './ReviewFormPage'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/review/:courseId" element={<CourseReviewPage />} />
        <Route path="/review/:courseId/write-review" element={<ReviewFormPage />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;

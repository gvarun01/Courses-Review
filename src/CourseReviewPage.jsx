// CourseReviewPage.jsx
import React, { useState, useEffect } from 'react';
import './CourseReviewPage.css';

const CourseReviewPage = ({ match }) => {
  const [reviews, setReviews] = useState([]);
  const courseId = match.params.courseId; // Assuming you're using react-router-dom

  useEffect(() => {
    // Fetch reviews from the backend when the component mounts
    fetch(`/api/reviews/${courseId}`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the backend sends back an array of reviews sorted by upvotes
        setReviews(data);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, [courseId]);

  return (
    <div className="course-review-container">
      <h1>Course Reviews</h1>
      <ul className="review-list">
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <h3>{review.title}</h3>
            <p>{review.content}</p>
            <div>Upvotes: {review.upvotes}</div>
            {/* Add functionality to upvote */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseReviewPage;
import React from 'react';
import './News.css';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'סונדגרן: "לחזור לשבדיה? עדיף לי לשחק בישראל"',
      image: 'image1.jpg',    
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Title 2',
      image: 'image2.jpg',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className="news-page">
      <h1>Recent Football News</h1>
      <div className="news-container">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

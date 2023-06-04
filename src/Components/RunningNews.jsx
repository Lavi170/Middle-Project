import React, { useState, useEffect } from 'react';

const RunningNews = () => {
  const [news, setNews] = useState([]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const newsData = [
    'ויתר על מכבי חיפה? דיווח: אברגיל האריך חוזה בלוריין',
    'ראשוני: סכנין ובירם כיאל במשא ומתן מתקדם להארכת חוזה',
    'המחאה נגד קראנקה נמשכת: שלט ענק בספרדית הונף בקריית שלום',
    'באה לחגוג: מכבי חיפה פירקה 5-0 את הפועל ירושלים',
  ];

  useEffect(() => {
    setNews(newsData);

    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) =>
        (prevIndex + 1) % newsData.length
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="changing-news-row">
      <h2>החדשות החמות</h2>
      <p style={{fontSize:"18px"}}>{news[currentNewsIndex]}</p>
    </div>
  );
};

export default RunningNews;
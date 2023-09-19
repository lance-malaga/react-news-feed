import React from 'react';
import ReactDOM from 'react-dom/client';
import news from './data/sample_news_stories.json'
import './styles.css';

// components
import FeaturedNews from './components/FeaturedNews';
import News from './components/News';

function App() {
  const data = news.results;
  const featured_news = data[0];

  return (
    <main className="main_container">
      <h1>News Feed</h1>
      <hr/>
      <FeaturedNews
        image={featured_news.image_url}
        title={featured_news.title}
        creator={featured_news.creator}
        description={featured_news.description}
        link={featured_news.link}
      />
      <hr/>
      <div className="news_container">
        {data.slice(1).map((article, index) => {
          return (
            <News 
              key={index}
              image={article.image_url}
              title={article.title}
              creator={article.creator}
              description={article.description}
              category={article.category}
              link={article.link}
            />
          )
        })}
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-wrap gap-8"> 
      <div className="card">
        {/* Image goes here */}
        <img 
          src="/chunckysquirrel.JPG" 
          alt="Chunky Squirrel" 
          className="card__image w-full h-full object-cover"
        />
        <div className="card__content">
          <p className="card__title">Chunky Squirrel</p>
          <p className="card__description">
            Big Squirrel caught on campus eating food
          </p>
        </div>
      </div>

      <div className="card">
        {/* Image goes here */}
        <img 
          src="/powell.jpeg" 
          alt="Powell" 
          className="card__image w-full h-full object-cover"
        />
        <div className="card__content">
          <p className="card__title">Rainy Powell</p>
          <p className="card__description">
            Nice picture to capture emotions
          </p>
        </div>
      </div>

      <div className="card">
        {/* Image goes here */}
        <img 
          src="/chunckysquirrel.JPG" 
          alt="Chunky Squirrel" 
          className="card__image w-full h-full object-cover"
        />
        <div className="card__content">
          <p className="card__title">Chunky Squirrel</p>
          <p className="card__description">
            Big Squirrel caught on campus eating food
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
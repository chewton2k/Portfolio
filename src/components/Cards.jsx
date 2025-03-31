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
          src="/uclafire.jpeg" 
          alt="Chunky Squirrel" 
          className="card__image w-full h-full object-cover"
        />
        <div className="card__content">
          <p className="card__title">Fire</p>
          <p className="card__description">
            When the fire and smoke was so bad but still had classes 
          </p>
        </div>
      </div>

      <div className="card">
        {/* Image goes here */}
        <img 
          src="/studybusiness.jpeg" 
          alt="Powell" 
          className="card__image w-full h-full object-cover"
        />
        <div className="card__content">
          <p className="card__title">Studying</p>
          <p className="card__description">
            Me studying with my best friend chatgpt!
          </p>
        </div>
      </div>

      <div className="card">
        {/* Image goes here */}
        <img 
          src="/bittybite.jpeg" 
          alt="Powell" 
          className="card__image w-full h-full object-cover"
        />
        <div className="card__content">
          <p className="card__title">Bites</p>
          <p className="card__description">
            One of the best dessert places on campus; warm donuts with ice cream. 
          </p>
        </div>
      </div>

      <div className="card">
        {/* Image goes here */}
        <img 
          src="/gymday.jpeg" 
          alt="Powell" 
          className="card__image w-full h-full object-cover"
        />
        <div className="card__content">
          <p className="card__title">Gym</p>
          <p className="card__description">
            Trying the ucla gyms for the first time. 
          </p>
        </div>
      </div>

      <div className="card">
        {/* Image goes here */}
        <img 
          src="/fountain.jpeg" 
          alt="Powell" 
          className="card__image w-full h-full object-cover"
        />
        <div className="card__content">
          <p className="card__title">First 12 am walk</p>
          <p className="card__description">
            The cold depressing night walk 
          </p>
        </div>
      </div>



    </div>
  );
};

export default Cards;
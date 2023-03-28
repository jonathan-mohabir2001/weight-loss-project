import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container-fluid main-home-section bg-light">
      <header className="bg-white">
        <h1>What's Up !</h1>
      </header>

      <main className="bg-white">
        <div className="container">
          <div className="row">
            <h4>60 DOWN</h4>

            <p className="text-main">
              Get your copy of the book 60 DOWN: A Journey of Self Discovery and
              Self Love. This book is a collection of 5 chapters that will take
              you on my journey of self improvment and loosing 60 pounds.
            </p>

            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          <div className="row">
            <h4>Disclaimer</h4>

            <p className="text-main">
              I am not a doctor, nutritionist, or any other type of medical
              professional. I am just a guy who decided to make a change in his
              life and lost 60 pounds. I am not responsible for any injuries or
              other health related issues that may occur from following the
              information in this book. Please consult your doctor before
              starting any new diet or exercise program.
            </p>
          </div>

          <div className="row">
            <h4>Get Your Copy Today</h4>

            <p>
              For $20.00 you can get your copy of 60 DOWN my journey of self
              improvment and loosing an annoying 60 pounds.
            </p>

            <Link to="/purchase" className="btn btn-primary">
              Purchase
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-white text-muted text-center">
        Application developed by Jonathan Mohabir / Author of 60 DOWN
      </footer>
    </div>
  );
}

export default Home;

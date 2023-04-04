import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div
      className="container-fluid main-home-section bg-light"
      style={{ backgroundColor: '#f0f3f5' }}
    >
      <header className="bg-white py-3">
        <h1 className="text-center">60 DOWN - Jonathan M</h1>
      </header>

      <main className="bg-white py-5">
        <div className="container">
          <section className="row">
            <div className="col-md-6">
              <h2>60 Down</h2>
              <p>
                Get your copy of the book 60 DOWN: How I went from 240lbs to 180
                lbs in 8 months. This book is a collection of 5 chapters that
                will take you on my journey of self-improvement and losing 60
                pounds.
              </p>
            </div>
            <div className="col-md-6" id="intro-image">
              <img
                src="path-to-your-image.jpg"
                alt="Book cover"
                className="img-fluid"
              />
            </div>
          </section>

          <div id="more-about" className="text-center my-5">
            <p>
              Check the next page below to learn a little more about my story
              and why I decided to write this book.
            </p>
            <Link
              to="/about"
              className="btn btn-primary"
              aria-label="Learn More"
            >
              My Story
            </Link>
          </div>
        </div>

        <div className="container my-5">
          <div className="card bg-warning-red">
            <div className="card-header">
              <h2 className="text-center" style={{ color: 'red' }}>
                Disclaimer
              </h2>
            </div>
            <div className="card-body">
              <p className="font-weight-bold">
                Im not a doctor, nutritionist, or personal trainer. I am just a
                guy who decided to make a change in his life. I am not
                responsible for any injuries or health issues that may occur
                from following the advice in this book. Please consult your
                doctor before starting any new diet or exercise program.
              </p>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Buy the book</h2>
              <p>
                Join the journey of self-improvement and weight loss by
                purchasing your copy of "60 DOWN" today!
              </p>
              <Link to="/purchase">
                <button className="btn btn-primary">Purchase</button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white text-muted text-center py-3">
        Application developed by Jonathan M
      </footer>
    </div>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import './About.module.css';

//Images importation
import CollageImage from './images/CollageImage.PNG';
import FatBefore from './images/FatBefore.jpg';
import FatImageBefore from './images/FatImageBefore.jpg';
import FitBody from './images/FitBody.JPG';
import SecondFatImage from './images/SecondFatImage.JPG';

import Video from './images/Video.MP4';
import Video2After from './images/Video2after.MP4';

function About() {
  return (
    <div className="container">
      <header className="my-4">
        <h2 className="text-center text-uppercase">MY STORY</h2>
      </header>

      <main>
        <section className="my-5">
          <div className="row">
            <div className="col-md-6">
              <p>
                I am a 21-year-old dude who decided to make a change in my life
                at 19. I was tired of being overweight and not being able to get
                the results in life that I wanted.
              </p>
              {/*  
               Add the FatImageBefore image here 
               Add the FatBefore image here as well
              */}
              <p>
                I was always insecure about my weight and it was always a topic
                of conversation with my friends and family. I was tired of being
                the fat guy in the group. I was tired of being the fat guy in
                the pictures. I was tired of being the fat guy in the room.
              </p>

              <video src></video>

              <p>Something had to change and I needed to act fast.</p>

              <h5 className="text-danger">Here is my Story</h5>

              <p>
                I decided to make a change and lost 60 pounds. I am not a
                doctor, nutritionist, or any other type of medical professional.
                I am just a guy who decided to make a change in his life and
                lost 60 pounds. I am not responsible for any injuries or other
                health-related issues that may occur from following the
                information in this book. Please consult your doctor before
                starting any new diet or exercise program.
              </p>

              <p>
                Here is an image of how I looked before I started my weight loss
                journey. I was 19 years old and weighed 240 pounds, and this
                classified me as obese. BMI was 39.9 and I am 5'5, so I was a
                big guy.
              </p>

              <div className="alert alert-warning" role="alert">
                <p className="mb-0">
                  I am not a doctor, nutritionist, or any other type of medical
                  professional. I am just a guy who decided to make a change in
                  his
                </p>
              </div>
            </div>

            {/*
                There will be a section now here below of the after pictures and 
                the one video clip of the after fat guy
              */}

            <div className="col-md-6">
              <section>
                <p>
                  Checkout some images of how I look today after losing 60
                  pounds.
                  <br></br>
                  <p>You can do it too!</p>
                </p>
              </section>
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={FitBody}
                    alt="Fit Body"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                <div className="col-md-6">
                  <img
                    src={CollageImage}
                    alt="Collage Image"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                <div className="col-md-6">
                  <video
                    src={Video2After}
                    controls
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </footer>
    </div>
  );
}

export default About;

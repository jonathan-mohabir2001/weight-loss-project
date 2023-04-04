import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container">
      <header className="my-4">
        <h2 className="text-center text-uppercase">MY STORY</h2>
      </header>

      <main>
        <section className="my-5">
          <p>
            I am a 21-year-old dude who decided to make a change in my life at
            19. I was tired of being overweight and not being able to get the
            results in life that I wanted.
          </p>

          <p>
            I was always insecure about my weight and it was always a topic of
            conversation with my friends and family. I was tired of being the
            fat guy in the group. I was tired of being the fat guy in the
            pictures. I was tired of being the fat guy in the room.
          </p>

          <p>Something had to change and I needed to act fast.</p>

          <h5 className="text-danger">Here is my Story</h5>

          <p>
            I decided to make a change and lost 60 pounds. I am not a doctor,
            nutritionist, or any other type of medical professional. I am just a
            guy who decided to make a change in his life and lost 60 pounds. I
            am not responsible for any injuries or other health-related issues
            that may occur from following the information in this book. Please
            consult your doctor before starting any new diet or exercise
            program.
          </p>

          <div class="alert alert-warning" role="alert">
            <p class="mb-0">
              I am not a doctor, nutritionist, or any other type of medical
              professional. I am just a guy who decided to make a change in his
            </p>
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

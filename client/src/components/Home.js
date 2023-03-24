import React from 'react';

import About from './About';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container-fluid main-home-section bg-light">
      <header className="bg-white">
        <h3>Hi!</h3>
      </header>

      <main>
        <section>
          <p>My name is Jonathan, and I want to share my story</p>
        </section>

        <section>
          <p>
            This site will direct you to my personal book, and in this book, I
            share my story on how you can lose weight
          </p>
        </section>

        <section>
          <p className="text-muted">Priced at $25.00</p>

          <p>
            I will give you insight into the physical and mental aspects of
            weight loss
          </p>
        </section>

        <section>
          <p>
            <Link to="/about">Background Story</Link>
          </p>
        </section>
      </main>

      <footer className="bg-white text-muted text-center">
        Application developed by Jonathan Mohabir
      </footer>
    </div>
  );
}

export default Home;

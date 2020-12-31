import React from 'react';
import { Root, Head, Routes, addPrefetchExcludes } from 'react-static';

import { Link, Router } from 'components/Router';
import Dynamic from 'containers/Dynamic';

import './app.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function getEmailLink({ subject, body }) {
  return `mailto:info@bestprogramming.club?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

function App() {
  return (
    <Root>
      <Head>
        <title>Best Programming Club</title>
      </Head>
      <div style={{ textAlign: 'center', margin: '15rem 1rem 0' }}>
        <h1>
          BESt PROGRAMMiNG ClUb{' '}
          <span role="img" aria-label="smiling face stuck out tongue">
            😋
          </span>
        </h1>
        <div>
          <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>2021</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            <p>
              <a
                href={getEmailLink({
                  subject: 'I want to sponsor BPC',
                  body:
                    'Include your name and details about your sponsorship interest between the lines below:\n---\n\n\n---',
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a sponsor
              </a>
            </p>
            <p>
              <a
                href={getEmailLink({
                  subject: 'I want to join BPC',
                  body:
                    'Include your name and details about your membership request between the lines below:\n---\n\n\n---',
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord server
              </a>
            </p>
            <p>
              <a
                href="https://github.com/bestprogrammingclub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div> */}
    </Root>
  );
}

export default App;

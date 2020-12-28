import React from 'react';
import { Root, Head, Routes, addPrefetchExcludes } from 'react-static';
//
import { Link, Router } from 'components/Router';
import Dynamic from 'containers/Dynamic';

import './app.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <Head>
        <title>Best Programming Club</title>
      </Head>
      <div style={{ textAlign: 'center', marginTop: '10em' }}>Coming soon</div>
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

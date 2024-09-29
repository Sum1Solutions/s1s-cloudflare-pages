import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Header from './components/Header';
import YouTubeEmbed from './components/YouTubeEmbed';

function App() {
  return (
    <Auth0Provider
      domain="YOUR_AUTH0_DOMAIN"
      clientId="YOUR_AUTH0_CLIENT_ID"
      redirectUri={window.location.origin}
    >
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route path="/" exact>
                <YouTubeEmbed />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;

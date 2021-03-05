import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import CustomProvider from '../../providers/Custom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import NotFound from '../../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CustomProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Redirect from="/home" to="/" />
              <Route path="/v/:videoId">
                <VideoPage />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </CustomProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

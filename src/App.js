import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/mainPage';
import FeedbackPage from './pages/feedbackPage';
import OrderPage from './pages/orderPage';

function App() {
  return (
    <div className="container mt-4">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/feedback" component={FeedbackPage} />
        <Route path="/order" component={OrderPage} />
      </Switch>
    </div>
  );
}

export default App;

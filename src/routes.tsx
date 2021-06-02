import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Initial from './pages/initial';
import Quiz from './pages/quiz';

const Routes: React.FC = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Initial} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </BrowserRouter>
  )
}  

export default Routes;
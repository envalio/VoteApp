import React, { useState } from 'react';
import BodyApp from './components/BodyApp';
import VotesList from './components/VotesList';

import './App.css';


const App = () => {
  const [isStatisticOpened, setIsStatisticOpened] = useState(false);
  const handleOpenStatistic = () => {
    setIsStatisticOpened(!isStatisticOpened);
  }
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h2>This is the Vote app. You can choise and vote for your favorite number.</h2>
      <h6>Please push on button with number you already choice.</h6>
      {!isStatisticOpened && <BodyApp />}
      <h6>The same, you can click on button below and watch how many vote was already done for each number.</h6>
      <button className="ButtonStatistic" onClick={handleOpenStatistic}>{`${isStatisticOpened ? "Close" : "Open"} statistic`}</button>
      {isStatisticOpened && <VotesList />}
    </div>
  );
}

export default App;

import { useState } from 'react';
import './styles/startscreen.scss';

import { App } from './App';

export const MainPage = () => {
  const [isStarted, setIsStarted] = useState(false);

  if (!isStarted) {
    return (
      <div className="start-screen">
        <button
          onClick={() => {
            setIsStarted(true);
          }}
        >
          Start TodoApp
        </button>
      </div>
    );
  } else {
    return <App />;
  }
};

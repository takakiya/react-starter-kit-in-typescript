import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: 'Helllo, defaultProps!',
};

export default App;

import './App.css';
import { ChangeEvent, Component, useMemo, useState } from 'react';
import Posts from './components/Posts';
import { BaseButton } from './components/Button';
import { LabelledInput } from './components/Input';
import { ReactNode } from 'react';
import React from 'react';


interface ErrorBoundaryProps {
  children: ReactNode | ReactNode[];
}

interface ErrorBoundaryState {
  errored: boolean;
  message: string;
}

class ErrorBoundaryA extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    errored: false,
    message: '',
  }

  static getDerivedStateFromError(error: Error) {
    return {
      errored: true,
      message: error.message,
    };
  }

  render() {
    // console.log('RENDERING ERROR BOUNDARY...');

    return this.state.errored ? (
      <p>Something went wrong :{this.state.message}(</p>
    ) : this.props.children;
  }
}

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  }

  // let name;

  // if (counter === 5) {
  //   name = name.toUpperCase();
  // }
  // console.log('RENDERING Counter...')

  return (
    <BaseButton
      onClick={handleClick}
      className='red'
      >
      Click Me: {counter}
    </BaseButton>
  );
};

const App = () => {
  const [randomText, setRandomText] = useState('');
  const [anotherRandomText, setAnotherRandomText] = useState('');
  // console.log('RENDERING APP...');

  return (
    <div className="App">
      <ErrorBoundaryA>
        <p>{randomText}</p>
        <p>{anotherRandomText}</p>
        <LabelledInput
          id="search_1"
          type="search"
          label="Type Random"
          width="40%"
          value={randomText}
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setRandomText(value)}
        />
        <LabelledInput
          id="search_2"
          type="search"
          label="Type Random Again"
          width="40%"
          value={anotherRandomText}
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setAnotherRandomText(value)}
        />
        <Posts />
        <Counter />
      </ErrorBoundaryA>
    </div>
  );
}

export default App;

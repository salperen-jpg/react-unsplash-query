import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Form from './components/Form';
import Gallery from './components/Gallery';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Form />
      <Gallery />
    </main>
  );
}

export default App;

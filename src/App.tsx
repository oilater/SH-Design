import { useState } from 'react';
import Button from './atoms/Button/Button';
import { setTheme } from './utils/theme';
import './App.scss';

function App() {
  const [currentTheme, setCurrentTheme] = useState<'blue' | 'purple'>('blue');

  const toggleTheme = () => {
    const newTheme = currentTheme === 'blue' ? 'purple' : 'blue';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <div className="app">
      <div className="theme-toggle">
        <button 
          className={`theme-button ${currentTheme === 'blue' ? 'active' : ''}`}
          onClick={() => {
            setTheme('blue');
            setCurrentTheme('blue');
          }}
        >
          Blue Theme
        </button>
        <button 
          className={`theme-button ${currentTheme === 'purple' ? 'active' : ''}`}
          onClick={() => {
            setTheme('purple');
            setCurrentTheme('purple');
          }}
        >
          Purple Theme
        </button>
      </div>

      <div className="button-showcase">
        <h2>Button Variants</h2>
        <div className="button-group">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>

        <h2>Button Sizes</h2>
        <div className="button-group">
          <Button size="small">Small Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="large">Large Button</Button>
        </div>

        <h2>Button States</h2>
        <div className="button-group">
          <Button disabled>Disabled Button</Button>
          <Button isLoading>Loading Button</Button>
        </div>

        <h2>Button with Icons</h2>
        <div className="button-group">
          <Button variant="primary" size="medium">
            <span className="icon">→</span>
            Next
          </Button>
          <Button variant="secondary" size="medium">
            <span className="icon">←</span>
            Back
          </Button>
        </div>

        <h2>Button Combinations</h2>
        <div className="button-group">
          <Button variant="primary" size="small" isLoading>Small Loading</Button>
          <Button variant="secondary" size="large" disabled>Large Disabled</Button>
          <Button variant="primary" size="medium" isLoading disabled>Loading Disabled</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
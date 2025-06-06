import { useState } from 'react';
import { setTheme, getTheme } from './utils/theme';
import Button from './atoms/Button/Button';

function App() {
  const [currentTheme, setCurrentTheme] = useState<'blue' | 'purple'>(getTheme());

  const handleThemeChange = (theme: 'blue' | 'purple') => {
    setTheme(theme);
    setCurrentTheme(theme);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <Button
          variant="primary"
          onClick={() => handleThemeChange('blue')}
          disabled={currentTheme === 'blue'}
        >
          Blue Theme
        </Button>
        <Button
          variant="primary"
          onClick={() => handleThemeChange('purple')}
          disabled={currentTheme === 'purple'}
          style={{ marginLeft: '1rem' }}
        >
          Purple Theme
        </Button>
      </div>
      <div>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary" style={{ marginLeft: '1rem' }}>Secondary Button</Button>
      </div>
    </div>
  );
}

export default App;
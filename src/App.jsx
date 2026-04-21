import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black')

  function increase () {
    setCount(count + 1)
    setColor('green')
  }
  function decrease () {
    setCount(count - 1)
    setColor('red')
  }
  function reset() {
    setCount(0)
    setColor('black')
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    },
    counter: {
      fontSize: '6rem',
      fontWeight: 'bold',
      margin: '20px',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      minWidth: '200px',
      textAlign: 'center'
    },
    buttonContainer: {
      display: 'flex',
      gap: '15px',
      marginTop: '20px'
    },
    button: {
      fontSize: '1.5rem',
      padding: '10px 25px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: 'bold'
    },
    increaseButton: {
      backgroundColor: '#4CAF50',
      color: 'white'
    },
    decreaseButton: {
      backgroundColor: '#f44336',
      color: 'white'
    },
    resetButton: {
      backgroundColor: '#2196F3',
      color: 'white'
    },
    disabledButton: {
      backgroundColor: '#cccccc',
      cursor: 'not-allowed',
      opacity: 0.6
    },
    warning: {
      color: '#ff9800',
      fontSize: '1.2rem',
      marginTop: '10px',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.counter}>
        <h1 style={{ color: color, fontSize: '6rem', margin: 0 }}>{count}</h1>
      </div>
      {count >= 10 && <p style={styles.warning}>🎉 Max reached! 🎉</p>}
      {count <= -10 && <p style={styles.warning}>⚠️ Min reached! ⚠️</p>}
      <div style={styles.buttonContainer}>
        <button 
          style={{
            ...styles.button,
            ...styles.increaseButton,
            ...(count >= 10 ? styles.disabledButton : {})
          }}
          disabled={count >= 10} 
          onClick={increase}
        >
          +
        </button>
        <button 
          style={{
            ...styles.button,
            ...styles.decreaseButton,
            ...(count <= -10 ? styles.disabledButton : {})
          }}
          disabled={count <= -10} 
          onClick={decrease}
        >
          -
        </button>
        <button 
          style={{
            ...styles.button,
            ...styles.resetButton
          }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
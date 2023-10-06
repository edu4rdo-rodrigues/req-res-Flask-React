import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test: "Mensagem no terminal do flask e no console" })
    };

    fetch('http://127.0.0.1:5000/home', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Erro:', error));
  }, []);

  return (
    <div className="App">
      teste
    </div>
  );
}

export default App;
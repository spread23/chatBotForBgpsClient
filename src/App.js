
import Dashboard from './Dashboard/Dashboard';
import { useEffect } from 'react';
import { ConnectWithSocketServer } from './socketConnection/SocketCon';

function App() {
  useEffect(() => {
    ConnectWithSocketServer();
  }, []);
  
  return (
    <div className='App'>
      <Dashboard />
    </div>
  );
}

export default App;

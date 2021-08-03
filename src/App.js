import logo from './logo.svg';
import Header from './components/Header/Header.js'
import TicketsTable from './components/Table/TicketsTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TicketsTable />
    </div>
  );
}

export default App;

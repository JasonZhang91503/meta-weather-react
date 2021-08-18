import logo from './logo.svg';
import './App.css';
import PieChart from './component/charts/pie-chart/pie-chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PieChart value={70}/>
      </header>
    </div>
  );
}

export default App;
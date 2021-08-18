import './App.css';
import BarChart from './component/charts/bar-chart/bar-chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarChart whetherFiveDays={[
          {
            min_temp: 15.36,
            max_temp: 22.86
          },
          {
            min_temp: 14.91,
            max_temp: 22.89
          },
          {
            min_temp: 14.29,
            max_temp: 24.95
          }
        ]}>

        </BarChart>
      </header>
    </div>
  );
}

export default App;

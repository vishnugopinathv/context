import './App.css';
import Counter from './Counter'
import Count2 from './Count2';
import { CountContextProvider } from './context/countContext';
function App() {
  return (
    <CountContextProvider>
      <Counter />
      <Count2 />
    </CountContextProvider>
      
  );
}

export default App;

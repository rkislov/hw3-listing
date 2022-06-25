import './main.css';
import Listing from './components/Listing';
import items from "./etsy.json"

function App() {
  return (
    <div>
      <Listing items={items} />
      
    </div>
  );
}

export default App;


import './App.css';
import Forms from './Forms';
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
    <Forms/>
    </CookiesProvider>
  );
}

export default App;

import './App.css';
import BottomTab from './components/navigation/BottomTab'
import Index from "./pages";

function App() {
    return (
        <div className="App max-h-screen max-w-full ">
            <Index />
            <BottomTab/>
        </div>
    );
}

export default App;

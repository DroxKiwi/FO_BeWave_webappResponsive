import './App.css';
import { useState } from 'react'
import BottomTab from './components/navigation/BottomTab'
import Index from "./pages/Index";
import Search from "./pages/Search";



function App() {
    const [page, setPage] = useState("index")

    return (

        <div className="App max-h-screen max-w-full overflow-x-hidden">
            {page === "index" &&
                <Index />
            }
            {page === "search" &&
                <Search />
            }
            <BottomTab setPage={setPage}/>
        </div>
    );
}

export default App;

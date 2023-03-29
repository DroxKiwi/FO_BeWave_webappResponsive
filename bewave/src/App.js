import './App.css';
import { useState } from 'react'
import BottomTab from './components/navigation/BottomTab'
import Index from "./pages/Index";
import Search from "./pages/Search";

function App() {
    const [page, setPage] = useState("index")

    // this.state({
    //     page: "index"
    // })
    // const pageHandler = (page) => {
    //     this.setState({
    //         page: page
    //     });
    // }

    return (
        <div className="App max-h-screen max-w-full ">
            {page === "index" &&
                <Index />
            }
            {page === "search" &&
                <Search />
            }
            <h1>
                {page}
            </h1>
            <BottomTab setPage={setPage}/>
        </div>
    );
}

export default App;

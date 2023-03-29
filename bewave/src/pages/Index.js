import logo from "../assets/Logo Orange.png";

export default function Index() {
    return (
        <div className="App-header">
            <img src={logo} className="max-w-[50%]" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    )
}

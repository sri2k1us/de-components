import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        <a
                            className="App-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://cyverse-de.github.io/de-components/"
                        >
                            {" "}
                            DE Components{" "}
                        </a>
                    </p>
                </header>
            </div>
        );
    }
}

export default App;

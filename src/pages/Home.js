import logo from '../images/logo.png';
import '../App.css';
// import './Home.css';

export default function Home() {
    return (

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" /> <br></br>
                <a className="App-link" href="https://kimpham09.myportfolio.com/work" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </header>

            <footer className="App-footer">
                © Copyright
            </footer>
        </div>
    );
}


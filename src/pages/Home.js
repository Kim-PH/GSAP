import { Transition } from 'react-transition-group';
import { TweenMax } from 'gsap/all';

import logo from '../images/logo.png';
import '../App.css';
// import './Home.css';

const startState = { autoAlpha: 0, x: -100};

export default function Home(props) {
    return (
        
        <Transition
            unmountOnExit
            in={props.show}
            timeout={3000}
            onEnter={node => TweenMax.set(node, startState)}
            addEndListener={(node, done) => {
            TweenMax.to(node, 0.5, {
                autoAlpha: props.show ? 1 : 0,
                x: props.show ? 0 : 100,
                onComplete: done,
            });
            TweenMax.to(".App-logo", 1.5, {
                rotation: 360,
                scale: 0.5,
                ease: "Back.easeInOut",
            });

            }}
        >

            <div className="App home">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" /> <br></br>
                    <a className="App-link" href="https://kimpham09.myportfolio.com/work" target="_blank" rel="noopener noreferrer">Portfolio</a>
                </header>

                <footer className="App-footer">
                    © Copyright
                </footer>
            </div>
        </Transition>
    );
}


import { Transition } from 'react-transition-group';
import { TweenMax } from 'gsap/all';

import '../App.css';
// import './Home.css';

const startState = { autoAlpha: 0.5, y: -100 };

export default function About(props) {
    return (

        <Transition
        
            unmountOnExit
            in={props.show}
            timeout={500}
            onEnter={node => TweenMax.set(node, startState)}
            addEndListener={(node, done) => {
            TweenMax.to(node, 1, {
                y: props.show ? 0 : 100,
                rotation: 360,
                ease: "Power4.easeInOut",
            });
            }}
        >

            <div className="App about">
                <header className="App-header">
                    <h1>About Me</h1>
                    <p>​​​​​​​I'm a web designer based in Toronto, Canada.</p>
                </header>

                <footer className="App-footer">
                    © Copyright
                </footer>
            </div>
        </Transition>

    );
}

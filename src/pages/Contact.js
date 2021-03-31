import { Transition } from 'react-transition-group';
import { TweenMax } from 'gsap/all';

import '../App.css';
// import './Home.css';

const startState = { autoAlpha: 0, y: -50 , entering: { opacity: 0 },
entered: { opacity: 1 }};

export default function Contact(props) {
    return (
        <Transition
            unmountOnExit
            in={props.show}
            timeout={1000}
            onEnter={node => TweenMax.set(node, startState)}
            addEndListener={(node, done) => {
            TweenMax.to(node, 0.5, {
                autoAlpha: props.show ? 1 : 0,
                y: props.show ? 0 : 50,
                backgroundColor: "#lightpink",
                onComplete: done
            });
            TweenMax.to(".ContactAni", 1.5, {
                scale: 2,
                ease: "Elastic.easeInOut",
            });
            }}
        >


            <div className="App contact">
                <header className="App-header">
                <h1>Contact me at:</h1>
                    <p className="ContactAni">​​​​​​​phamkimanh159@gmail.com</p>
                </header>

                <footer className="App-footer">
                    © Copyright
                </footer>
            </div>
        </Transition>
    );
}


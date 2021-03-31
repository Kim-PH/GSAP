import { Transition } from 'react-transition-group';
import { TweenMax} from 'gsap/all';
import pic1 from '../images/1.png';
import pic2 from '../images/2.gif';
import pic3 from '../images/3.png';
import pic4 from '../images/4.jpg';
import pic5 from '../images/5.jpg';
import pic6 from '../images/6.jpg';
import pic7 from '../images/7.jpg';

import '../App.css';

const startState = { autoAlpha: 0, y: -100 };

export default function Projects(props) {
    return (
        <Transition
            unmountOnExit
            in={props.show}
            timeout={500}
            onEnter={node => TweenMax.set(node, startState)}
            addEndListener={(node, done) => {
            TweenMax.to(node, 0.5, {
                autoAlpha: props.show ? 1 : 0,
                y: props.show ? 0 : 50,
                onComplete: done
            });
            TweenMax.to(".PicLeft", 1,  {
                duration: 880, 
                y: props.show ? 0 : 50,
                rotation: 360,
                ease: "Elastic.easeInOut",
            });
            TweenMax.to(".PicRight", 1,  {
                autoAlpha: props.show ? 1 : 0,
                x: 0,
                rotation: -360,
                ease: "Elastic.easeInOut",
            });
            }}
        >

            <div className="App projects">
                <header className="App-header">
                    <h1>Projects</h1>
                    <p>Click the link below to see my projects</p>
                    <ul className="Showcase">
                        <li className="PicLeft"><img src={pic1} className="Proj" alt="1" /></li>
                        <li className="PicRight" ><img src={pic2} className="Proj" alt="2" /></li>
                        <li className="PicLeft" ><img src={pic3} className="Proj" alt="3" /></li>
                        <li className="PicRight" ><img src={pic4} className="Proj" alt="4" /></li>
                        <li><img src={pic5} className="Proj" alt="5" /></li>
                        <li><img src={pic6} className="Proj" alt="6" /></li>
                        <li><img src={pic7} className="Proj" alt="7" /></li>
                    </ul>
                    <a className="App-link" href="https://kimpham09.myportfolio.com/work" target="_blank" rel="noopener noreferrer">Portfolio</a>
                </header>

                <footer className="App-footer">
                    © Copyright
                </footer>
            </div>
        </Transition>
    );
}


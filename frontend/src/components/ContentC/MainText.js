import { useState, useEffect } from 'react';
import '../../styles/ContentCss/MainText.css';

const words = ['robotics.', 'web development.', 'deep learning.']; // Add more words here

function Text1() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentWordIndex]);

    return (
        <div className="textContainer">
            <h1>Hi! I'm Guillem.</h1>
            <p>
                Currently studying electronics <br />
                engineering with a specific <br />
                focus on{' '}
                <span className="changingWordContainer">
                    <span className="changingWord">{words[currentWordIndex]}</span>
                </span>
            </p>
        </div>
    );
}

export default Text1;

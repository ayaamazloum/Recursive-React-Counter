import { useState } from 'react';
import './style.css';

const Counter = ({ c, index, isRootCounter }) => {
    const [counter, setCounter] = useState(c);
    const [isVisible, setIsVisible] = useState(true);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDelete = () => {
        !isRootCounter && setIsVisible(false);
    };

    return (
        isVisible && (
        <div className="counter">
            <p>-{index}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => {
                    handleDelete();
            }}>-</button>
            <br />
            {Array.from({ length: counter }, (_, i) => (
                <Counter c={0} index={i + 1} isRootCounter={false} />
            ))}
        </div>)
    )
};

export default Counter;
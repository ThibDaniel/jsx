import React, { useState, useRef, useEffect } from 'react';

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  const directionRef = useRef(null);
  const previousCountRef = useRef(initialValue);

  useEffect(() => {
    handleCountChange();
  }, [count]);

  function checkDirection(currentCount, previousCount) {
    if (currentCount > previousCount) {
      return 'up';
    } else if (currentCount < previousCount) {
      return 'down';
    }
    return null;
  }

  function updateDirection(newDirection) {
    return newDirection && newDirection !== directionRef.current;
  }

  function uDirection(newDirection) {
    directionRef.current = newDirection;
    directionChange(newDirection);
  }
  function handleCountChange() {
    const newDirection = checkDirection(count, previousCountRef.current);
    if (updateDirection(newDirection)) {
      uDirection(newDirection);
    }
    previousCountRef.current = count;
  }
  function directionChange(newDirection) {
    console.log(`Direction changed to: ${newDirection}`);
  }

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Up</button>
      <button onClick={decrement}>Down</button>
    </div>
  );
}

export default Counter;
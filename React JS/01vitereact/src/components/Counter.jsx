import React from 'react';

const First = () => {
  const [count, setCount] = React.useState(0);

  const increase = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>Count is: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default First;
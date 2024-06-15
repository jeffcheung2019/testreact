import React, {useEffect, useState, useCallback} from 'react';
import Page2 from './page2';
const Page1 = () => {

    const [val1, setVal1] = useState(0)

    useEffect(() => {

    }, [])
    
    const onClickIncrement = () => {
        const newVal1 = val1 + 1;
        setVal1(newVal1)
    }

    const onClickDecrement = () => {
        const newVal1 = val1 - 1;
        setVal1(newVal1)
    }


  return (
    <div>
      <p>Page 1</p>

    <p>val1: {val1}</p>

      <button onClick={onClickIncrement}>
        increment
      </button>

      <Page2 val1={val1}/>

      <button onClick={onClickDecrement}>
        decrement
      </button>
    </div>
  );
}

export default Page1;
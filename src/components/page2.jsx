import React, {useEffect, useState, useCallback} from 'react';

const Page2 = (props) => {

    const {val1} = props

    const [val2, setVal2] = useState(0)

  return (
    <div>
        ============
      <p>Page 2</p>

    <p>val2: {val2}</p>

    <p>val1 from page1 to page2 : {val1}</p>
    ============

    </div>
  );
}

export default Page2;
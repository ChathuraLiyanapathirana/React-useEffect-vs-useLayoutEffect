import React, { useEffect, useLayoutEffect, useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);

  // Comment each hook then you can see the diffrence

  // useLayoutEffect(() => {
  //   setValue(10);
  // }, [value]);

  useEffect(() => {
    setValue(10);
  }, [value]);

  return <div>value: {value}</div>;
};

export default App;

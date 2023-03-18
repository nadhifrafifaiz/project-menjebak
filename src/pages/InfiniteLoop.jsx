import React, { useEffect, useState } from "react";

function InfiniteLoop() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(number + 1);
  }, [number]);

  return (
    <div>
      <p>What happened if the code is like above?</p>
      <p>
        Print the number to see what happens and try to understand why it behave
        like that.
      </p>
    </div>
  );
}

export default InfiniteLoop;

import * as React from "react";

import TimeDown from "../time_down/TimeDown";

//
export interface SecondDownProps {
  second: number;
  down_second: boolean;
}

//
function SecondDown({ second, down_second }: SecondDownProps) {
  //
  return (
    <TimeDown
      num={second}
      num_next={second === 0 ? 60 : second - 1}
      down={down_second}
    />
  );
}

export default SecondDown;

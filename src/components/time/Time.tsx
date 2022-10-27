import * as React from "react";

import SecondDown from "../second_down/SecondDown";
import { TimeDownNum } from "../time_down/TimeDown";

import "./Time.scss";

//
export interface TimeProps {}

//
function Time({}: TimeProps) {
  //
  const [state_obj, setStateObj] = React.useState({
    second: 59,
    down_second: false,
  });

  const { second, down_second } = state_obj;

  //
  React.useEffect(() => {
    setInterval(() => {
      setStateObj((state_obj) => {
        return {
          ...state_obj,

          down_second: true,
        };
      });
      setTimeout(() => {
        setStateObj((state_obj) => {
          const new_second = state_obj.second === 0 ? 59 : state_obj.second - 1;
          return {
            ...state_obj,
            second: new_second,
            down_second: false,
          };
        });
      }, 500);
    }, 1000);
  }, []);

  //
  return (
    <div>
      <div>
        <SecondDown second={second} down_second={down_second} />
      </div>
    </div>
  );
}

export default Time;

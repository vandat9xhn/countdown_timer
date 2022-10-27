import * as React from "react";

import "./TimeDown.scss";

//
export interface TimeDownProps {
  num: string | number;
  num_next: string | number;
  down: boolean;
}

export interface TimeDownNumProps {
  num: string | number;
}

//
export function TimeDownNum({ num }: TimeDownNumProps) {
  //
  return (
    <div className="TimeDown_num h-100per">
      <div>{num}</div>
    </div>
  );
}

//
function TimeDown({ num, num_next, down }: TimeDownProps) {
  //
  return (
    <div className="TimeDown pos-rel">
      <div className="TimeDown_top pos-rel h-50per overflow-hidden">
        <div className="pos-abs top-0 left-0 w-100per h-200per">
          <TimeDownNum num={num_next} />
        </div>
      </div>

      <div className="TimeDown_bot pos-rel h-50per overflow-hidden">
        <div className="pos-abs bot-0 left-0 w-100per h-200per">
          <TimeDownNum num={num} />
        </div>
      </div>

      <div
        className={`TimeDown_change pos-abs top-0 left-0 w-100per h-50per ${
          down ? "TimeDown_change-active" : "TimeDown_change-inactive"
        }`}
      >
        <div className="TimeDown_change_front pos-abs left-0 top-0 w-100per h-100per overflow-hidden">
          <div className="h-200per">
            <TimeDownNum num={num} />
          </div>
        </div>

        <div className="TimeDown_change_back pos-abs left-0 top-0 w-100per h-100per overflow-hidden">
          <div className="TimeDown_change_back_contain h-200per">
            <TimeDownNum num={num_next} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeDown;

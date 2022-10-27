import * as React from "react";

import { IS_MOBILE } from "./constant";
import "./styles/styles.scss";
import Time from "./components/time/Time";

import design_pc from "../design/active-states.jpg";

//
export interface AppProps {}

//
function App({}: AppProps) {
  //
  React.useLayoutEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.dataset.theme = "1";

    if (IS_MOBILE) {
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("device-mobile");
    }
  }, []);

  //
  return (
    <div className="App">
      <div className="App_contain">
        <div>
          <div className="App_title">We're launching soon</div>

          <div>
            <Time />
          </div>
        </div>
      </div>

      <div>
        {/* <img style={{ width: "100%" }} src={design_pc} alt="" /> */}
      </div>
    </div>
  );
}

export default App;

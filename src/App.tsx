import { useEffect, useRef, useState } from "react";

const log = console.log;

function Box() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    log("mount 1 ", ref.current);

    return () => {
      setTimeout(() => log("unmount 1 ", ref.current), 0);
    };
  }, []);

  useEffect(() => {
    const element = ref.current;

    log("mount 2 ", element);
    return () => {
      setTimeout(() => log("unmount 2 ", element), 0);
    };
  }, []);

  return (
    <div ref={ref} className="box">
      Box
    </div>
  );
}

function App() {
  let [state, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => setState(false), 1000);
  }, []);

  return (
    <div className="App">
      <p>useEffect useRef warning</p>
      <span>check the console tab</span>
      {state && <Box />}
    </div>
  );
}

export default App;

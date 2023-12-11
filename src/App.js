import { useState } from "react";
import Buttons from "./components/Buttons";
import Chart from "./components/Chart";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function App() {
  const [arr, setArr] = useState(() => {
    const initialArray = Array.from({ length: 91 }, (_, index) => index + 80);
    shuffleArray(initialArray);
    return initialArray;
  });
  const [current, setCurrent] = useState({ c1: -1, c2: -2 });

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Buttons arr={arr} setArr={setArr} setCurrent={setCurrent} shuffleArray={shuffleArray} />
      <Chart arr={arr} />
    </div>
  );
}

export default App;

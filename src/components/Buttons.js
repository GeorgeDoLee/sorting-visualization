
const Buttons = ({arr, setArr, setCurrent, shuffleArray}) => {

    const reset = () => {
        setArr(() => {
            const initialArray = Array.from({ length: 91 }, (_, index) => index + 80);
            shuffleArray(initialArray);
            return initialArray;
        });
    };

    const delay = 35;

    const bubbleSort = async () => {
        let array = [...arr];
        let sorted = false;
        while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
            setCurrent({ c1: i, c2: i + 1 });
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            sorted = false;
            setArr([...array]);
            await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
        }
        setCurrent({c1: -1, c2: -2});
    };

    const insertionSort = async () => {
        let array = [...arr];
        for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            setCurrent({ c1: j, c2: j + 1 });
            array[j + 1] = array[j];
            setArr([...array]);
            await new Promise((resolve) => setTimeout(resolve, delay));
            j = j - 1;
        }
        array[j + 1] = key;
        }
        setCurrent({ c1: -1, c2: -2 });
    };

    const selectionSort = async () => {
        let array = [...arr];
        for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
            minIndex = j;
            }
        }
        setCurrent({ c1: i, c2: minIndex });
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        setArr([...array]);
        await new Promise((resolve) => setTimeout(resolve, delay));
        }
        setCurrent({ c1: -1, c2: -2 });
    };

    const stalinSort = async () => {
        let array = [...arr];
        let max = array[0];
    
        for (let i = 1; i < array.length; i++) {
        setCurrent({ c1: i - 1, c2: i });
    
        if (array[i] < max) {
            array[i] = 0; 
            setArr([...array]);
            await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
            max = array[i]; 
        }
        }
    
        setCurrent({ c1: -1, c2: -2 });
    };

    return (  
        <div className="absolute top-20 flex flex-row gap-10">
            <button
                className="bg-slate-500 py-2 px-8 font-bold text-white rounded-xl"
                onClick={() => reset()}
            >
            reset
            </button>
            <button
                className="bg-slate-300 hover:bg-slate-500 py-2 px-12 font-bold text-slate-500 hover:text-white rounded-xl duration-300 "
                onClick={() => bubbleSort()}
            >
            Bubble Sort
            </button>
            <button 
                className="bg-slate-300 hover:bg-slate-500 py-2 px-12 font-bold text-slate-500 hover:text-white rounded-xl duration-300 "
                onClick={() => insertionSort()}
            >
            Insertion Sort
            </button>
            <button 
                className="bg-slate-300 hover:bg-slate-500 py-2 px-12 font-bold text-slate-500 hover:text-white rounded-xl duration-300 "
                onClick={() => selectionSort()}
            >
            Selection Sort
            </button>
            <button 
                className="bg-red-800 hover:bg-red-500 py-2 px-12 font-bold text-yellow-500 hover:text-yellow- rounded-xl duration-300 "
                onClick={() => stalinSort()}
            >
            Stalin Sort ☭
            </button>
        </div>
    );
}
 
export default Buttons;
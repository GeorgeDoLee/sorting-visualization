

const Chart = ({arr}) => {
    return (  
        <div className="flex flex-row gap-2 items-end">
            {arr.map((val, index) => (
            <div
                key={index}
                style={{ height: `${val}px` }}
                className={`w-[8px] duration-200 ${
                index === current.c1 || index === current.c2
                    ? "bg-red-800"
                    : "bg-slate-500"
                }`}
            ></div>
            ))}
        </div>
    );
}
 
export default Chart;
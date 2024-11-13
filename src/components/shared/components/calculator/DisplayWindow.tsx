
function DisplayWindow({ expression, result }:
    { expression: string, result: string }
) {
    return (
    <div className="displayWindow bg-gray-100 p-2">
        <p className="expression text-gray-800 text-xl">{expression}</p>
        <p className="result text-gray-800 text-4xl">{result}</p>
    </div>
    );
}

export default DisplayWindow;
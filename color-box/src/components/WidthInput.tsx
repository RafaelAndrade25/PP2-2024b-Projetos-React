function WidthInput({width, setWidth}: { width: number, setWidth: (value: number) => void }) {
    return (
        <div>
            <label htmlFor='colorInput'>Digite uma cor ou código hexadecimal: </label>
            <input
                type='text'
                id='WidthInput'
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
            />
        </div>
    );
}
export default WidthInput;
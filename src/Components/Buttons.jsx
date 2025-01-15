export default function Buttons({ count }) {
    const arr = [];
    for (let i = 1; i <= count; i++) {
        arr.push(i);
    }
    return (
        <div>
            {arr.map((x, index) => (
                <button key={index}>{x}</button>
            ))}
        </div>
    );
}
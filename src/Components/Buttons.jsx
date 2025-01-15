import '../App.css'
function Buttons({ count, onClick }) {
    const arr = [];
    for (let i = 1; i <= count; i++) {
        arr.push(i);
    }
    return (
        <>
            {arr.map((x, index) => (
                <button key={index} onClick={()=>onClick(x)}>{x}</button>
            ))}
        </>
    );
}

function Button(props){
    const {children, onClick} = props;
    return <button onClick={onClick}>{children}</button>
}

export {Buttons, Button}
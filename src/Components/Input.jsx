
export default function Input(props){
/*
egRef : setting ref
input : current input value
handleInput : setting function for input 
*/
    const {egRef, input, handleInput} = props;
    
// allow only specified regex in input field
    function handleKeyPress(event) {
        const allowedKeys = /[0-9+\-*./%]/;
        if (!allowedKeys.test(event.key)) {
            event.preventDefault();
        }
    }

    return <input type="text" pattern="[0-9+*-/%]" ref={egRef} value={input} onChange={(e)=>handleInput(e.target.value, true)} onKeyDown={handleKeyPress} />    
}

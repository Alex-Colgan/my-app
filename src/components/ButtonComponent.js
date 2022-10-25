import { useState } from 'react'; // This is a React hook.
// Hooks are snippets of JavaScript that React provides.

function ButtonComponent(props) {

    const [ButtonColour, setButtonColour] = useState('green');
    const [myName, setMyName] = useState('');

    //const {ButtonColour, TextColour} = props;

    const ButtonStyles = {
        color: '#fff',
        backgroundColor: ButtonColour,
        margin: "1rem",
        borderRadius: '5px',
        border: '1px solid black',
        fontSize: '2rem',
        padding: ' 0.6rem 1rem',
    }

    const changeColour = () => {
        setButtonColour('red');
        setMyName('Bob');
    }

    return (
        <div>
            <button style={ButtonStyles} onClick={changeColour}>Change Colour: {ButtonColour} - {myName}</button>
        </div>
    )

}

export default ButtonComponent;
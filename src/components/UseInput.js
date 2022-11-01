import {useState} from 'react';
function UseInput(defaultValue = ''){
    const [values, setValues] = useState(defaultValue);
    
    function onChangeValue(e){
        setValues(e.target.value)
    }
    return [values, onChangeValue];
}

export default UseInput;
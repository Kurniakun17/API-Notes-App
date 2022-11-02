import {useState} from 'react';
import PropTypes from 'prop-types';

function UseInput(defaultValue = ''){
    const [values, setValues] = useState(defaultValue);
    
    function onChangeValue(e){
        setValues(e.target.value)
    }
    return [values, onChangeValue];
}

UseInput.propTypes={
    defaultValue:PropTypes.string
}

export default UseInput;
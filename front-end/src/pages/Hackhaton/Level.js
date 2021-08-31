import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6', 'Level 7'];

export default function Level() {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div style={{marginBottom:'20px'}}>
            {/*<div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>*/}
            {/*<div>{`inputValue: '${inputValue}'`}</div>*/}
            <br />
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Choose Lavel" variant="outlined" />}
            />
        </div>
    );
}

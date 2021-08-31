import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['Beginners', 'Intermediary', 'Advanced'];

export default function Knowledge() {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div style={{marginTop:'10px'}}>
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
                renderInput={(params) => <TextField {...params} label="Prior knowledge in chosen topic." variant="outlined" />}
            />
        </div>
    );
}

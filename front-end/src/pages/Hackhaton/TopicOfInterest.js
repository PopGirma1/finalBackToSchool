import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['Application Development', 'Data Science', 'Java Applications'];

export default function TopicOfInterest() {
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
                renderInput={(params) => <TextField {...params} label="Choose your topic of interest only one" variant="outlined" />}
            />
        </div>
    );
}

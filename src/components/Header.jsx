import React from 'react';
// import mui select
import { Select, MenuItem, FormControl, InputLabel, TextField, Button } from '@mui/material';

const Header = (props) => {

    const handleDropdownChange = (event) => {
        props.setCategory(event.target.value);
    };
    return (
        <div>
            <h1>Header</h1>
            <FormControl>
            <InputLabel id="prompt-selection">Options</InputLabel>
            <Select
                labelId="category-selection"
                id="category-selection"
                value={props.category}
                label="Options"
                onChange={handleDropdownChange}
            >
                <MenuItem value="1">News</MenuItem>
                <MenuItem value="2">Sports</MenuItem>
                <MenuItem value="3">Gaming</MenuItem>
                <MenuItem value="4">Tech</MenuItem>
            </Select>         
            </FormControl>
        </div>
    );
}

export default Header
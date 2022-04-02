import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from 'react-dropdown';

function Feeling() {
    const history = useHistory();
 
    const [value, setValue] = useState('');
    // const options = [
    //     { label: 'Fruit', value: 'fruit' },
    //     { label: 'Vegetable', value: 'vegetable' },
    //     { label: 'Meat', value: 'meat' }
    // ];

    // const [value, setValue] = useState('fruit');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

    const handleSelect = (event) => {
        setValue(event.target.value);
    }

    const options1 = [
        'one', 'two', 'three'
      ];
      const defaultOption = options1[0];
    
    return (
        <>
        
        {/* <label>
        What do we eat?
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        </label>

        <p>We eat {value}!</p> */}

        <Dropdown options={options1} onChange={handleSelect} value={defaultOption} placeholder="Select an option" />
        </>
    )
}

export default Feeling;
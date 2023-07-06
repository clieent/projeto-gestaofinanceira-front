import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

type DefaultToggleProps = {
    placeholder: string
    label: string
    id: string
    setState: React.Dispatch<React.SetStateAction<any>>
    options: Array<{ name: string, value: boolean, id: string }>
}

export default function DefaultToggle({placeholder, label, id, options, setState}: DefaultToggleProps) {

  function handleOnChange(e: any) {
    const id = e.id
    setState((date: any) => ({
        ...date,
        [id]: true,
    }))
    console.log('AAAAAAAAAAAAAA')
}

  return (
    <Autocomplete
      multiple
      id={id}
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => {
/*         console.log('AAAAAAAAAAAAAAAAAAA')
        setState((prev: any) => ({
          ...prev,
        [option.id]
        })) */
        return option.name
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          
          <Checkbox
            onClick={() => {handleOnChange(option)}}
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
}
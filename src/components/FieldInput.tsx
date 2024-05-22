import { Box, TextField } from '@mui/material'
import React from 'react'

interface Props {
  name: string;
  value: string;
  label: string;
  onChangeInput: (e:React.ChangeEvent<HTMLInputElement> )=>void
  width: number
}

export const FieldInput = ({name, onChangeInput, label, value, width=200}: Props) => {
  return (
    <Box gap={2} m={2}>
      <TextField
        id="outlined-password-input"
        label={label}
        name={name}
        value={value}
        onChange={onChangeInput}
        sx={{width: width}}
      />
    </Box>

  )
}

import { Typography } from '@mui/material'
import React from 'react'

interface Props {
  about: object
}

export const Paragraph = ({about}: Props) => {
  return (
    <React.Fragment>
      {
        Object.entries(about).map(([key, value], index) => (
          <Typography variant='body1' fontSize={18} mt={3} fontWeight={300} key={key}>
            {key.startsWith('b') ? `${index-2}. ${value}` : value}
          </Typography>
        ))
      }
    </React.Fragment>
  )
}

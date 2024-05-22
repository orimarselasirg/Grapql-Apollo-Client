import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

interface Props {
  loading: boolean
}

export const Loading = ({loading}: Props) => {
  return (
    <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          appear={true}
          // onClick={()=> setOpen(!open)}
        >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
  to: string;
  buttonText: string;
  mb?: number;
  mt?: number
}

export const GoBackButton = ({buttonText, to, mb=0, mt=0}: Props) => {
  return (
    <Link to={to}>
      <Button variant='outlined' sx={{marginBottom: mb, marginTop: mt}}>
        {buttonText}
      </Button>
    </Link>
  )
}

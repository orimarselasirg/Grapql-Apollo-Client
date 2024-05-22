import { Typography, MenuItem } from '@mui/material'
import { NavLink } from 'react-router-dom'

interface Props {
  to: string;
  menuText: string;
}

export const MenuItemComponent = ({menuText, to}: Props) => {
  return (
    <MenuItem>
      <NavLink to={to} style={{color: 'inherit'}}>
        <Typography>
          {menuText}
        </Typography>
      </NavLink>
    </MenuItem> 
  )
}

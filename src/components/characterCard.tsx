import { Backdrop, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TEXT } from '../utils/contans';

interface Props {
  image: string;
  name: string;
  genre: string;
  id: string;
}

export const CharacterCard = ({image, name, genre, id}: Props) => {

  const [open, setOpen] = useState<boolean>(false)
  return (
    <Card sx={{ maxWidth: 345, width: 300}}>
      <CardMedia
        sx={{ height: 240, cursor: 'pointer' }}
        image={image}
        title={name}
        onClick={()=>setOpen(true)}
      />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={()=> setOpen(!open)}
      >
        <CardMedia
          sx={{ height: 700, width: 700 }}
          image={image}
          title={name}
        />
      </Backdrop>
      <CardContent>
        <Typography gutterBottom variant="h5"  display={'flex'} alignItems={'center'} alignContent={'flex-start'} height={80}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" display={'flex'} alignItems={'flex-start'}>
          {genre}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/character/${id}`}>
          <Button size="small">{TEXT.detailText}</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

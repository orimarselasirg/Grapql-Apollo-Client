import { Backdrop, Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { TEXT } from '../utils/contans'
import { useQuery } from '@apollo/client';
import { GET_CHARACTER_BY_ID} from '../api/queries/queries';
import { useState } from 'react';
import { Loading } from '../components/Loading';

export const Welcome = () => {
  
  const [open, setOpen] = useState<boolean>(false)
  const{loading, data} = useQuery(GET_CHARACTER_BY_ID,{
    variables: {
      id: String(Math.floor(Math.random() * 3))
    }
  })


  return (
    <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}} >
      <Typography variant='h4' fontWeight={500} mb={4}>
        {TEXT.welcomeSubtitle}
      </Typography>
      <Loading
         loading={loading}
      />
      <Box sx={{backgroundColor: 'white'}} height={520} width={400} p={3} borderRadius={1} boxShadow={3}>
        <Stack spacing={4} justifyContent={'center'} alignItems={'center'}>
          <img src={data?.character?.image} alt="" height={450} width={350} />
          <Link to='/home' style={{color: 'inherit'}}>
            <Button variant="contained" disableElevation>
              {TEXT.welcomeTitle}
            </Button>
          </Link>
        </Stack>
      </Box>
      <Typography onClick={()=>setOpen(true)} m={5} p={2} fontSize={15} fontWeight={500} borderRadius={1} sx={{backgroundColor: '#fff', cursor: 'pointer'}}>
        {TEXT.whatsThis}
      </Typography>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={()=> setOpen(!open)}
      >
        <Stack>
          <Typography variant='caption' fontWeight={500} fontSize={20} m={5}>
            {TEXT.textInformation1}
          </Typography>

          <Typography variant='caption' fontWeight={300} fontSize={18} m={5}>
          {TEXT.textInformation2}
          </Typography>
        </Stack>
      </Backdrop>
    </Container>
  )
}

import { useQuery } from '@apollo/client'
import { GET_CHARACTER_BY_ID } from '../api/queries/queries'
import { useParams } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material';
import { Loading } from '../components/Loading';
import { GoBackButton } from '../components/GoBackButton';
import { TEXT } from '../utils/contans';

export const CharacterDetails = () => {

  const {id} = useParams()
  const{loading, data} = useQuery(GET_CHARACTER_BY_ID,{
    variables: {
      id: String(id)
    }
  })

  return (
    <Box  sx={{width: '97vw', backgroundColor: 'whitesmoke'}} borderRadius={1} borderBottom={1} height={730} alignContent={'center'}>
      <Loading
        loading={loading}
      />
      {
        !loading &&
        <>
        <Stack width={100} p={2}>
          <GoBackButton
            buttonText={TEXT.backButtonText}
            to='/home'
            mb={1}
          />
        </Stack>    
        <Stack direction={'row'} spacing={2} alignItems={'center'} alignContent={'center'} pl={2} pr={2}>
          <Box display={'flex'} width={500} height={650}>
            <img src={data?.character?.image} alt={data?.character?.name} width={500} height={650} />
          </Box>
          <Stack direction={'row'} spacing={5} alignItems={'center'} alignContent={'center'} width={'100%'}>
            <Stack spacing={2} alignItems={'flex-start'} direction={'column'} width='100%'>
              <Typography gutterBottom variant="h5" fontSize={50} fontWeight={600} >
                {data?.character?.name}
              </Typography>
              <Typography gutterBottom variant="caption" fontSize={20} fontWeight={400} >
                {TEXT.speciesTitle} {data?.character?.species}
              </Typography>
              <Typography gutterBottom variant="body1" fontSize={15} fontWeight={200} >
                {TEXT.status} {data?.character?.status}
              </Typography>
              <Typography gutterBottom variant="body1" fontSize={15} fontWeight={200} >
                {TEXT.genre} {data?.character?.gender}
              </Typography>
            </Stack>
            <Stack height={500} overflow={'auto'} alignItems={'flex-start'} width='100%'>
              <Typography variant='button' fontWeight={600} mb={2} sx={{textDecoration: 'underline'}}>
                {TEXT.episodeListtitle}
              </Typography>
              {
                data?.character?.episode.map((e: {name: string}, index: string) => (
                  <Stack alignItems={'flex-start'} key={index}>
                    <Typography variant='caption' fontSize={15} mb={1} textAlign={'start'}>
                      {index +1}. {e?.name}
                    </Typography>
                  </Stack>
                ))
              }
            </Stack>

          </Stack>
        </Stack> 
        </>
      }
    </Box>
  )
}

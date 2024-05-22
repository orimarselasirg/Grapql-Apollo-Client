import { Box, Stack } from '@mui/material'
import { ABOUT, TEXT } from '../utils/contans';
import me from '../assets/me.jpg'
import { GoBackButton } from '../components/GoBackButton';
import { Paragraph } from '../components/Paragraph';

export const About = () => {
  return (
    <Stack width={'100%'} alignItems={'center'} alignContent={'center'} mt={5} mb={5}>
      <Box width={'50%'} textAlign={'justify'} alignItems={'center'} sx={{backgroundColor: 'white'}} p={3} borderRadius={1}>
        <GoBackButton
          buttonText={TEXT.backButtonText}
          to='/home'
        />
        <Stack width={'100%'} alignItems={'center'} mb={3}>
          <img src={me} alt="" width={'250rem'} height={'250rem'} style={{borderRadius: '100%'}}/>
        </Stack>
        <Paragraph
          about={ABOUT}
        />
      </Box>
    </Stack>
  )
}

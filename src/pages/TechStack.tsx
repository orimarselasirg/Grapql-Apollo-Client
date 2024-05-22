import { Box, Stack } from '@mui/material'
import { Paragraph } from '../components/Paragraph'
import { TECH_STACK, TEXT } from '../utils/contans'
import { GoBackButton } from '../components/GoBackButton'

export const TechStack = () => {
  return (
    <Stack>
      <Box width={'50%'} alignSelf={'center'} p={5} bgcolor={'white'} borderRadius={1} textAlign={'justify'}>
        <GoBackButton
          buttonText={TEXT.backButtonText}
          to='/home'
        />
        <Paragraph
          about={TECH_STACK}
        />
      </Box>
    </Stack>
  )
}

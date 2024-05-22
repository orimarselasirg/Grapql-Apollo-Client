import { CharacterCard } from '../components/characterCard'
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../api/queries/queries';
import { Container, Pagination, Stack } from '@mui/material';
import HideAppBar from '../components/Appbar';
import { Loading } from '../components/Loading';
import { useState } from 'react';

export const CharacterList = () => {

  interface Props {
    image: string;
    name: string;
    gender: string;
    id: string;
  }

  const [page, setPage] = useState<number>(1)
  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log('event', event)
    setPage(page)
  }
  const {loading, data} = useQuery(GET_ALL_CHARACTERS, {variables: {page: page}})

  return (
    <Container maxWidth="xl" sx={{display: 'flex', alignItems: 'center', alignContent: 'center', marginTop: 10, marginBottom: 10}}>
      <HideAppBar
        children={<div></div>}
      />
      {
        <>
          <Loading
            loading={loading}
          />
          <Stack direction={'row'} spacing={3} gap={6} useFlexGap flexWrap="wrap">
            {
              data?.characters?.results && data?.characters?.results?.map((character: Props) => (
                <CharacterCard
                  key={character.id}
                  genre={character.gender}
                  id={character.id}
                  image={character.image}
                  name={character.name}
                />
              )) 
            }
          <Stack width={'100%'} alignItems={'center'}>
            <Pagination 
              count={data?.characters?.info?.pages}
              page={page}
              onChange={onPageChange}
            />
          </Stack>
          </Stack>
        </>
      }
    </Container>
  )
}

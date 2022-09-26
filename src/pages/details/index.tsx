import { Box, Stack } from '@chakra-ui/react';
import Background from '../../assets/background.svg';
import DetailsContent from '../../components/details/detailsContent';
import FigureContent from '../../components/details/figureContent';
import Head from '../../components/details/header';
import { NasaFile } from '../../types/nasaFile';
import { ImageBackground } from '../home/styles';
import { Content } from './styles';

function Details() {
  const file: NasaFile = {
    id: 'apollo',
    name: 'Apollo taking off',
    src: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1308&q=80',
    timestamp: '2021-04-21T00:00:00Z'
  };
  const createdBy = 'NASA';
  const description = 'description text';

  return (
    <Content>
      <ImageBackground src={Background} alt="Background" />
      <Stack spacing={8}>
        <Head />;
        <Content>
          <Box w="full" px={8}>
            <Stack spacing={6} maxW="4xl" mx="auto">
              <FigureContent />
              <DetailsContent />
            </Stack>
          </Box>
        </Content>
      </Stack>
    </Content>
  );
}

export default Details;

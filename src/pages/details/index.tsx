import { Box, Stack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Background from '../../assets/background.svg';
import DetailsContent from '../../components/details/detailsContent';
import FigureContent from '../../components/details/figureContent';
import Head from '../../components/details/header';
import { Content, ImageBackground } from './styles';

function Details() {
  const {
    state: {
      data: { data, links }
    }
  } = useLocation();

  return (
    <Content>
      <ImageBackground src={Background} alt="Background" />
      <Stack spacing={8}>
        <Head data={data} />;
        <Content>
          <Box w="full" px={8}>
            <Stack spacing={6} maxW="4xl" mx="auto">
              <FigureContent imgSrc={links[0].href} />
              <DetailsContent data={data} />
            </Stack>
          </Box>
        </Content>
      </Stack>
    </Content>
  );
}

export default Details;

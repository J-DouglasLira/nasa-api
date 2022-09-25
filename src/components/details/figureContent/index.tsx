import { Box, Center, Image, Stack } from '@chakra-ui/react';
import { NasaFile } from '../../../types/nasaFile';
import { Content } from './styles';

const FigureContent = () => {
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
      {/* Content */}
      <Box w="full" px={8}>
        <Stack spacing={6} maxW="4xl" mx="auto">
          <Center p="20">
            <Box rounded="lg" overflow="hidden" boxSize="full">
              <Image src={file.src} alt="Filename" boxSize="max-content" objectFit="cover" />
            </Box>
          </Center>
        </Stack>
      </Box>
    </Content>
  );
};

export default FigureContent;

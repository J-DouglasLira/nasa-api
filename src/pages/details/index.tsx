import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';
import Background from '../../assets/background.svg';
import { NasaFile } from '../../types/nasaFile';
import { ImageBackground } from '../home/styles';
import { Content, Header, Information } from './styles';

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
        <Header>
          <HStack px={8} borderBottomWidth="1px">
            <HStack flex={1}>
              <Stack spacing={0} flex={1}>
                <Heading fontWeight="medium" fontSize="sm" color="#ffffff">
                  {file.name}
                </Heading>
                <Text fontWeight="medium" fontSize="sm" color="#ffffff">
                  185 MB · 14 minutes ago
                </Text>
              </Stack>
            </HStack>
            <Flex direction="row">
              <Button
                alignSelf="center"
                variant="primary"
                //leadingIcon={<DownloadIconSolid />}
              >
                Download
              </Button>
              <Flex align="center" borderLeftWidth="1px" ml={8} h={16}>
                <IconButton
                  onClick={() => {
                    console.log('this');
                  }}
                  aria-label="Close"
                  variant="ghost"
                  isRound={true}
                  //icon={<XIconOutline boxSize={6} />}
                  size="sm"
                  boxSize={8}
                  p={1}
                  ml={6}
                >
                  Close
                </IconButton>
              </Flex>
            </Flex>
          </HStack>
        </Header>
        ;
        <Content>
          {/* Content */}
          <Box w="full" px={8}>
            <Stack spacing={6} maxW="4xl" mx="auto">
              <Center p="20">
                <Box rounded="lg" overflow="hidden" boxSize="full">
                  <Image src={file.src} alt="Filename" boxSize="max-content" objectFit="cover" />
                </Box>
              </Center>

              <Stack spacing={2}>
                <Box rounded="lg" overflow="hidden" boxSize="full">
                  <Information>
                    <Heading fontSize="md" fontWeight="medium">
                      Information
                    </Heading>
                    <Box as="dl">
                      <Divider />
                      <HStack justify="space-between" fontSize="sm" fontWeight="medium" py={3}>
                        <Text as="dt" variant="supporting">
                          Created by
                        </Text>
                        <Box as="dd">{createdBy}</Box>
                      </HStack>
                      <Divider />
                      <HStack justify="space-between" fontSize="sm" fontWeight="medium" py={3}>
                        <Text as="dt" variant="supporting">
                          Date created
                        </Text>
                        <Box as="dd">teste</Box>
                      </HStack>
                    </Box>
                  </Information>
                </Box>
              </Stack>

              <Stack spacing={2}>
                <Information>
                  <Heading fontSize="md" fontWeight="medium">
                    Description
                  </Heading>
                  <Text fontSize="sm">{description}</Text>
                </Information>
              </Stack>
            </Stack>
          </Box>
        </Content>
      </Stack>
    </Content>
  );
}

export default Details;

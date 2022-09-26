import { Button, Flex, Heading, HStack, IconButton, Stack, Text } from '@chakra-ui/react';
import { Header } from '../../../pages/details/styles';
import { NasaFile } from '../../../types/nasaFile';

const Head = () => {
  const file: NasaFile = {
    id: 'apollo',
    name: 'Apollo taking off',
    src: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1308&q=80',
    timestamp: '2021-04-21T00:00:00Z'
  };
  const createdBy = 'NASA';
  const description = 'description text';
  return (
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
            variant="primary" //leadingIcon={<DownloadIconSolid />}
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
              isRound={true} //icon={<XIconOutline boxSize={6} />}
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
  );
};

export default Head;

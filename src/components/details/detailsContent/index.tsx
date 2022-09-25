import { Box, Stack, Text } from '@chakra-ui/react';
import { NasaFile } from '../../../types/nasaFile';
import { Information } from "./styles"

const DetailsContent = () => {

  const file: NasaFile = {
    id: 'apollo',
    name: 'Apollo taking off',
    src: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1308&q=80',
    timestamp: '2021-04-21T00:00:00Z'
  };
  const createdBy = 'NASA';
  const description = 'description text';
  return (
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
  </Stack>)
}

export default DetailsContent;
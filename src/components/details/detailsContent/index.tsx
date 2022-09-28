import { Box, Divider, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { Information } from './styles';

const DetailsContent = () => {
  return (
    <>
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
                <Box as="dd">createdBy</Box>
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
          <Text fontSize="sm">description</Text>
        </Information>
      </Stack>
    </>
  );
};

export default DetailsContent;

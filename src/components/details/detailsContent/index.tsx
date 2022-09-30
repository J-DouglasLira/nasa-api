import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import { IAPI } from '../../../interfaces/IAPI';
import { Information } from './styles';

const DetailsContent = ({ data }: IAPI.IItem) => {
  return (
    <>
      <Information>
        <Heading fontSize="md" fontWeight="medium">
          More information
        </Heading>
      </Information>
      <Information>
        <HStack pt={24} justify="space-between">
          <Text as="dt" variant="supporting" pr={12}>
            Created by:
          </Text>
          <Text> NASA or National Aeronautics and Space Administration</Text>
        </HStack>
      </Information>
      <Information>
        <HStack pt={24} justify="space-between">
          <Text as="dd" pr={12}>
            Date created:
          </Text>

          <Text as="dt" variant="supporting">
            asdfas
          </Text>
        </HStack>
      </Information>
      <Information>
        <Box pt={24}>
          <Heading fontSize="md" fontWeight="medium">
            Description
          </Heading>
        </Box>
        <Text fontSize="sm" p={20} pl={0}>
          {data[0].description}
        </Text>
      </Information>
    </>
  );
};

export default DetailsContent;

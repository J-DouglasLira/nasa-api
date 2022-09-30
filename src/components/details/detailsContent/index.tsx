import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import { IAPI } from '../../../interfaces/IAPI';
import { InfoUnavailable } from './InfoUnavailable';
import { Information } from './styles';

const DetailsContent = ({ data }: IAPI.IItem) => {
  return (
    <>
      <Information>
        <Heading fontSize="md" fontWeight="medium">
          More information
        </Heading>
      </Information>
      {data[0]?.location ? (
        <Information>
          <HStack pt={24} justify="space-between">
            <Text as="dd" pr={12}>
              Location
            </Text>
            <Text as="dt" variant="supporting">
              {data[0].location}
            </Text>
          </HStack>
        </Information>
      ) : (
        <InfoUnavailable text={'Location'} />
      )}
      {data[0]?.photographer ? (
        <Information>
          <HStack pt={24} justify="space-between">
            <Text as="dt" variant="supporting" pr={12}>
              Created by:
            </Text>
            <Text>{data[0].photographer}</Text>
          </HStack>
        </Information>
      ) : (
        <InfoUnavailable text={'Created by'} />
      )}
      {data[0]?.date_created ? (
        <Information>
          <HStack pt={24} justify="space-between">
            <Text as="dd" pr={12}>
              Date created:
            </Text>
            <Text as="dt" variant="supporting">
              {data[0]?.date_created}
            </Text>
          </HStack>
        </Information>
      ) : (
        <InfoUnavailable text={'Date created:'} />
      )}

      <Information>
        <HStack pt={24} justify="space-between">
          <Text as="dd" pr={12}>
            Keywords
          </Text>
          <Text as="dt" variant="supporting">
            {data[0].keywords.join('-')}
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

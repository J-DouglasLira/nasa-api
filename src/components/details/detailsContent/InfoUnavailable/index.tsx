import { HStack, Text } from '@chakra-ui/react';
import { Information } from '../styles';

type Props = {
  text: string;
};

export const InfoUnavailable = ({ text }: Props) => {
  return (
    <>
      <Information>
        <HStack pt={24} justify="space-between">
          <Text as="dt" variant="supporting" pr={12}>
            {text}
          </Text>
          <Text>Not provided</Text>
        </HStack>
      </Information>
    </>
  );
};

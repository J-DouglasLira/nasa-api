import { Flex, Heading, HStack, Stack } from '@chakra-ui/react';
import { IAPI } from '../../../interfaces/IAPI';

import { Btn, Header } from './styles';

const Head = ({ data }: IAPI.IItem) => {
  return (
    <Header>
      <HStack px={8} borderBottomWidth="1px">
        <HStack flex={1}>
          <Stack spacing={0} flex={1}>
            <Heading fontWeight="medium" fontSize="sm" color="#ffffff">
              {data[0].title}
            </Heading>
          </Stack>
        </HStack>
        <Flex direction="column-reverse">
          <Btn
            onClick={() => {
              window.location.href = '/';
            }}
          >
            <div className="wrapper">
              <a href="#">
                <span>Get Back</span>
              </a>
            </div>
          </Btn>
          <Flex align="center" borderLeftWidth="1px" ml={8} h={16}></Flex>
        </Flex>
      </HStack>
    </Header>
  );
};

export default Head;

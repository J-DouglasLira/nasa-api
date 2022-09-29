import { Flex, Heading, HStack, Stack } from '@chakra-ui/react';
import { Header } from '../../../pages/details/styles';
import { Btn } from './styles';

type Props = {
  data: [
    {
      center: string;
      date_created: string;
      description: string;
      keywords: [string];
      location: string;
      media_type: string;
      nasa_id: string;
      photographer: string;
      title: string;
    }
  ];
};

const Head = ({ data }: Props) => {
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
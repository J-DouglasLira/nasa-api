import { Center, Heading } from '@chakra-ui/react';
import { IAPI } from '../../../interfaces/IAPI';

import { Btn } from './styles';

const Head = ({ data }: IAPI.IItem) => {
  return (
    <>
      <Btn
        onClick={() => {
          window.location.href = '/';
        }}
      >
        <div>
          <a href="#">
            <span>Back</span>
          </a>
        </div>
      </Btn>
      <Center>
        <Heading fontWeight="medium" fontSize="sm" color="#ffffff" pl={30} pt={28}>
          {data[0].title}
        </Heading>
      </Center>
    </>
  );
};

export default Head;

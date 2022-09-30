import { Box, Center, Image } from '@chakra-ui/react';

type Props = {
  imgSrc: string;
};

const FigureContent = ({ imgSrc }: Props) => {
  return (
    <Center p="20">
      <Box rounded="lg" overflow="hidden" boxSize="full">
        <Image src={imgSrc} alt="Filename" boxSize="min-width: 400px" objectFit="cover" />
      </Box>
    </Center>
  );
};

export default FigureContent;

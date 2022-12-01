import React from 'react';
import { Box, SkeletonText } from '@chakra-ui/react';
const EvenSkeleton = () => {
  return (
    <Box
      p="3"
      border="2px solid"
      borderRadius="10px"
      borderColor="brand.100"
      cursor="pointer"
    >
      <SkeletonText />
    </Box>
  );
};

export default EvenSkeleton;

import { Box, Skeleton } from '@radix-ui/themes';
import React from 'react';

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl ">
      <Skeleton className="mb-5" height="2rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default IssueFormSkeleton;

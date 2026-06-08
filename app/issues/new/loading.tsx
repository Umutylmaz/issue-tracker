import { Box, Skeleton } from '@radix-ui/themes';

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl ">
      <Skeleton className="mb-5" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default LoadingNewIssuePage;

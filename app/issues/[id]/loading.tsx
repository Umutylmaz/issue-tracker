import { Box, Card, Flex, Skeleton } from '@radix-ui/themes';

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton width="12rem" />
      <Flex gap="1" my="3">
        <Skeleton width="3rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose space-y-2" mt="4">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;

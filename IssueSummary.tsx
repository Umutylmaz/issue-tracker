import { Status } from '@prisma/client';
import { Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

interface Props {
  statusCount: { open: number; inProgress: number; closed: number };
}

const IssueSummary = ({ statusCount }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: 'Open Issues', value: statusCount.open, status: 'OPEN' },
    {
      label: 'In-progress Issues',
      value: statusCount.inProgress,
      status: 'IN_PROGRESS',
    },
    { label: 'Closed Issues', value: statusCount.closed, status: 'CLOSED' },
  ];

  return (
    <Flex direction="row" gap="4">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            <Link
              className="text-sm font-medium"
              href={`issues/?status=${container.status}`}
            >
              {container.label}
            </Link>
            <Text size="5" className="font-bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;

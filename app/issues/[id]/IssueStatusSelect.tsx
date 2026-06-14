'use client';
import { Issue, Status } from '@prisma/client';
import { Flex, Select, Text } from '@radix-ui/themes';
import { patchIssue } from '@/app/services/issueService';

const IssueStatusSelect = ({ issue }: { issue: Issue }) => {
  return (
    <>
      {' '}
      <Flex
        gap="2"
        style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}
        align="center"
      >
        <Text weight="bold" color="bronze">
          Status:
        </Text>
        <Select.Root
          defaultValue={issue.status}
          onValueChange={(status) => {
            patchIssue(issue.id, { status });
          }}
        >
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Label>Status</Select.Label>
              {Object.values(Status).map((status) => (
                <Select.Item value={status} key={status}>
                  {status}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Flex>
    </>
  );
};

export default IssueStatusSelect;

'use client';
import { Issue, Status } from '@prisma/client';
import { Flex, Select, Text } from '@radix-ui/themes';
import axios from 'axios';
import toast from 'react-hot-toast';

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
            axios
              .patch('/api/issues/' + issue.id, { status })
              .then(() => toast.success('Changes saved successfully'))
              .catch(() => {
                toast.error('Changes could not be saved.');
              });
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

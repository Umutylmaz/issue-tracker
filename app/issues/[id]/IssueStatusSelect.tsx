'use client';
import { Issue, Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import axios from 'axios';

const IssueStatusSelect = ({ issue }: { issue: Issue }) => {
  return (
    <Select.Root
      defaultValue={issue.status}
      onValueChange={(status) => {
        axios.patch('/api/issues/' + issue.id, { status });
      }}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Status</Select.Label>
          {Object.values(Status).map((s) => (
            <Select.Item value={s} key={s}>
              {s}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusSelect;

'use client';
import { Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';

const IssueStatusSelect = ({ status }: { status: Status }) => {
  return (
    <Select.Root defaultValue={status}>
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

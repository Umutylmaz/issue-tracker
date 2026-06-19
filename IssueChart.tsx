'use client';
import { Card } from '@radix-ui/themes';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from 'recharts';
interface Props {
  statusCount: { open: number; inProgress: number; closed: number };
}

const IssueChart = ({ statusCount }: Props) => {
  const data = [
    { label: 'Open', value: statusCount.open },
    { label: 'In Progress', value: statusCount.inProgress },
    { label: 'Closed', value: statusCount.closed },
  ];
  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize="60"
            style={{ fill: 'var(--accent-9)' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;

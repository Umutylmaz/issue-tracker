'use client';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons';
import { Button, Flex, Text } from '@radix-ui/themes';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;
  const [onPage, setOnPage] = useState(currentPage);

  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {onPage} of {pageCount}
      </Text>
      <Button
        onClick={() => {
          setOnPage(1);
        }}
        color="gray"
        variant="soft"
        disabled={onPage === 1}
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        onClick={() => {
          setOnPage(onPage - 1);
        }}
        color="gray"
        variant="soft"
        disabled={onPage === 1}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        onClick={() => {
          setOnPage(onPage + 1);
        }}
        color="gray"
        variant="soft"
        disabled={onPage === pageCount}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        onClick={() => {
          setOnPage(pageCount);
        }}
        color="gray"
        variant="soft"
        disabled={onPage === pageCount}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;

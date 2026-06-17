import Pagination from './components/Pagination';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const resolvedParams = await searchParams;
  return (
    <Pagination
      itemCount={20}
      pageSize={1}
      currentPage={parseInt(resolvedParams.page) || 1}
    ></Pagination>
  );
}

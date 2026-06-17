import Pagination from './components/Pagination';

export default function Home() {
  return <Pagination itemCount={20} pageSize={1} currentPage={1}></Pagination>;
}

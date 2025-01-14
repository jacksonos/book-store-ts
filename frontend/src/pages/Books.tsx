import { Link } from 'react-router-dom';
import { CirclePlus } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import BookTable from '@/components/BookTable';
const Books = () => {
  return (
    <div className='container max-w-2xl mx-auto'>
      <h1 className='font-semibold text-3xl text-center my-4'>Books</h1>
      <div className='flex justify-between'>
        <ModeToggle></ModeToggle>
        <Link to='/add-order'>
          <Button>
            <CirclePlus /> Add Book
          </Button>
        </Link>
      </div>
      <BookTable />
    </div>
  );
};

export default Books;

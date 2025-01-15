import { CirclePlus } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import BookTable from '@/components/BookTable';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import DocumentTitles from '@/services/DocumentTitle';

const Books: FC = () => {
  // Dynamic title for the page
  DocumentTitles({ title: 'Book Store 📙' });
  return (
    <div className='container mx-auto'>
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

import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AddEditForm from '@/components/AddEditForm';

import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditAddBook: FC = () => {
  // Get the id from the URL.
  const { id } = useParams();

  return (
    <div className='max-w-screen-lg mx-auto'>
      <div className='flex justify-start items-center my-4'>
        <Link to='/' className='mr-2'>
          <Button variant={'secondary'} size='icon'>
            <ChevronLeft />
          </Button>
        </Link>
        <h1 className='text-2xl font-semibold'>{id ? 'Edit' : 'Add'}</h1>
      </div>
      <AddEditForm bookId={id} />
    </div>
  );
};

export default EditAddBook;

import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AddEditForm from '@/components/AddEditForm';
import { Link } from 'react-router-dom';

const EditAddBook: React.FC = () => {
  return (
    <div className='container max-w-2xl mx-auto'>
      <div className='flex justify-start items-center my-4'>
        <Link to='/' className='mr-2'>
          <Button variant={'outline'} size='icon'>
            <ChevronLeft />
          </Button>
        </Link>
        <h1 className='text-2xl font-semibold'>Add a Book</h1>
      </div>
      <AddEditForm />
    </div>
  );
};

export default EditAddBook;

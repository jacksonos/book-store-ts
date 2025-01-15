import { FC, useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

import { Progress } from '@/components/ui/progress';

import { deleteBook, getBooks } from '@/services/bookService';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { AlertCircle, Eye, Pencil, Trash } from 'lucide-react';
import { Button } from './ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import { Link } from 'react-router-dom';
import { Toaster } from './ui/toaster';
import { useToast } from '@/hooks/use-toast';

interface Book {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  description: string;
}

const BookTable: FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        incrementProgress();
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setProgress(100);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((book) => book._id !== id));
      toast({
        title: 'Success! Book Deleted ✅',
        description: 'The book was deleted successfully from the database.',
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
      toast({
        title: "Uh oh! Something went wrong 🛑",
        description: 'Error deleting book.',
        variant: 'destructive',
      });
    }
  };

  const incrementProgress = () => {
    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);
      if (value >= 100) {
        clearInterval(interval);
      }
    }, 950); // Adjust the interval time as needed
  };

  return (
    <>
      <Table className='overflow-x-auto caption-bottom my-5'>
        <TableCaption>
          {error ? (
            <Alert variant='destructive' className='w-3/6'>
              <AlertCircle className='h-4 w-4' />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error}. Please try again later.
              </AlertDescription>
            </Alert>
          ) : (
            'A list of your recent books.'
          )}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Publish Year</TableHead>
            <TableHead className='text-right w-36'>Options</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading && (
            <TableRow className='animate-pulse'>
              <TableCell colSpan={5}>
                <Progress value={progress} className='mx-auto w-3/4 my-3' />
              </TableCell>
            </TableRow>
          )}
          {books.map((book, index) => (
            <TableRow key={book._id} className=''>
              <TableCell className='font-medium'>{index + 1}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.publishYear}</TableCell>
              <TableCell className='text-right space-x-1.5'>
                <Link to={`/add-order/${book._id}`}>
                  <Button variant='default' size='icon'>
                    <Pencil />
                  </Button>
                </Link>
                <Button variant='outline' size='icon'>
                  <Eye />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant='destructive' size='icon'>
                      <Trash />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete{' '}
                        <span className='font-semibold'>{book.title}</span> book
                        and remove its data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(book._id)}>
                        Yes, delete it
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
          <Toaster />
        </TableBody>
      </Table>
    </>
  );
};

export default BookTable;

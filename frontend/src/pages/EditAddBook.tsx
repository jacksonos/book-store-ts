import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createBook, getBookById, updateBook } from '@/services/bookService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

// Define a form schema using Zod.
const formSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: 'Title must be at least 1 character.',
    })
    .max(50, {
      message: 'Title must be at most 50 characters.',
    }),

  author: z
    .string()
    .min(8, {
      message: 'Author must be at least 8 character.',
    })
    .max(50, {
      message: 'Author must be at most 50 characters.',
    }),

  publishYear: z.coerce
    .number({
      required_error: 'Publish year is required.',
      invalid_type_error: 'Publish year must be a number.',
    })
    .positive()
    .finite(),

  description: z
    .string()
    .min(20, {
      message: 'Description must be at least 20 characters.',
    })
    .max(200, {
      message: 'Description must be at most 200 characters.',
    }),
});

const EditAddBook: React.FC = () => {
  // Get the id from the URL.
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch the book data.
  useEffect(() => {
    if (id) {
      getBookById(id).then((book) => {
        form.reset(book);
      });
    }
  }, [id]);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '', // Default value for string.
      author: '', // Default value for string.
      publishYear: 0, // Default value for number.
      description: '', // Default value for string.
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (id) {
      // Update the book.
      updateBook(id, values);
    } else {
      // Add the book.
      createBook(values);
    }
    navigate('/');
    console.log(values);
  }

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

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='Type a title' {...field} />
                </FormControl>
                <FormDescription>
                  The title of the book you want to add.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='grid grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name='author'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder='Type the author' {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='publishYear'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Publish Year</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormDescription>
                    The year the book was published.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    className='text-wrap'
                    placeholder='The book discusses about...'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  It can be empty if you don't want to provide a description.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default EditAddBook;

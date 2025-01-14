import { FC, useEffect } from 'react';
import { z } from 'zod';

// UI Components
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { createBook, getBookById, updateBook } from '@/services/bookService';
import DocumentTitle from '@/services/DocumentTitle';

// Form schema validation using Zod.
const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Tile must be at least one character.' })
    .max(60)
    .trim(),
  author: z
    .string()
    .min(8, {
      message: 'Author must be at least 8 characters.',
    })
    .max(50)
    .trim(),
  publishYear: z.coerce
    .number({
      required_error: 'Publish year is required',
      invalid_type_error: 'Publish year must be a number',
    })
    .positive()
    .finite(),
  description: z
    .string()
    .min(20, { message: 'Description must be at least 20 characters.' })
    .max(200, { message: 'Description must be at most 200 characters.' })
    .trim(),
});

interface AddEditFormProps {
  bookId?: string;
}

const AddEditForm: FC<AddEditFormProps> = ({ bookId }) => {
  // Navigate to the home page.
  const navigate = useNavigate();
  // Change the title
  if (bookId) {
    DocumentTitle({ title: 'Book Store 📙 - Edit' });
  } else {
    DocumentTitle({ title: 'Book Store 📙 - New book' });
  }

  // Fetch the book data.
  useEffect(() => { 
    if (bookId) {
      getBookById(bookId).then((book) => {
        form.reset(book);
      });
    }
  }, [bookId]);

  // Form definited.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      author: '',
      publishYear: 0,
      description: '',
    },
  });

  // Submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (bookId) {
      updateBook(bookId, values);
    } else {
      createBook(values);
    }
    navigate('/');
  }

  return (
    <div>
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

export default AddEditForm;

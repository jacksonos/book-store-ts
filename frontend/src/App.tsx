import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './components/theme-provider';
import EditAddBook from './pages/EditAddBook';
import Books from './pages/Books';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/add-order' element={<EditAddBook />} />
        <Route path='/add-order/:id' element={<EditAddBook />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

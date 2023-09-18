import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Loading from '../components/Loading';
import Booktable from '../components/Booktable'
import Bookcard from '../components/Bookcard'
import Footer from './Footer';
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Start with loading true
  const [showType, setShowType] = useState('table');
  useEffect(() => {
    axios
      .get('http://localhost:8000/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <><div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-center items-center gap-x-4'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Loading />
      ) :
        showType === 'table' ? (
          <Booktable books={books} />
        ) : (
          <Bookcard books={books} />
        )}
    </div><Footer /></>
  );
};

export default Home;

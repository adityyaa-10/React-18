import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { booksdetails } from './Books'

const BookList = () => {
  const getBook = (id) => {
    const book = booksdetails.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <section className='booklist'>
      <div>
        <EventExamples />
      </div>
      {booksdetails.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  );
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* add button with type='submit' */}
        <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};


const Book = (props) => {
  const { image, title, author, getBook, id } = props;
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className='book'>
      <img
        src={image}
        alt={title}
      />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>Click to see Title</button>
      <h4>{author}</h4>
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
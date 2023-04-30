import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { booksdetails } from './Books'

const BookList = () => {
  return (
    <section className='booklist'>
      <div>
        <EventExamples />
      </div>
      {booksdetails.map((book) => {
        return <div>
          <Book {...book} key={book.id} />
        </div>
      })}
    </section>
  );
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('Handle Form Input');
  };
  const handleButtonClick = () => {
    alert('Handle Button Click')
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('Form Submitted Successfully')
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button type='submit' onClick={handleButtonClick}>Click Me</button>
    </section>
  );
}


const Book = (props) => {
  const displayTitle = () => {
    console.log(title)
  }
  const { image, title, author } = props;
  return (
    <article className='book'>
      <img
        src={image}
        alt={title}
      />
      <h2>{title}</h2>
      <button onClick={displayTitle}>Click to see Title</button>
      <h4>{author}</h4>
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
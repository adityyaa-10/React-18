import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { firstBook, secondBook, thirdBook, fourthBook, fifthBook, sixthBook } from './Books'


//  const firstBook = {
//   image: "https://m.media-amazon.com/images/I/51eDMGwZVvL._SX330_BO1,204,203,200_.jpg",
//   title: "I Will Teach You to Be Rich",
//   author: "Ramit Sethi",
// }
//  const secondBook = {
//   image: "https://m.media-amazon.com/images/I/41T-XHe8-EL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
//   title: "The Body Keeps the Score",
//   author: "Bessel van der Kolk M.D.",
// }
//  const thirdBook = {
//   image: "https://m.media-amazon.com/images/I/41N62t+ANTL._SX331_BO1,204,203,200_.jpg",
//   title: "The Mountain Is You",
//   author: "Brianna Wiest",
// }
//  const fourthBook = {
//   image: "https://m.media-amazon.com/images/I/51QZyQzA83L._SX327_BO1,204,203,200_.jpg",
//   title: "The Wager",
//   author: "David Grann",
// }
//  const fifthBook = {
//   image: "https://m.media-amazon.com/images/I/41ZLnc34EiL._SX332_BO1,204,203,200_.jpg",
//   title: "Verity",
//   author: "Colleen Hoover",
// }
//  const sixthBook = {
//   image: "https://m.media-amazon.com/images/I/511zwchU0oL._SX327_BO1,204,203,200_.jpg",
//   title: "You Can't Joke About That",
//   author: "Kat Timpf"
// }

const BookList = () => {
  return (
    <section className='booklist'>
      <Book image={firstBook.image} title={firstBook.title} author={firstBook.author} />
      <Book image={secondBook.image} title={secondBook.title} author={secondBook.author} />
      <Book image={thirdBook.image} title={thirdBook.title} author={thirdBook.author} />
      <Book image={fourthBook.image} title={fourthBook.title} author={fourthBook.author} />
      <Book image={fifthBook.image} title={fifthBook.title} author={fifthBook.author} />
      <Book image={sixthBook.image} title={sixthBook.title} author={sixthBook.author} />
    </section>
  );
}

const Book = (props) => {
  const { image, title, author } = props;
  return (
    <article className='book'>
      <img
        src={image}
        alt={title}
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
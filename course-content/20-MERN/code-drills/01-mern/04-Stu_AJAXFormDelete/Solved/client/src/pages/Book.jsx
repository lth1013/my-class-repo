import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/API';

const Book = () => {
	let { id } = useParams();
	const [book, setBook] = useState({
		title: '',
		author: '',
		synopsis: '',
	});

	useEffect(() => {
		const getBook = async () => {
			const book = await API.getBook(id);
			setBook({ ...book.data });
		};
		getBook();
	}, []);

	return (
		<div>
      <br/>
      <br/>
			<div className='container'>
				<div><b>Book Title:</b> {book.title}</div>
				<div><b>Book Author:</b> {book.author}</div>
				<div><b>Book Synopsis:</b> {book.synopsis}</div>
			</div>
		</div>
	);
};

export default Book;

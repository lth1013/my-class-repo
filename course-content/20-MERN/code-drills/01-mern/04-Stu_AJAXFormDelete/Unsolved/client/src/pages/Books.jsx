import { useEffect, useState } from 'react';
import{Link} from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import DeleteBtn from '../components/DeleteBtn';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';

function Books() {
	// Setting our component's initial state
	const [books, setBooks] = useState([]);
	
	// update the initial state to provide values for
  // the controls in the form (use empty strings)
	const [formObject, setFormObject] = useState();

	// Load all books and store them with setBooks
	useEffect(() => {
		loadBooks();
	}, []);

	
	// Loads all books and sets them to books
	function loadBooks() {
		API.getBooks()
		.then((res) => setBooks(res.data))
		.catch((err) => console.log(err));
	}
	
	// handle form input change
	const handleInputChange = () => {
		// add code to control the components here
	};
	// handle saving book
	const handleSaveBook = () => {
		// add code here to post a new book to the api
	};
  
  // handle delete book
  const handleDeleteBook = (e) => {
   // add code here to remove a book using API
  }

	return (
		<Container fluid>
			<Row>
				<Col size="md-6">
					<Jumbotron>
						<h1>What Books Should I Read?</h1>
					</Jumbotron>
					<form>
						<Input
							onChange={handleInputChange}
							name="title"
							placeholder="Title (required)"
						/>
						<Input
							onChange={handleInputChange}
							name="author"
							placeholder="Author (required)"
						/>
						<TextArea
							onChange={handleInputChange}
							name="synopsis"
							placeholder="Synopsis (Optional)"
						/>
						<FormBtn
							disabled={!(formObject.author && formObject.title)}
							onClick={handleSaveBook}
						>
							Submit Book
						</FormBtn>
					</form>
				</Col>
				<Col size="md-6 sm-12">
					<Jumbotron>
						<h1>Books On My List</h1>
					</Jumbotron>
					{books.length ? (
						<List>
							{books.map((book) => {
								return (
									<ListItem key={book._id}>
										<Link to={`/books/${book._id}`}>
											<strong >
												{book.title} by {book.author}
											</strong>
										</Link>
										<DeleteBtn onClick={() => deleteBook(book._id)} />
									</ListItem>
								);
							})}
						</List>
					) : (
						<h3>No Results to Display</h3>
					)}
				</Col>
			</Row>
		</Container>
	);
}

export default Books;

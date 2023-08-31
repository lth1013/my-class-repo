import { useEffect, useState } from 'react';
// import{useNavigate} from 'react-router-dom';
import{Link} from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import DeleteBtn from '../components/DeleteBtn';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';

function Books() {
	// let navigate = useNavigate();
	// Setting our component's initial state
	const [books, setBooks] = useState([]);
	const [formObject, setFormObject] = useState({
		title: '',
		author: '',
		synopsis: '',
	});

	// Load all books and store them with setBooks
	useEffect(() => {
		loadBooks();
	}, []);

	// handle form input change
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	};

	// Loads all books and sets them to books
	// TODO: add code so that when the component mounts, it performs an Axios request to retrieve all of the books in the database.
	function loadBooks() {
		
	}

	// handle saving book
	const handleSaveBook = (e) => {
		e.preventDefault();
		if (formObject.author && formObject.title) {
			API.saveBook(formObject)
				.then(() => {
					setFormObject({
						title: '',
						author: '',
						synopsis: '',
					});
					loadBooks();
				})
				.catch((err) => console.log(err));
		}
	};
  
  // handle delete book
  const handleDeleteBook = (e) => {
    e.preventDefault();
    const id = e.target.attributes[1].value;
    API.deleteBook(id).then(() => loadBooks())
    .catch((err) => console.log(err));
    
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
											{/* <strong onClick={()=>{navigate(`/books/${book._id}`)}}> */}
												{book.title} by {book.author}
											</strong>
										</Link>
										<DeleteBtn value={book._id} onClick={handleDeleteBook} />
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

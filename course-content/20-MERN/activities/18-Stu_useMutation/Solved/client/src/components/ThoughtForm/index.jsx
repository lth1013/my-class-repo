import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS } from '../../utils/queries';

const ThoughtForm = () => {
  const [formState, setFormState] = useState({
    thoughtText: '',
    thoughtAuthor: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  // Set up the mutation with error handling support.
  // The useMutation hook allows providing the refetchQueries option to refetch specific queries after a mutation
  // This is useful to ensure that new data is displayed automatically. Otherwise, we would need to manually update the list at a higher component level, modify state, or implement custom caching behavior
  // 🔑 Then, we set up our useMutation Hook to apply our mutation. We also add error handling.
  // 🔑 When utilizing the useMutation hook, we can leverage the refetchQueries property provided as the second argument. By passing an array containing the query code and the name of the query, we can specify which query should be re-executed on each mutation execution.
  const [addThought, { error }] = useMutation
  (ADD_THOUGHT, {
    // https://www.apollographql.com/docs/react/data/refetching/
    // Apollo Client allows you to make local modifications to your GraphQL data by updating the cache, but sometimes it's more straightforward to update your client-side GraphQL data by refetching queries from the server.
    refetchQueries: [
      QUERY_THOUGHTS,
      'getThoughts'
    ]
  });


  // const [addThought, { error }] = useMutation(ADD_THOUGHT, {
  //   // All returning data from Apollo Client queries/mutations return in a `data` field, followed by the the data returned by the request
  //   update(cache, { data: { addThought } }) {
  //     try {
  //       const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
  //       //  🔑 We use .writeQuery() to update the data on the cache and keep the cache in sync with our back end:
  //       cache.writeQuery({
  //         query: QUERY_THOUGHTS,
  //          // If we want new data to show up before or after existing data, adjust the order of this array
  //         // Next, we combine the data from the newly executed mutation function with the data we retrieved from the cache and store the results in our data property:
  //         // All subscribers to the Apollo Client cache (including all active queries) see this change and update your application's UI accordingly.
  //         data: { thoughts: [addThought, ...thoughts] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Perform the mutation and pass the form data object as arguments when the form is submitted.
    // Make sure that the object fields match the defined parameters in the ADD_THOUGHT mutation.
    try {
      const { data } = addThought({
        variables: { ...formState },
      });

      // Instead of refreshing the page, the query dispatched at the src/pages/Home.jsx level is refetched, allowing the updated data to be passed down to the ThoughtList component for display. Then, we can directly clear the form state.
      setCharacterCount(0);
      setFormState({
        thoughtText: '',
        thoughtAuthor: ''
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'thoughtText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="thoughtText"
            placeholder="Here's a new thought..."
            value={formState.thoughtText}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="thoughtAuthor"
            placeholder="Add your name to get credit for the thought..."
            value={formState.thoughtAuthor}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Thought
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ThoughtForm;

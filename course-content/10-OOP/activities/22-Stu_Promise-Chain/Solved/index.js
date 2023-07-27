// Import readFile and writeFile from the fs/promises module. The fs/promises module exports methods that return
// promises for common file system tasks.
const { readFile, writeFile } = require('fs/promises');
const BlogPost = require('./lib/blogPost');

// First, call readFile to asynchronously read the data from data/post.json.
readFile('./data/post.json', 'utf-8')
  .then((json) => {
    const blogData = JSON.parse(json);
    // Use BlogPost to generate the html
    const post = new BlogPost(
      blogData.title,
      blogData.text,
      blogData.author,
      blogData.createdOn
    );
    // /**
    //  * OR
    //  * 
    //  * const { title, text, author, createdOn } = JSON.parse(json);
    //  * const post = new BlogPost(title, text, author, createdOn);
    //  */
    const html = post.render();

    // Use return with the writeFile method which returns a promise so that another .then() can be chained that will
    // wait for writeFile to resolve.
    return writeFile('./dist/post.html', html);
  })
  .then(() => {
    // This function will only run after the asynchronous call to writeFile has resolved.
    console.log('Created post.html');
  });










  // BONUS:
  //
  // Promise.all attempts to resolve ALL the promises and returns
  // their resolved values in an array.
  //
  // Promise.all([ Promise.resolve(1), Promise.resolve(2) ]).then((array) => {
  //   console.log(array); // [1,2];
  // });
const BlogPost = require('../lib/BlogPost.js');
const Comment = require('../lib/Comment.js');

describe('BlogPost', () => {
  // Test to verify that the BlogPost class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of BlogPost class', () => {
      // Act / Arrange
      const blogpost = new BlogPost();
      // Assert
      expect(blogpost).toBeInstanceOf(BlogPost);
    });
  });

  // Test to verify that authorName can be assigned.
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      // Arrange
      const authorName = 'John Doe';
      // Act
      const blogpost = new BlogPost(authorName);
      // Assert
      expect(blogpost.authorName).toBe(authorName);
    });
  });

  // Test to verify that title can be assigned.
  describe('Initialize title', () => {
    it('should set title properly', () => {
      // Arrange
      const title = 'My First Post';
      // Act
      const blogpost = new BlogPost('John Doe', title);
      // Assert
      expect(blogpost.title).toBe(title);
    });
  });

  // Test to verify that text can be assigned.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      // Arrange
      const text = 'Dogs are super cute!';
      // Act
      const blogpost = new BlogPost('John Doe', 'My First Post', text);
      // Assert
      expect(blogpost.text).toBe(text);
    });
  });

  // Test to verify that createdOn can be assigned.
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      // Arrange
      const createdOn = '12/15/2021';
      // Act
      const blogpost = new BlogPost(
        'John Doe',
        'My First Post',
        'Dogs are super cute!',
        createdOn
      );
      // Assert
      expect(blogpost.createdOn).toBe(createdOn);
    });
  });

  // Test to verify that comments can be initialized.
  describe('Initialize comments', () => {
    it('should set comments set to length of 0', () => {
      // Act / Arrange
      const blogpost = new BlogPost();
      // Assert
      expect(blogpost.comments.length).toBe(0);
    });
  });

  // Test to verify that addComment() recieves comment data.
  describe('addComment() method', () => {
    it('should add comment to comments array', () => {
      // Arrange
      const blogpost = new BlogPost();
      const comment = new Comment();
      // Act
      blogpost.addComment(comment);
      // Assert
      expect(blogpost.comments[0]).toBeInstanceOf(Comment);
      expect(blogpost.comments.length).toBe(1);
    });
  });

  // Test to verify that printMetaData() returns the correct data.
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      // Arrange
      const blogpost = new BlogPost(
        'John Doe',
        'My First Post',
        'Dogs are super cute!',
        '12/15/2021'
      );
      // Assert / Act
      expect(blogpost.printMetaData()).toBe(
        `Created by John Doe on 12/15/2021`
      );
    });
  });
});


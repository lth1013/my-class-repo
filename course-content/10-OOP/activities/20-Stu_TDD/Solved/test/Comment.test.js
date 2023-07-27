const Comment = require('../lib/Comment.js');

describe('Comment', () => {
  // Test to verify that the Comment class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Comment class', () => {
      // Act / Arrange
      const comment = new Comment();
      // Assert
      expect(comment).toBeInstanceOf(Comment);
    });
  });

  // Test to verify that authorName can be assigned.
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      // Arrange
      const authorName = 'Jane Doe';
      // Act
      const comment = new Comment(authorName);
      // Assert
      expect(comment.authorName).toBe(authorName);
    });
  });

  // Test to verify that text can be assigned.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      // Arrange
      const text = 'This post is super cool!';
      // Act
      const comment = new Comment('Jane Doe', text);
      // Assert
      expect(comment.text).toBe(text);
    });
  });

  // Test to verify that createdOn can be assigned.
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      // Arrange
      const createdOn = '12/15/2021';
      // Act
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        createdOn
      );
      // Assert
      expect(comment.createdOn).toBe(createdOn);
    });
  });

  // Test to verify that reaction can be assigned.
  describe('Initialize reaction', () => {
    it('should set reaction properly', () => {
      // Arrange
      const reaction = '🐶';
      // Act
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        '12/15/2021',
        reaction
      );
      // Assert
      expect(comment.reaction).toBe(reaction);
    });
  });

  // Test to verify that printMetaData() returns the correct data.
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      // Arrange
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        '12/15/2021',
        '🐶'
      );
      // Assert / Act
      expect(comment.printMetaData()).toBe(
        `Created by Jane Doe on 12/15/2021 🐶`
      );
    });
  });
});
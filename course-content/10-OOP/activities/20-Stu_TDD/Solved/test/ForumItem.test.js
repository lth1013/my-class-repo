const ForumItem = require('../lib/ForumItem.js');

describe('ForumItem', () => {
  // Test to verify that the ForumItem class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of ForumItem class', () => {
      // Arrange / Act
      const forumitem = new ForumItem();
      // Assert
      expect(forumitem).toBeInstanceOf(ForumItem);
    });
  });

  // Test to verify that authorName can be assigned.
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      // Arrange
      const authorName = 'Jack Doe';
      // Act
      const forumitem = new ForumItem(authorName);
      // Assert
      expect(forumitem.authorName).toBe(authorName);
    });
  });

  // Test to verify that text can be assigned.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      // Arrange
      const text = 'This is some random text';
      // Act
      const forumitem = new ForumItem('Jack Doe', text);
      // Assert
      expect(forumitem.text).toBe(text);
    });
  });

  // Test to verify that createdOn can be assigned.
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      // Arrange
      const createdOn = '12/15/2021';
      // Act
      const forumitem = new ForumItem(
        'Jack Doe',
        'This is some random text',
        createdOn
      );
      // Assert
      expect(forumitem.createdOn).toBe(createdOn);
    });
  });

  // Test to verify that printMetaData() returns the correct data.
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      // Arrange
      const forumitem = new ForumItem(
        'Jack Doe',
        'This is some random text',
        '12/15/2021'
      );
      // Assert / Act
      expect(forumitem.printMetaData()).toBe(
        `Created by Jack Doe on 12/15/2021`
      );
    });
  });
});

// Arrange
// Act
// Assert
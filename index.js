module.exports = Phrase;

// defines a phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function processor(string) {
    return string.toLowerCase();
  };

  // returns content ready for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  };
  
  // returns true if the phrase is a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };

  this.louder = function louder() {
    return this.content.toUpperCase();
  };
};

/* eslint-disable require-jsdoc */
'use strict';

/**
 * Returns a string of the count and Bet or Hold
 * @param {array} cards - an array of cards
 * @returns {string} - message
 */

function countCards(cards) {
  let count = 0;
  let message = '';
  for (const card of cards) {
    if (card >= 2 && card <= 6) {
      count += 1;
    } else if (
      card === 10 ||
      card === 'J' ||
      card === 'Q' ||
      card === 'K' ||
      card === 'A'
    ) {
      count -= 1;
    }
  }
  if (count > 0) {
    message = 'Bet';
  } else {
    message = 'Hold';
  }
  return `${count} ${message}`;
}

console.log(countCards([2, 3, 7, 'K', 'A'])); // 0 Hold
console.log(countCards([2, 3, 4, 5, 6])); // 5 Bet
console.log(countCards([7, 8, 9])); // 0 Hold
console.log(countCards([10, 'J', 'Q', 'K', 'A'])); // -5 Hold
console.log(countCards([3, 7, 'Q', 8, 'A'])); // -1 Hold
console.log(countCards([2, 2, 10])); // 1 Bet
console.log(countCards([2, 9, 'J', 2, 7])); // 1 Bet
console.log(countCards([3, 2, 'A', 10, 'K'])); // -1 Hold

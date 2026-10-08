/*
 * Question bank registry.
 *
 * Each question file calls DP900.add(domain, prefix, [...questions]).
 * A question object:
 *   q  - question text (backticks render as inline code, \n as a line break)
 *   o  - answer options
 *   a  - indexes of the correct option(s); more than one = multi-select
 *   e  - explanation shown after the answer is submitted
 *   k  - optional; 1 keeps option order fixed (Yes/No, ordered lists)
 *
 * IDs are generated from the prefix and position, so append new questions to
 * the end of a list to keep existing progress stats stable.
 */
window.DP900 = window.DP900 || { bank: [] };
window.DP900.add = function (domain, prefix, list) {
  list.forEach(function (item, i) {
    item.id = prefix + String(i + 1).padStart(3, '0');
    item.d = domain;
    window.DP900.bank.push(item);
  });
};

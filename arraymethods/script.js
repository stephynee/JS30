var inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric','Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

//get inventors born in the 1500s
var inventors2 = inventors.filter(function(inventor) {
  return inventor.year > 1499 && inventor.year < 1600;
});

//get first and last names
var inventorNames = inventors.map(function(inventor) {
  return inventor.first + ' ' + inventor.last;
});

//sort the inventors by birth year
var inventorsBorn = inventors.sort(function(a, b) {
  return a.year > b.year ? 1 : -1;
});

//total years lived for all of the inventors
var totalYears = inventors.reduce(function(a, b) {
  return a + (b.passed - b.year);
}, 0);

//sort inventors by years lived
var oldest = inventors.sort(function(a, b) {
  return (a.passed - a.year) > (b.passed - b.year) ? -1 : 1;
});

//sort people by furst names
var people2 = people.sort(function(a, b) {
  var splitA = a.split(',');
  var splitB = b.split(',');

  return splitA[1] > splitB[1] ? 1 : -1;
});

//sort people by last names
var people3 = people.sort(function(a, b) {
  return a > b ? 1 : -1;
});

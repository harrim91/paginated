# paginated

Split an array into smaller, evenly-sized arrays.

## Installation

`npm install paginated`

## Usage
```
const paginate = require('paginated');

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

paginate(list, 3); // returns [[0, 1, 2],  [3, 4, 5],  [6, 7, 8], [9]]
paginate(list, 4); // returns [[0, 1, 2, 3],  [4, 5, 6, 7],  [8, 9]]
paginate(list, 5); // returns [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]

// returns a single page if the list isn't long enough
paginate(list, 11); // returns [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]

// has a default page length of 10
const longList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
paginate(longList); // returns [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]]
```

## Test
`npm install`
`npm test`

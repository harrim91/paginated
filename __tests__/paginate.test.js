const paginate = require('..');

test('paginates the given list based on the given page length', () => {
  const listLength = 10;
  const pageLength = 2;
  const expectedPages = [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]];

  const list = [...Array(listLength)].map((d, i) => i);

  const pages = paginate(list, pageLength);

  expect(pages).toEqual(expectedPages);
});

test('paginates where the list length does not divide into the page length', () => {
  const listLength = 10;
  const pageLength = 4;
  const expectedPages = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9]];

  const list = [...Array(listLength)].map((d, i) => i);

  const pages = paginate(list, pageLength);

  expect(pages).toEqual(expectedPages);
});

test('paginates where the list length is less than the page length', () => {
  const listLength = 4;
  const pageLength = 10;
  const expectedPages = [[0, 1, 2, 3]];

  const list = [...Array(listLength)].map((d, i) => i);

  const pages = paginate(list, pageLength);

  expect(pages).toEqual(expectedPages);
});

test('has a default page length of 10', () => {
  const listLength = 15;
  const expectedPages = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14]];

  const list = [...Array(listLength)].map((d, i) => i);

  const pages = paginate(list);

  expect(pages).toEqual(expectedPages);
});

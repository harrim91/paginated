const paginate = (list, pageLength = 10) => {
  const pages = [];
  let currentPage = [];

  for (let item = 0; item < list.length; item += 1) {
    currentPage.push(list[item]);
    if (currentPage.length === pageLength) {
      pages.push(currentPage);
      currentPage = [];
    } else if (item === list.length - 1) {
      pages.push(currentPage);
    }
  }

  return pages;
};

module.exports = paginate;
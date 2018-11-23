const API = 'http://localhost:4000/'
const PATH_SRC = './Товары в каталоге Onliner.by_files/'

const makeCorrectEndsRu = (num, wordsArray) => {
  let index
  if (num >= 11 && num <= 14) {
    index = 2
  } else if (num % 10 === 1) {
    index = 0
  } else if (num % 10 >= 2 && num % 10 <= 4) {
    index = 1
  } else {
    index = 2
  }

  return `${num} ${wordsArray[index]} `
}

export { API, PATH_SRC, makeCorrectEndsRu }

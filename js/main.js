const COUNT_PICTURE = 25;
const COUNT_LIKE_MIN = 15;
const COUNT_LIKE_MAX = 200;
const COMMENT_COUNT = 14;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'В конце концов это просто непрофессионально.',
  'Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'КИТЫ',
  'Увидеть и умереть',
  'Чудо света',
  'Невозможно оторваться',
  'Невероятно',
  'Вы живете или просто дышите'
];

const NAMES = [
  'Ява', 'Гав', 'Кит', 'Тень', 'Ириска'
];
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComment = ()=> ({
  id: generateCommentId(),
  avatar: 'img/avatar-{{getRandomInteger(1, AVATAR_COUNT)}}.svg',
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  in: index,
  url:  'photos/{{index}}.ipg',
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(COUNT_LIKE_MIN, COUNT_LIKE_MAX),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment
  ),
});


const getPictures = () =>
  Array.from({ length: COUNT_PICTURE }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );
getPictures();



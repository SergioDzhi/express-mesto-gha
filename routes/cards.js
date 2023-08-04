const router = require('express').Router();

const {
  getCards, deleteCard, likeCard, addCard, dislikeCard,
} = require('../controllers/users');

router.get('/', getCards);
router.delete('/cardId', deleteCard);
router.post('/', addCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;

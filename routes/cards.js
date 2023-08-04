const router = require('express').Router();

router.get('/', getCards);
router.delete('/cardId', deleteCard);
router.post('/', addCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;

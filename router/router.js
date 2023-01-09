const express = require('express');
const { resourceLimits } = require('worker_threads');
const router = express.Router();
const getTranslation = require('../services/translationService');

router.post('/', (req, res) => {
  const sentence = req.body.sentence;
  console.log(sentence);
  getTranslation(sentence)
    .then((result) => {
      console.log(result.data);
      res.status(201).json({
        text: result.data.contents.text,
        translated: result.data.contents.translated,
        translation: result.data.contents.translation,
      });
    })
    .catch((error) => {
      res.status(501).json({
        error: {
          message: error.message,
          status: error.status,
        },
      });
    });
});

module.exports = router;

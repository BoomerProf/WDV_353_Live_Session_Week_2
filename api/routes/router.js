const express = require('express');
const router = express.Router();
const getCryptoPrices = require('../../services/service');

router.get('/crypto', (req, res, next) => {
  // call a service that calls th api fro crypto prices
  getCryptoPrices()
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(501).json({
        error: {
          message: error.message,
          status: error.status,
        },
      });
    });
});
module.exports = router;

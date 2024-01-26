const exclusiveRouter = require("express").Router();
const { listingDB } = require("../model/listing");

/**
 * Returns list of listings
 */
exclusiveRouter.get("/", (req, res, next) => {
  console.log("Fetching...");

  listingDB
    .aggregate([{ $sample: { size: 3 } }])
    .then((results) => {
      // Modify the output to convert _id to id and remove __v field
      const modifiedResults = results.map((result) => {
        const { _id, __v, ...rest } = result;
        return { id: _id, _id, ...rest };
      });
      res.status(200).json({
        listing: modifiedResults,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
});

/**
 * Returns a listing by id.
 */
exclusiveRouter.get("/:id", (req, res, next) => {
  listingDB.findById(req.params.id).then((listingdb) => {
    res.status(200).json({
      listing: listingdb,
    });
  });
});

module.exports = exclusiveRouter;

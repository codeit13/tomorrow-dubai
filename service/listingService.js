const listingRouter = require("express").Router();
const { listingDB } = require("../model/listing");
const agentDB = require("../model/agent");
const { sendEmail } = require("../config/email");
const listingSearchRouter = require("./propertySearchService");

/**
 * Creates a new listing.
 */
listingRouter.post("", async (req, res, next) => {
  console.log("Inside POST:", req.body);
  try {
    const listing = new listingDB({
      ...req.body,
      isOffPlan: req.body.isOffPlan,
      contactName: req.body.name,
      contactEmail: req.body.email,
      contactPhone: req.body.phone,

      sellDuration: req.body.duration,

      agent: req.body.agent,

      location: req.body.location,

      status: req.body.status || "DRAFT",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    listing.save();

    await sendEmail(listing);

    res.status(201).json({
      message: "listing data added successfully",
      listing: listing,
    });
  } catch (error) {
    console.error("Error occurred while creating a listing", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating a listing" });
  }
});

listingRouter.put("/:id", async (req, res, next) => {
  console.log("Inside PUT", req.params.id, "body", req.body);
  try {
    const listingId = req.params.id;
    const updates = req.body;

    // Extract latitude and longitude from request body if available
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    // If latitude and longitude are provided, update the location field
    if (latitude !== undefined && longitude !== undefined) {
      updates.location = {
        type: "Point",
        coordinates: [longitude, latitude],
      };
    }

    const updatedListing = await listingDB.findByIdAndUpdate(
      listingId,
      updates,
      { new: true } // To get the updated document as the result
    );

    res.status(200).json({
      message: "Listing updated successfully",
      listing: updatedListing,
    });
  } catch (error) {
    console.error("Error updating listing:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the listing" });
  }
});

const processQueryParams = (req, res, next) => {
  // Process and validate query parameters here
  const { status } = req.query;

  //  Ensure 'status' parameter is valid
  const validStatuses = ["approved", "draft", "rejected"];
  if (status && !validStatuses.includes(status.toLowerCase())) {
    return res.status(400).json({
      error: "Invalid status parameter. Possible Values are: " + validStatuses,
    });
  }

  // Continue to the next middleware or route handler
  next();
};

/**
 * Returns list of properties
 */
listingRouter.get("", processQueryParams, async (req, res, next) => {
  /* Forwarded to Search and Filter Service. */
  listingSearchRouter(req, res);
});

/**
 * Returns a listing by id.
 */
listingRouter.get("/:id", async (req, res, next) => {
  try {
    const response = await listingDB
      .findById(req.params.id)
      .populate("agent")
      .exec();
    res.status(200).json({
      message: "Id fetched successfully!",
      listing: response,
    });
  } catch (error) {
    console.error("Error fetching listing by id:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the listing by id" });
  }
});

listingRouter.delete("/:id", async (req, res, next) => {
  console.log("Deleting record::", req.params.id);
  try {
    const response = await listingDB.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Id deleted successfully!",
      listing: response,
    });
  } catch (error) {
    console.error("Error deleting listing by id:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the listing by id" });
  }
});
module.exports = listingRouter;

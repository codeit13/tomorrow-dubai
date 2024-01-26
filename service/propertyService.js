const propertyRouter = require("express").Router();
const { propertyDB } = require("../model/property");

propertyRouter.get("", async (req, res, next) => {
  const results = await propertyDB.find({}).exec();

  res.status(200).json({
    message: "Properties data fetched successfully",
    property: results || [],
  });
});
/**
 * Creates a new property.
 */
propertyRouter.post("", async (req, res, next) => {
  console.log("Inside POST:", req.body);
  try {
    const property = new propertyDB({
      ...req.body,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    property.save();

    res.status(201).json({
      message: "Property data added successfully",
      property,
    });
  } catch (error) {
    console.error("Error occurred while creating a property", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating a property" });
  }
});

propertyRouter.put("/:id", async (req, res, next) => {
  console.log("Inside PUT", req.params.id, "body", req.body);
  try {
    const propertyId = req.params.id;
    const updates = req.body;

    const updatedProperty = await propertyDB.findByIdAndUpdate(
      propertyId,
      updates,
      { new: true } // To get the updated document as the result
    );

    res.status(200).json({
      message: "Property updated successfully",
      property: updatedProperty,
    });
  } catch (error) {
    console.error("Error updating property:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the property" });
  }
});

/**
 * Returns a property by id.
 */
propertyRouter.get("/:id", async (req, res, next) => {
  try {
    const response = await propertyDB.findById(req.params.id).exec();
    res.status(200).json({
      message: "Id fetched successfully!",
      property: response,
    });
  } catch (error) {
    console.error("Error fetching property by id:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the property by id" });
  }
});

propertyRouter.delete("/:id", async (req, res, next) => {
  console.log("Deleting record::", req.params.id);
  try {
    const response = await propertyDB.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Id deleted successfully!",
      property: response,
    });
  } catch (error) {
    console.error("Error deleting property by id:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the property by id" });
  }
});
module.exports = propertyRouter;

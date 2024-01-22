const contactRouter = require("express").Router(),
  contactDB = require("../model/contact"),
  { propertyDB } = require("../model/property");
const { sendContactEmail } = require("../config/email");

/**
 * Creates a new property.
 */
contactRouter.post("", async (req, res, next) => {
  const { name, email, phone, moreInfo, propertyId } = req.body;
  console.log("Name", name, "Property Id::", propertyId);

  const contact = new contactDB({
    id: req.body.id,
    buyerName: req.body.name,
    buyerEmail: req.body.email,
    buyerPhone: req.body.phone,
    moreInfo: req.body.moreInfo,
    propertyId: req.body.propertyId,
    status: req.body.status || "INITIATED", // Two values can be used here INITIATED and DONE
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  contact.save();
  //console.log(property);
  const fetchedProperty = await propertyDB.findById(req.body.propertyId);

  await sendContactEmail(contact, fetchedProperty);

  res.status(201).json({
    message: "Buyer Interest Submitted successfully",
    buyerContact: contact,
    property: fetchedProperty,
  });
});

contactRouter.get("/", async (req, res, next) => {
  console.log("Fetching Contacts...");
  try {
    const results = await contactDB
      .find({})
      .populate("propertyId")
      .exec()
      .console.log("Contact Result::", results);
    res.status(200).json({
      message: "Contacts fetched successfully",
      contacts: results,
    });
  } catch (error) {
    console.error("Error fetching contact:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching contacts" });
  }
});

module.exports = contactRouter;

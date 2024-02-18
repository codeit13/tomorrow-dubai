const contactRouter = require("express").Router(),
  contactDB = require("../model/contact"),
  { listingDB } = require("../model/listing");
const { sendContactEmail } = require("../config/email");

/**
 * Creates a new listing.
 */
contactRouter.post("", async (req, res, next) => {
  const { name, email, phone, moreInfo, listingId } = req.body;
  console.log("Name", name, "listing Id::", listingId);

  const contact = new contactDB({
    id: req.body.id,
    buyerName: req.body.name,
    buyerEmail: req.body.email,
    buyerPhone: req.body.phone,
    moreInfo: req.body.moreInfo,
    listingId: req.body.listingId,
    status: req.body.status || "INITIATED", // Two values can be used here INITIATED and DONE
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  contact.save();
  //console.log(listing);
  const fetchedListing = await listingDB.findById(req.body.listingId);

  // await sendContactEmail(contact, fetchedListing);

  res.status(201).json({
    message: "Buyer Interest Submitted successfully",
    buyerContact: contact,
    listing: fetchedListing,
  });
});

contactRouter.get("/", async (req, res, next) => {
  console.log("Fetching Contacts...");
  try {
    const results = await contactDB.find({}).populate("listingId").exec();
    // console.log("Contact Result::", results);
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

const subscriberRoutes = require("express").Router();
const subscriberDB = require("../model/subscriber");

/**
 * Creates a new blog.
 */
subscriberRoutes.post("", async (req, res, next) => {
  try {
    const { email } = req.body;
    const subscriber = new subscriberDB({
      email,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    subscriber.save();

    res.status(201).json({
      message: "Subscriber added successfully.",
      subscriber: subscriber,
    });
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while adding user to subscribers: " + error,
    });
  }
});

// subscriberRoutes.put("/:id", async (req, res, next) => {
//   try {
//     const blogId = req.params.id;
//     const updates = req.body;

//     const updatedBlog = await blogDB.findByIdAndUpdate(blogId, updates, {
//       new: true,
//     });

//     res.status(200).json({
//       message: "Blog updated successfully",
//       blog: updatedBlog,
//     });
//   } catch (error) {
//     console.error("Error updating blog:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while updating the blog" });
//   }
// });

subscriberRoutes.get("/", async (req, res, next) => {
  try {
    const sortOptions = {
      sort: ["updatedAt", "desc"],
    };
    const results = await subscriberDB.find({}).sort("-updatedAt").exec();
    res.status(200).json({
      message: "Subscribers fetched successfully",
      subscribers: results,
    });
  } catch (error) {
    console.error("Error fetching subscribers: ", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching subscribers" });
  }
});

// subscriberRoutes.get("/:id", async (req, res, next) => {
//   console.log("Fetching Blogs...");
//   try {
//     const results = await blogDB.findById(req.params.id);
//     console.log("Blog Result::", results);
//     res.status(200).json({
//       message: "Id fetched successfully!",
//       blogs: results,
//     });
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     res.status(500).json({
//       error: "An error occurred while fetching blog id " + req.params.id,
//     });
//   }
// });

subscriberRoutes.delete("/:id", async (req, res, next) => {
  try {
    const response = await subscriberDB.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Subscriber deleted successfully!",
      subscriber: response,
    });
  } catch (error) {
    console.error("Error deleting subscriber with id:", error);
    res.status(500).json({
      error: "An error occurred while deleting the subscriber with id",
    });
  }
});

module.exports = subscriberRoutes;

const Category = require("./giftCategory.model");
const Gift = require("../gift/gift.model")
const { deleteFile } = require("../../util/deleteFile");
const fs = require("fs");
const { compressImage } = require("../../util/compressImage");

//get all category
exports.index = async (req, res) => {
  try {

    const category = await Category.aggregate([
      {
        $lookup: {
          from: "gifts",
          localField: "_id",
          foreignField: "category",
          as: "gift"
        }
      },
      {
        $sort: { createdAt: -1 }
      },
      {
        $project: {
          name: 1,
          image: 1,
          createdAt: 1,
          giftCount: { $size: "$gift" }
        }
      }
    ]);

    if (!category)
      return res.status(200).json({ status: false, message: "No data found!" });

    return res
      .status(200)
      .json({ status: true, message: "Success!!", category });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};

// create category
exports.store = async (req, res) => {
  try {
    if (!req.file || !req.body.name)
      return res
        .status(200)
        .json({ status: false, message: "Invalid Details!" });

    // compress image
    compressImage(req.file);

    const category = new Category();

    category.image = req.file.path;
    category.name = req.body.name;

    await category.save();

    return res
      .status(200)
      .json({ status: true, message: "Success!", category });
  } catch (error) {
    console.log(error);
    deleteFile(req.file);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};

// update category
exports.update = async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);

    if (!category) {
      deleteFile(req.file);
      return res
        .status(200)
        .json({ status: false, message: "Category does not Exist!" });
    }
    if (req.file) {
      if (fs.existsSync(category.image)) {
        fs.unlinkSync(category.image);
      }
      // compress image
      compressImage(req.file);
      category.image = req.file.path;
    }
    category.name = req.body.name;

    await category.save();

    return res
      .status(200)
      .json({ status: true, message: "Success!", category });
  } catch (error) {
    console.log(error);
    deleteFile(req.file);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};

// delete category
exports.destroy = async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);

    if (!category)
      return res
        .status(200)
        .json({ status: false, message: "Category does not Exist!" });

    if (fs.existsSync(category.image)) {
      fs.unlinkSync(category.image);
    }

    const gift = await Gift.find({ category: category._id });

    await gift.map(async (data) => {
      if (fs.existsSync(data.image)) {
        fs.unlinkSync(data.image);
      }
      await data.deleteOne();
    })

    await category.deleteOne();

    return res.status(200).json({ status: true, message: "Success!" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};

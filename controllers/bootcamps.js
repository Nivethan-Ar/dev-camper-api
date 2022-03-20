const BootCamps = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @router  Get /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await BootCamps.find({});
    res
      .status(201)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(404).json({ success: false, msg: `${err.message}` });
  }
};

// @desc    Get single bootcamp
// @router  Get /api/v1/bootcamps
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamps.findById(req.params.id);
    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, msg: `bootcamp not found` });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(404).json({ success: false, msg: `CATCH BLOCK:${err.message}` });
  }
};

// @desc    Create new bootcamp
// @router  Post /api/v1/bootcamps:id
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  // console.log(req.body);
  try {
    const bootcamp = await BootCamps.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false, msg: `${err.message}` });
    console.log(err.message);
  }
};

// @desc    Update single bootcamp
// @router  Put /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamps.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, msg: 'Bootcamp not found!' });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(404).json({ success: false, msg: `${err.message}` });
  }
};

// @desc    Delete single bootcamp
// @router  Get /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamps.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, msg: 'Bootcamp not found' });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false, msg: `${err.message}` });
  }
};

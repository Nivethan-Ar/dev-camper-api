// @desc    Get all bootcamps
// @router  Get /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({success:true, msg:'Get all bootcamps'})
}

// @desc    Get single bootcamp
// @router  Get /api/v1/bootcamps
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({success:true, msg:'Get single bootcamp'})
}

// @desc    Create new bootcamp
// @router  Post /api/v1/bootcamps:id
// @access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({success:true, msg:'Create new bootcamp'})
}

// @desc    Update single bootcamp
// @router  Put /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({success:true, msg:'Update a bootcamp'})
}

// @desc    Delete single bootcamp
// @router  Get /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({success:true, msg:'Delete a bootcamp'})
}
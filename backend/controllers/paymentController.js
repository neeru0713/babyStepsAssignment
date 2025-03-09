const catchAsync = require("../utils/catchAsync.js");
const paymentService = require("../services/paymentService.js");

const checkout = catchAsync(async (req, res) => {
  let session = await paymentService.checkout(req.body);
  if (session) {
    res.status(201).json({ url: session.url });
  } else {
    res.status(404).json({ success: false });
  }
});

module.exports = {
  checkout
};

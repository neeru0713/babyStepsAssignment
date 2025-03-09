const ApiError = require("../utils/ApiError");
const dotenv = require("dotenv");
const path = require("path");
const envFile =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env";
dotenv.config({ path: path.resolve(__dirname, "../../", envFile) });
const Stripe = require("stripe");



async function checkout(appointmentBody) {
  try {
    const session = getPayment(appointmentBody);
    return session;
  } catch (error) {
    throw new ApiError(500, error.message || "Failed to create appointment");
  }
}


async function getPayment(body) {
  try {
    const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: body.message,
            },
            unit_amount: body.consultationFee * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/#/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    return session;
  } catch (error) {
    throw new ApiError(404, error.message);
  }
}




module.exports = {
  checkout

};

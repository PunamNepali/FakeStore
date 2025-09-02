import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();

//  Middleware
app.use(cors());
app.use(express.json());

//  Nodemailer transporter setup (Gmail example)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "punamkhem0@gmail.com", // Replace with your Gmail
    pass: "gkng mklh qdya aqcw",    // Use an App Password if 2FA is enabled
  },
});


//  Contact Form Endpoint
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        msg: "Missing required fields: name, email, message",
      });
    }

    await transporter.sendMail({
      from: email,
      to: "punamkhem0@gmail.com", // Admin email
      subject: `FakeStore Contact Form - ${name}`,
      text: message,
    });

    res.json({ success: true, msg: "Email sent!" });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ success: false, msg: "Failed to send email", error: error.message });
  }
});


//  Order Confirmation Endpoint

app.post("/order-confirmation", async (req, res) => {
  console.log("Received order:", req.body); //  Log incoming order data

  try {
    const { customerEmail, name, cartItems, total } = req.body;

    // Validate required fields
    if (!customerEmail || !name || !cartItems || !total) {
      return res.status(400).json({
        success: false,
        msg: "Missing required fields: customerEmail, name, cartItems, total",
      });
    }

    // Validate cartItems is an array
    if (!Array.isArray(cartItems)) {
      return res.status(400).json({
        success: false,
        msg: "cartItems must be an array",
      });
    }

    // Format cart details
    const cartDetails = cartItems
      .map((item) => `${item.title} (x${item.quantity}) - $${item.price * item.quantity}`)
      .join("\n");

    // Email to customer
    const customerMailOptions = {
      from: "punamkhem0@gmail.com",
      to: customerEmail,
      subject: "Your FakeStore Order Confirmation",
      text: `Hi ${name},\n\nThank you for your order!\n\nOrder Details:\n${cartDetails}\n\nTotal: $${total}\n\n- FakeStore Team`,
    };

    // Email to admin
    const adminMailOptions = {
      from: "your-email@gmail.com",
      to: "punamkhem0@gmail.com",
      subject: `New Order from ${name}`,
      text: `Customer: ${name}\nEmail: ${customerEmail}\n\nOrder Details:\n${cartDetails}\n\nTotal: $${total}`,
    };

    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.json({ success: true, msg: "Order confirmation sent!" });
  } catch (error) {
    console.error("Order confirmation error:", error); // log full error
    res.status(500).json({
      success: false,
      msg: "Failed to send order email",
      error: error.message,
    });
  }
});


//  Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(` Server running at http://localhost:${PORT}`));

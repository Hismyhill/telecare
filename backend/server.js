import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

// app config
const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

//  api endpoints
app.use("/api/admin", adminRouter);
// localhost:3000/api/admin/add-doctor

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(port, console.log("Server started successfully on ", port));

// // Connect to MongoDB (replace with your MongoDB connection string)
// mongoose
//   .connect("mongodb://localhost/your_database_name", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error(err));

// // Define a simple route
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // Define a POST route for registration
// app.post("/api/register", (req, res) => {
//   const { name, email, password } = req.body;

//   // Create a new user (replace with your actual database operations)
//   const newUser = new User({ name, email, password });
//   newUser
//     .save()
//     .then((user) => res.json(user))
//     .catch((err) => res.status(400).json({ error: "Registration failed" }));
// });

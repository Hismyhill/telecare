import jwt from "jsonwebtoken";

// admin authentication middleware
async function authAdmin(req, res, next) {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      res.json({ success: false, message: "Not  authorizes to login again" });
    }

    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.JWT_SECRET) {
      res.json({ success: false, message: "Not authorized to login again" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

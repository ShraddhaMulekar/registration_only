import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.hearders.authorization?.split(" ")[1];

  if (!token) {
    res.json({ msg: "Access denined!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRETEKEY);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("Invalid or expired token!", error);
    res.json({ msg: "Invalid or expired token!", error });
  }
};

export default auth;

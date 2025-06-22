import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

const registerContainer = async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.json({ msg: "userName, email, password required for registration!" });
  }
  try {
    const matchEmail = await UserModel.findOne({ email });

    if (matchEmail) {
      res.json({
        msg: "you are already registered please log in now!",
        matchEmail,
      });
    }

    bcrypt.hash(password, Number(process.env.SALTROUND), async (err, hash) => {
      if (err) {
        res.json({ msg: "Invalid password..", err });
      }
      const checkPass = await UserModel({ userName, email, password: hash });
      await checkPass.save();
      console.log(
        "registration successful!",
        "checkPass",
        checkPass
      );
      res.json({ msg: "registration successful!", checkPass });
    });
  } catch (error) {
    console.log("error in registration", error);
    res.status(200).json({ msg: "error in registration!" });
  }
};

export default registerContainer;
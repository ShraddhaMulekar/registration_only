import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const logInContainer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const matchEmail = await UserModel.findOne({ email });

    if (!matchEmail) {
      res.json({
        msg: "you are not registered with Email id. Please registered now!",
      });
    } else {
      bcrypt.compare(password, matchEmail.password, (err, result) => {
        if (err) {
          console.log("error here", err);
          res.json({ msg: "error here", err });
        } 
        if(result){
          const payload = {
            userID: matchEmail._id,
            userName: matchEmail.userName,
          };
          const token = jwt.sign(payload, process.env.SECRETEKEY);
          console.log("Log in successful!", token)
          res.json({ msg: "Log in successful!", token });
        }
        else{
            res.json({msg:"error"})
        }
      });
    }
  } catch (error) {
    console.log("error in log in route", error);
    res.json({ msg: "error in log in route", error });
  }
};

export default logInContainer;
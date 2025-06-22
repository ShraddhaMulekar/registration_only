import LogOutModel from "../models/logout.model.js";

const logOutContainer = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.json({ msg: "No token provided!" });
    }

    await LogOutModel.create({ token });
    console.log("Log out successful!", token);
    res.json({ msg: "Log out successful!", token });
    
  } catch (error) {
    console.log("error in log out route!", error);
    res.json({ msg: "error in log out route!", error });
  }
};

export default logOutContainer;

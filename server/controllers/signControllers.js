const SignUsers = require("../models/signModel");

//get all products
const getAllSignUsers = async (req, res) => {
  try {
    const signUsers = await SignUsers.find({});
    res.send(signUsers).status(200);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const addNewSignUsers = async (req, res) => {
  const newSignUsers = new SignUsers({ ...req.body });
  try {
    await newSignUsers.save();
    res.status(201).send({
      message: "created succesfully!",
      data: newSignUsers,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    await SignUsers.findByIdAndUpdate(id, { ...req.body });
    const updatedProduct = await SignUsers.findById(id);
    res.status(200).send({
      message: "updated succesfully!",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).send({ message: "Please fill in all fields" });
    return;
  }

  try {
    const existingUser = await SignUsers.findOne({
      email: email,
    });
    console.log(existingUser);
    if (existingUser) {
      res.status(400).send({
        message: "This email is already registered. Please use another email.",
      });
    } else {
      const newUser = new User({
        username: username,
        email: email,
        password: password,
      });
      await newUser.save();
      res.status(201).send({
        message: "Your registration has been successfully created!",
        user: newUser,
      });
    }
  } catch (error) {
    res.status(500).send({ message: "An error occurred" });
  }
};

const deleteUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUsers = await SignUsers.findByIdAndDelete(id);
    const products = await SignUsers.find({});
    res.status(200).json({
      message: "success",
      deletedUsers: deletedUsers,
      allProducts: products,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({ message: "Please enter email and password" });
  }

  try {
    const user = await SignUsers.findOne({ email: email, password: password });
    if (!user) {
      res.status(400).send({ message: "Wrong email or password" });
      return;
    }

    res.status(200).send({ message: "Login successful!" });
  } catch (error) {
    res.status(500).send({ message: "An error occurred" });
  }
};

// const logout = async (req, res) => {
//   try {
//     res.status(200).send("Logout successful");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };

module.exports = {
  getAllSignUsers,
  addNewSignUsers,
  signup,
  signin,
  deleteUsersById,
  updateUsersById,
  // logout
};

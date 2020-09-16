const jwt = require("jsonwebtoken");

const getToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );
};

module.exports = getToken;

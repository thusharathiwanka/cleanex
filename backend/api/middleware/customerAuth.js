const jwt = require("jsonwebtoken");

/**
 * use to authorize as customer
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} res
 */
const verifyCustomerAuth = (req, res, next) => {
  if (req.cookies) {
    try {
      const token = req.cookies.token;
      if (!token) return res.status(401).json({ message: "Unauthorized" });

      const verified = jwt.verify(token, process.env.JWT_SECRET);

      if (!verified.type === "customer")
        return res.status(401).json({ message: "Unauthorized" });

      req.body.userId = verified.user;
      next();
    } catch (err) {
      console.error(err.message);
      return res.status(401).json({ message: "Unauthorized" });
    }
  }
};

module.exports = { verifyCustomerAuth };

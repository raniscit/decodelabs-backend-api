const users = require("../data/user")

/**
 * Validate user data before creating a user
 */
const validateUser = (req, res, next) => {
    const { name, email, age } = req.body;


    // Check if all fields are provided
    if (!name || !email || age === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name, email and age are required.",
        });
    }

    // Name should be string
    if (typeof name !== "string") {
        return res.status(400).json({
            success: false,
            message: "Name must be a string.",
        });
    }

    // Remove extra spaces
    const trimmedName = name.trim();

    if (trimmedName.length === 0) {
        return res.status(400).json({
            success: false,
            message: "Name cannot be empty.",
        });
    }

    // Email should be string
    if (typeof email !== "string") {
        return res.status(400).json({
            success: false,
            message: "Email must be a string.",
        });
    }

    // Basic Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email format.",
        });
    }

    // Age should be number
    if (typeof age !== "number") {
        return res.status(400).json({
            success: false,
            message: "Age must be a number.",
        });
    }


    // Logical age
    if (age < 1 || age > 120) {
        return res.status(400).json({
            success: false,
            message: "Age must be between 1 and 120.",
        });
    }

    // Duplicate Email
    const emailExists = users.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
        return res.status(400).json({
            success: false,
            message: "Email already exists.",
        });
    }

    // Everything is valid
    next();
};

module.exports = validateUser;
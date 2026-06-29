const users = require("../data/users");

/**
 * @desc Get all users
 * @route GET /users
 */
const getAllUsers = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc Get single user by ID
 * @route GET /users/:id
 */
const getUserById = (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const user = users.find((user) => user.id === id);

        if (!user) {
            const error = new Error("User not found");
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc Create new user
 * @route POST /users
 */
const createUser = (req, res, next) => {
    try {
        const { name, email, age } = req.body;

        const newId =
            users.length > 0
                ? Math.max(...users.map((user) => user.id)) + 1
                : 1;

        const newUser = {
            id: newId,
            name: name.trim(),
            email: email.trim().toLowerCase(),
            age,
        };

        users.push(newUser);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc Update user
 * @route PUT /users/:id
 */
const updateUser = (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const user = users.find((user) => user.id === id);

        if (!user) {
            const error = new Error("User not found");
            error.statusCode = 404;
            return next(error);
        }

        const { name, email, age } = req.body;

        if (name !== undefined) {
            user.name = name.trim();
        }

        if (email !== undefined) {
            user.email = email.trim().toLowerCase();
        }

        if (age !== undefined) {
            user.age = age;
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc Delete user
 * @route DELETE /users/:id
 */
const deleteUser = (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const index = users.findIndex((user) => user.id === id);

        if (index === -1) {
            const error = new Error("User not found");
            error.statusCode = 404;
            return next(error);
        }

        const deletedUser = users.splice(index, 1);

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser[0],
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.signup = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        const newUser = new User({ email, password, role });
        await newUser.save();
        res.status(200).send('User created successfully.');
    } catch (error) {
        res.status(500).send('Error creating user.');
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('User not found.');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).send('Invalid credentials.');

        if (user.status !== 'Approved') return res.status(403).send('User not approved.');

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, role: user.role });
    } catch (error) {
        res.status(500).send('Error logging in.');
    }
};

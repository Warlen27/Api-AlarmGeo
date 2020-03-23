const User = require('../models/User');

module.exports = {
   

    async store(req, res) {
        const { email } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
          }

          return res.status(200).json(user);
    },

    
}
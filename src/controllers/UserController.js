const User = require('../models/User');

module.exports = {
    async index(req, res) {
      const users = await User.findAll();

      return res.json(users);
    },

    async store(req, res) {
      const { name, email } = req.body;

      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }

      const user = await User.create({ name, email });

      return res.json(user);
    },


    async update(req, res) {

      const { user_id } = req.params;
      const { name }  = req.body;
      const user =  await User.findByPk(user_id);

      if (req.file) {
          const avatar = req.file.filename;
          user.avatar = avatar;
      }
      
      user.update({ name });
      
      return res.json(user);
    },

};
const Place = require('../models/Place');
const User = require('../models/User');

module.exports = {

    async index(req, res){
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'places' }
        });
        res.json(user);
        
    },   
    async store(req, res){
        const { user_id } = req.params;

        const { title, latitude, longitude } = req.body;

        const { filename: thumbnail } = req.file;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ Error: 'User not found' });
        }


        const PlaceExists = await User.findByPk(user_id, {
            include: { association: 'places', where: { latitude, longitude } }
        });

        if (PlaceExists) {
        return res.status(400).json({ error: 'Place already exists.' });
        }

       

        const place = await Place.create({
            title,
            thumbnail,
            latitude,
            longitude,
            user_id
        });

        res.json(place)
    },
    async destroy(req, res) {
        const { place_id } = req.params;
         const place = await Place.findByPk(place_id)
         
        place.destroy();
       

            return res.status(200).json({ Ok: `Place successfully deleted` });


    },
}
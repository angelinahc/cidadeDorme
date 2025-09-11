// const { combineTableNames } = require('sequelize/lib/utils');
// const user  = require('../models/cidade.js')

// module.exports = {

//     async create(req,res)
//     {
//         const data = req.body;

//         const count = await user.count({where: {name : data.name}})
//         if (count > 0){
//             res.status(400).json({message: "An user with that name already exists."})
//         }
            
//         else{
//             await user.create({
//                 name : data.name,
//                 description : data.description
//             })

//             res.status(200).json({ message: "A new user has been created successfully!" });
//         }

//     }
// }
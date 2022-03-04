const mongoose = require(`mongoose`)

let productSchema = new mongoose.Schema(
      {
           id: {type: Number},
           title: {type: String,required:true},
           img: {type: String},
           price: {type: Number},
           inCart: {type: Boolean},
           count: {type: Number},
           total: {type: Number},
           material: {type: String},
           capacity: {type: Number},
           color:{type: String}

      },
   {
       collection: `store`
   })

module.exports = mongoose.model(`store`, productSchema)

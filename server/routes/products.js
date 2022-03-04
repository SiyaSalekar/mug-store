const router = require("express").Router()

const storeModel = require("../models/products")

// read all records

router.get(`/store`, async(req, res) =>
{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader("Access-Control-Allow-Origin","*")

  const data = await storeModel.find({});
  console.log(data);
  /*storeModel.find((error, data) =>
    {

        res.json(data)
    })*/
    res.json(data)
})


// Read one record
router.get(`/store/:id`,  (req, res) =>
{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader("Access-Control-Allow-Origin","*")
  storeModel.findById(req.params.id, (error, data) =>
    {
        res.json(data)
    })
})


// Add new record
router.post(`/store`, (req, res) =>
{

  // validate input
  const today = new Date();
  if(!/^[a-zA-Z]+$/.test(req.body.color))
  {
      res.json({errorMessage:`Color must be a string`}); 
  }
  else if(!/^[a-zA-Z]+$/.test(req.body.title))
  {
      res.json({errorMessage:`Title must be a string`});         
  }
  else // input is valid
  {    
      
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader("Access-Control-Allow-Origin","*")
      
  storeModel.create(req.body, (error, data) =>
            {
                res.json(data)
              })
            }
})


// Update one record
router.put(`/store/:id`, (req, res) =>
{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader("Access-Control-Allow-Origin","*")

  storeModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) =>
    {
        res.json(data)
    })
})


// Delete one record
router.delete(`/store/:id`, (req, res) =>
{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader("Access-Control-Allow-Origin","*")

  storeModel.findByIdAndRemove(req.params.id, (error, data) =>
    {
        res.json(data)
    })
})


router.delete(`/store`, (req, res) =>
{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader("Access-Control-Allow-Origin","*")

  storeModel.deleteMany((error, data) =>
    {
        res.json(data)
    })
})




module.exports = router

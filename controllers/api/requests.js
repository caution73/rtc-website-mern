const Request = require('../../models/Request')
const express = require('express')
const router = express.Router()


module.exports = {
    // index,
    create,
   
  };

router.get('/', async (req, res) => {
    console.log('Index Controller Func. running...');
    try {
      const foundRequest = await Request.find({})
      res.render('requests/Index', { requests: foundRequest});
    } catch (err) {
      res.status(400).send(err);
    }
  });

router.get('/new', (req, res) => {
  res.render('requests/New');
  });


  router.delete('/:id', async (req, res) => {
    try{
      await Request.findByIdAndDelete(req.params.id)
      res.redirect('/requests')
    }catch(err) {
      res.status(400).send(err)
    }
  });

  router.put('/:id', async (req,res) => {
    try{
      const updatedRequest = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
      console.log(updatedRequest);
      //console.log(requests);
      // redirect is making a GET request to whatever path you specify
      res.redirect(`/requests/${req.params.id}`);
    }catch (err) {
      res.status(400).send(err)
    }
  });

  async function create(req, res) {
    try {
      // Add the user to the database
      // then()
      const request = await Request.create(req.body)
      console.log("Here be the controller create request:", request)
      // Yes, we can use res.json to send back just a string
      // The client code needs to take this into consideration
      res.status(200).send("Success")
    } catch(err) {
      res.status(400).json(err)
    }
  }

  router.get("/:id/edit", async (req, res) => {
    try{
      // Finding the document that we are about to edit, then giving the Edit.jsx the found document via props.
      const foundRequest = await Request.findById(req.params.id)
      res.render("requests/Edit", {
        Request: foundRequest
      })
    }catch (err) {
      res.status(400).send(err)
    }
  })

  router.get('/:id', async (req, res) => {
    try {
      // We are using the id given to us in the URL params to 
      // query our database.
      const foundRequest = await Request.findById(req.params.id)
      res.render('requests/Show', {
        //second param must be an object
        Request: foundRequest
        //there will be a variable available inside the jsx file called Request, its value is requests[req.params.indexOfrequestsArray]
      });
    }catch(err) {
      res.status(400).send(err);
    }
  });

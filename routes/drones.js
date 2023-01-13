const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  try {
    const listOfDrones= await Drone.find({});
    console.log(listOfDrones);
    res.render("drones/list", {listOfDrones});
  } catch (err) {
    next(err);
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    res.render("drones/create-form");
  } catch (error) {
    next(error)
  }
  
});

router.post('/drones/create', async function(req, res, next) {
  // Iteration #3: Add a new drone
  const  {name, image, description, price} = req.body;
  try {
   await Drone.create({ name, image, description, price});
    // console.log(createdDrone);
  res.redirect("/drones");
} catch (error) {
  next(error)
  }
});

router.get('/drones/:droneId/edit', async function (req, res, next) {
  // Iteration #4: Update the drone
  // ... your code here
  const { droneId } = req.params;
  try {
    const droneEdit = await Drone.findById(droneId);
    res.render('drones/update-form', droneEdit );
  } catch (error) {
    next(error)
  }
});

router.post('/drones/:droneId/edit', async function (req, res, next)  {
  // Iteration #4: Update the drone
  // ... your code here

  const { name, image, description, price} = req.body;
  const { droneId } = req.params;
  try {
    await Drone.findByIdAndUpdate(droneId, { name, image, description, price} , { new: true });
    res.redirect('/drones');
  } catch (error) {
    next(error)
  }
});

router.post('/drones/:id/delete',async function (req , res, next)  {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  try {
    await Drone.findByIdAndDelete(id);
    res.redirect(`/drones`);
  } catch (error) {
    next(error)
  }
});

module.exports = router;

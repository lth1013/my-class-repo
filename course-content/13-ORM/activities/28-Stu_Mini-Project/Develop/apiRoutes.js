const router = require("express").Router();
const { Traveller, Location, Trip } = require("../../models");

router.get("/api/travellers", (req, res) => {
  Traveller.findAll({
    include: {
      attributes: ["id", "name", "email"],
    },
  })
    .then((dbTravellerData) => res.json(dbTravellerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/api/travellers", (req, res) => {
  Traveller.create({
    name: req.body.name,
    email: req.body.email,
  })
    .then((dbTravellerData) => res.json(dbTravellerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/api/travellers/:id", (req, res) => {
  Traveller.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      attributes: ["id", "name", "email"],
    },
  })
    .then((dbTravellerData) => {
      if (!dbTravellerData) {
        res.status(404).json({ message: "No traveller found with this id" });
        return;
      }
      res.json(dbTravellerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/api/travellers/:id", (req, res) => {
  Traveller.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTravellerData) => {
      if (!dbTravellerData) {
        res.status(404).json({ message: "No traveller found with this id" });
        return;
      }
      res.json(dbTravellerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/api/locations", (req, res) => {
  Location.findAll({
    include: {
      attributes: ["id", "location_name"],
    },
  })
    .then((dbLocationData) => res.json(dbLocationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/api/locations", (req, res) => {
  Location.create({
    location_name: req.body.location_name,
  })
    .then((dbLocationData) => res.json(dbLocationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/api/locations/:id", (req, res) => {
  Location.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      attributes: ["id", "location_name"],
    },
  })
    .then((dbLocationData) => {
      if (!dbLocationData) {
        res.status(404).json({ message: "No location found with this id" });
        return;
      }
      res.json(dbLocationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/api/locations/:id", (req, res) => {
  Location.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbLocationData) => {
      if (!dbLocationData) {
        res.status(404).json({ message: "No location found with this id" });
        return;
      }
      res.json(dbLocationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/api/trips", (req, res) => {
  Trip.create({
    trip_budget: req.body.trip_budget,
    traveller_amount: req.body.traveller_amount,
    traveller_id: req.body.traveller_id,
    location_id: req.body.location_id,
  })
    .then((dbTripData) => res.json(dbTripData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/api/trips/:id", (req, res) => {
  Trip.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTripData) => {
      if (!dbTripData) {
        res.status(404).json({ message: "No trip found with this id" });
        return;
      }
      res.json(dbTripData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

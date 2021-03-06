module.exports = { 
    getAll: (req, res, next) => {
        const dbInstance = req.app.get("db");
        dbInstance
          .get_inventory()
          .then((products) => res.status(200).send(products))
          .catch((err) => {
            res.status(500).send({ errorMessage: "We will get right on that!" });
            console.log(err);
          });
      },
      create: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { name, price, img } = req.body;
    
        dbInstance
          .create_product([name, price, img])
          .then(() => res.sendStatus(200))
          .catch((err) => {
            res.status(500).send({ errorMessage: "We will get right on that!" });
            console.log(err);
          });
      },   
      delete: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { id } = req.params;
        // console.log(id)
        dbInstance
          .delete_product(id)
          .then(() => res.sendStatus(200))
          .catch((err) => {
            res.status(500).send({ errorMessage: "We will get right on that!" });
            console.log(err);
          });
      },    
      update: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { params, query } = req;
        dbInstance
          .update_product([params.id, query.desc])
          .then(() => res.sendStatus(200))
          .catch((err) => {
            res.status(500).send({ errorMessage: "We will get right on that!" });
            console.log(err);
          });
      },
}

import express from "express";
import users from "./usersRoutes.js";
import progressos from "./progressosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ titulo: "funcionou o bd" });
    });

    app.use(express.json(), users, progressos);
};

export default routes;

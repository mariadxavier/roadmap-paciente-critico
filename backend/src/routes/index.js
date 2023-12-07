import express from "express";
import users from "./usersRoutes.js";
import lessons from "./lessonsRoutes.js";
import progressos from "./progressosRoutes.js";
import quiz from "./quizRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ titulo: "funcionou o bd" });
    });

    app.use(express.json(), users, progressos, lessons, quiz);
};

export default routes;

import express, { Express, Request, Response } from "express";

const app: Express = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => res.send({ msg: "hello" }));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

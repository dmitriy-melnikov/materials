import * as express from 'express';
import {Response} from "express";

const app = express();
const port = 3000;

class Validation {

}

app.get(`/`, (req, res: Response) => {
    const validation = new Validation();

    res.setHeader(validation, `value`)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

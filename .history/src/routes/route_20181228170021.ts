import * as express from 'express';

class route{

    public express = express()

}


const router = express.Router();

router.get('/', (req, res) => {
    res.json({   message: 'Hello World!' })
})


export const  route = this.express.use('/', router);
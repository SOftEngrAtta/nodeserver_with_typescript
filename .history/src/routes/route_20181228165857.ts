import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({   message: 'Hello World!' })
})


export default  route = this.express.use('/', router);
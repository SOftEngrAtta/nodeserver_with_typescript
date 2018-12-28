import * as express from 'express';

class route{

    public express = express();
    constructor(){
        this.onInit();
    }

    // function init when component load
    onInit():void{
        const router = express.Router()
        router.get('/', (req, res) => {
      
            res.json({   message: 'Hello World!' })
        })
    }
}


const router = express.Router();

router.get('/', (req, res) => {
    res.json({   message: 'Hello World!' })
})


export default new route().express
import * as express from 'express';

class route{

    public express = express();
    constructor(){
        this.onInit();
    }
    //asdsad

    // function init when component load
    onInit():void{
        const router = express.Router();

        // routing links 
        router.get('/', (req, res) => {
            res.json({   message: 'Hello World!' })
        });
        this.express.use('/', router)
    }
}


export default new route().express
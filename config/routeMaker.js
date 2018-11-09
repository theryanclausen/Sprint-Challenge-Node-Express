const express = require('express')


module.exports = (db, resource) =>{
    const sendError = (status, errorMessage, res) => {
        res.status(status).json({ error: errorMessage });
      };
    const route = express.Router()
    route.get('/', async (req,res) =>{
        try{
            const items = await db.get()
            res.json(items)
        }
        catch(err){
            sendError(500, `${resource}s could not be found.`, res)
        }
    })


    return route
}
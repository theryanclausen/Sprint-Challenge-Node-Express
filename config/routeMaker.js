const express = require("express");

module.exports = (db, resource) => {
  const sendError = (status, errorMessage, res) => {
    res.status(status).json({ error: errorMessage });
  };
  const route = express.Router();
  route.get("/", async (req, res) => {
    try {
      const items = await db.get();
      res.status(200).json(items);
    } catch (err) {
      sendError(500, `Server error. ${resource}s could not be found.`, res);
    }
  });

  route.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const item = await db.get(id);
      res.status(200).json(item);
    } catch (err) {
        sendError(404, `no ${resource} found at that id.`,res)
    }
  });
  if (db.getProjectActions) {
      route.get('/:id/actions', async (req,res) =>{
          try {
              const {id}= req.params;
              const actions = await db.getProjectActions(id)
              res.status(200).json(actions)
          }catch (err) {
            sendError(404, `no ${resource} found at that id.`,res)
        }
      })
  }
  route.post('/', async (req, res) =>{
      try{
        const body = req.body
        if (resource === 'project'){
            if (!body.name || !body.description){
                sendError(400, `Project must include name and description`, res)
                return;
            }
        }
        if (resource === 'action'){
            if (!body.project_id || !body.description || !body.notes){
                sendError(400, `Action must include project_id, description, and notes.`)
                return;
            }
        }
        const newItem = await db.insert(body)
        res.status(201).json(newItem)
      }
      catch(err){
          sendError(500, `${resource} could not be added.`, res)
      }
  })

  route.put('/:id', async (req, res) =>{
      try{
          const {id} = req.params;
          const body = req.body;
          const count = await db.update(id, body)
          if (!count){
              sendError(400, `${resource} was not altered`)
          }
          const updatedItem = await db.get(id)
          res.status(201).json(updatedItem)
      }
      catch(err){
          sendError(500, `${resource} could not be altered.`, res)
      }
  })

  route.delete('/:id', async (req,res)=>{
      try{
          const {id} = req.params;
          const item = await db.get(id);
          if (!item){
              sendError(400, `No ${resource} at that id.`, res)
              return
          }
          const count = await db.remove(id)
          if (count){
              res.status(200).json({"deleted": item})
          }
          

      }
      catch(err){
          sendError(500, `${resource} could not be removed.`, res )
      }
  })

  return route;
};

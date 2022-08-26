const server = require('./src/config/server').server;
const userModel = require('./src/models/Modeluser')




server.get('/userall', async (req, res, next) => {
    const result = await userModel.findAll()
    res.json(result)
    next()
})
server.get('/findoneuser/:id', async (req, res, next) => {
    const result = await userModel.findById(req.params.id)
    res.json(result)
    next()
})
server.post('/addnewuser', async (req, res, next) => {
    const result = await userModel.create(req.body)
    res.json(result)
    next()
})
server.put('/updateuser/:id', async (req, res, next) => {
    const result = await userModel.findByIdAndUpdate(req.params.id, req.body)
    res.json(result)
    next()
})
server.del('/deleteuser/:id', async (req, res, next) => {
    const result = await userModel.findByIdAndDelete(req.params.id)
    res.json(result)
    next()
})



server.listen(process.env.PORT,() => {
    console.log(`restify executando na port:${process.env.PORT}`);
});
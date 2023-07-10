const express = require('express');
const app = express();
const PORT = 8055;

// parsing json
app.use(express.json());

// opening port
app.listen(
    PORT,
    () => console.log(`working on localhost:${PORT}`)
)


// get call
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        color: 'blue',
        size: 'large'
    });
})

//post call
app.post('/tshirt/:id', (req,res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({message: 'we need a logo'})
    }

    res.send({
        tshirt: `shirt with your ${logo} and ID of ${id}`
    })
})
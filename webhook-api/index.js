import express from 'express';


const PORT = 8080;
const app = express();

app.use(express.json())


app.get('/new-user', (req, res) => {
    
    const user = req.body.user

    if(!user) res.status(400).json({status: "No user given."})

    
})  


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


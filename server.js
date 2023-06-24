const port = 8000
const express = require(`express`)
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()


const app = express()

app.use(cors())


app.get('/data', (req, res) => {  

    const searchPrams = req.query.q
        const options = {
            method: 'GET',
            url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
            params: { q: searchPrams },
            headers: {
            'X-RapidAPI-Key': process.env.VITE_KEY,
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
       };
       
        axios.request(options)
        .then(response => res.json(response.data.d)
        )
        .catch(error => console.error(error)
        );     
    

} )

app.listen(8000, () => console.log(`server is runing`))
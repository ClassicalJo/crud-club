const express = require("express");
const PORT = 8080;
const app = express();
const bodyParser = require("body-parser")
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const multer = require('multer');
const upload = multer({ dest: './server-data/images' });

app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/server-data/`))
app.use(cors())



app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/clubs', (req, res) => {
    const clubs = fs.readFileSync('./server-data/teams.json')
    res.setHeader('Content-Type', 'application/json')
    res.send(clubs)
})

app.get('/clubs/:clubId', (req, res) => {
    const clubs = fs.readFileSync('./server-data/teams.json')
    let data = JSON.parse(clubs)
    return res.send(data[req.params.clubId])
})

app.put('/clubs/:clubId', (req, res) => {
    const clubs = fs.readFileSync('./server-data/teams.json', { encoding: 'utf-8' })
    let data = JSON.parse(clubs)
    data[req.params.clubId] = req.body
    fs.writeFile('./server-data/teams.bak.json', JSON.stringify(data, null, 4), { encoding: "utf-8" }, () => {
        fs.rename('./server-data/teams.bak.json', './server-data/teams.json', () => {
            res.send(data)
        })
    })
})
app.delete('/clubs/:clubId', (req, res) => {
    const clubs = fs.readFileSync('./server-data/teams.json', { encoding: 'utf-8' })
    let data = JSON.parse(clubs)
    delete data[req.params.clubId]
    fs.writeFile('./server-data/teams.bak.json', JSON.stringify(data, null, 4), { encoding: "utf-8" }, () => {
        fs.rename('./server-data/teams.bak.json', './server-data/teams.json', () => {
            res.send(data)
        })
    })
})

app.post('/form', upload.single("crest"), (req, res) => {
    const clubs = fs.readFileSync('./server-data/teams.json', { encoding: 'utf-8' })
    let data = JSON.parse(clubs)
    console.log(req.body)
    let { areaId, areaCountry, name, shortName, tla, crestUrl, address, phone, website, email, founded, clubColors, venue } = { ...req.body }
    let newTeam = {
        id: Object.keys(data).length,
        area: {
            id: areaId,
            country: areaCountry
        },
        name, shortName, tla, crestUrl, address, phone, website, email, founded, clubColors, venue,
        lastUpdated: new Date()
    }
    data[newTeam.id] = newTeam
    fs.writeFile('./server-data/teams.bak.json', JSON.stringify(data, null, 4), { encoding: "utf-8" }, () => {
        fs.rename('./server-data/teams.bak.json', './server-data/teams.json', () => {
            res.status(200)
            res.redirect("/form")
        })
    })
})

app.post("/upload", upload.single("crest"), (req, res) => {
    res.send(`http://localhost:8080/images/${req.file.filename}`)
})



app.listen(8080);
console.log(`Listening on port ${PORT}`);

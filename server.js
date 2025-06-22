const express = require('express');
const multer = require('multer');
const app = express();
const cors = require('cors');
const PORT = process.env.port || 3000;

const upload = multer({ dest: 'uploads/'})

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.post('/api/file', upload.single('upfile'), (req, res) => {
    const { originalname, mimetype, size } = req.file;

    res.json({
        name: originalname,
        type: mimetype,
        size
    })
});

app.listen(PORT, () => {
    console.log(`Your App is listening on port ${PORT}`)
})


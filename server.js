const express = require('express');
const app = express();

// Port dinamis dari Azure, atau 8080 untuk lokal
const PORT = process.env.PORT || 8080;

// Endpoint baru /waktu
app.get('/waktu', (req, res) => {
    const waktuServer = new Date();
    
    res.status(200).json({
        status: "Success",
        waktu_server_utc: waktuServer.toISOString(),
        waktu_lokal_string: waktuServer.toString(),
        timestamp: waktuServer.getTime()
    });
});

// Perintah menyalakan server
app.listen(PORT, () => {
    console.log(`Server nyala di port ${PORT}`);
});

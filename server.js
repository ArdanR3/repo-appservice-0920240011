// Endpoint baru untuk mengembalikan waktu server
app.get('/waktu', (req, res) => {
    const waktuServer = new Date();
    
    res.status(200).json({
        status: "Success",
        waktu_server_utc: waktuServer.toISOString(),
        waktu_lokal_string: waktuServer.toString(),
        timestamp: waktuServer.getTime()
    });
});

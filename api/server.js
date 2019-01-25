const app = require('express')();
const cors = require('cors');
app.use(cors({ origin: 'http://192.168.0.106:4201', credentials:true}));
// http.use(cors());
const server=app.listen(3000,'192.168.0.106', () =>{
    console.log('Listening to port:  ' + 3000);
});
// const http= require('http').Server(app);
const io =require('socket.io').listen(server);

// io.set("origins","192.168.0.106:*");
io.on("connection", (socket) => {
    socket.on("add", add =>{
        io.emit("documents",true);
    })
})


const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

function generaNumero() {
  return Math.floor(Math.random() * 90) + 1;
}

function inviaNumero() {
  const numero = generaNumero();
  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(numero.toString());
    }
  });
}

server.on('connection', (client) => {
  console.log('nuovo client connesso');
});

setInterval(() => {
  inviaNumero();
}, 5000);

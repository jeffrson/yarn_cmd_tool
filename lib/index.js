const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
    nodeID: "server-1",
    transporter: "nats://nats.server:4222"
});

broker.start()
      .catch("Exception")

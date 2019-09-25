const mqtt = require('../mqtt/handler');
const { allWidgets } = require('../widgets');
const config = require('../config');

const connectAndSubscribe = () => {
  return allWidgets()
    .then(widgets => {
      const topics = widgets.map(widget => widget.topic);
      mqtt(config.mqttOptions, topics);
    });
};

module.exports = {
  connectAndSubscribe,
}
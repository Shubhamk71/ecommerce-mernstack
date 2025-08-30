const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AWx0BoyiQhRNSkBKdEiZVTLZ30scsbb-r0TP9lC90SdI_Jr7vlBRliyHfdh7NO8DdDVX14WYriK-TBm4",
  client_secret: "EDP3lJ4EnRohdmajE2ZzmIyS_Fb96EzRbNHo-hWqdF7eBYmSzhvmV9M5j9e6FkEdKFv-nRx5DSoRJpjy",
});

module.exports = paypal;
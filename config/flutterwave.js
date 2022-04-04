
var https = require("https");

var options = {
  "method": "POST",
  "hostname": "rest.cryptoapis.io",
  "path": "/v2/wallet-as-a-service/wallets/60c9d9921c38030006675ff6/bitcoin/testnet/addresses",
  "qs": {"context":"yourExampleString"},
  "headers": {
    "Content-Type": "application/json",
    "X-API-Key": "my-api-key"
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
    "context": "yourExampleString",
    "data": {
        "item": {
            "label": "yourLabelStringHere"
        }
    }
}));

req.end();
const Flutterwave = require('flutterwave-node-v3');

const flw = new Flutterwave(PUBLIC_KEY, SECRET_KEY  );


const initTrans = async () => {

    try {
        const payload = {
            "account_bank": "044", //This is the recipient bank code. Get list here :https://developer.flutterwave.com/v3.0/reference#get-all-banks
            "account_number": "0690000040",
            "amount": 200,
            "narration": "ionnodo",
            "currency": "NGN",
            "reference": "transfer-"+Date.now(), //This is a merchant's unique reference for the transfer, it can be used to query for the status of the transfer
            "callback_url": "https://webhook.site/b3e505b0-fe02-430e-a538-22bbbce8ce0d",
            "debit_currency": "NGN"
        }

        const response = await flw.Transfer.initiate(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}


initTrans();

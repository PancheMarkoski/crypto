import axios from "axios";
///v1/exchangerate/BTC?apikey=73034021-THIS-IS-SAMPLE-KEY
// AB1345A1-E84A-45EA-8089-19CC43A1A67C

// axios.get("https://rest.coinapi.io/v1/assets?filter_asset_id=BTC,ETH,XLM,XRP,ADA", { headers: {"X-CoinAPI-Key", "YOUR_API_KEY_GOES_HERE"}})

// export default axios.create({
//     baseURL: "http://api.coinlayer.com/api",
//     // headers: {
//     //     access_key: "70e384ed0892de7754c317a12e839992"
//     // }
// });

export default axios.create({
    baseURL: "https://rest.coinapi.io",
    headers: {
        "X-CoinAPI-Key": 'AB1345A1-E84A-45EA-8089-19CC43A1A67C '
    }
});

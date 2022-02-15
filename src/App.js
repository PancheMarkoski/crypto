import React, { useEffect } from "react"
import './sass/index.scss';
import { useDispatch } from 'react-redux'

import { setCrypto } from "./redux/setCrypto/setCtypto.action"
import coinapi from "./apis/coinapi"
import Home from "./pages/Home"

function App() {
  const dispatch = useDispatch();

  const fetchCrypto = async () => {
    const res = await coinapi
      .get("/v1/assets?filter_asset_id=BTC,ETH")


    dispatch(setCrypto(res.data))
  }

  useEffect(() => {
    fetchCrypto()
  }, []);


  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

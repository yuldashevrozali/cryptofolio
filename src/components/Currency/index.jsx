import React, { useState, useEffect } from 'react';
import './index.css';
import eye from '../../assets/eye.svg'

export default function Currency() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getCoinData() {
            try {
                let resp = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');
                let data = await resp.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getCoinData();
    }, []);

    console.log('Data:', data);

    return (
        <div className="currency">
            <div className="currency-flex">
                <h1>Cryptocurrency Prices by Market Cap</h1>
                <div className="currency-input">
                    <input type="text" placeholder='Search For a Crypto Currency..' />
                </div>
                <div>
                    <div className="table-top">
                        <p id = 'coin' >Coin</p>
                        <div className = "table-flex" >
                            <p>Price</p>
                            <p>24h Change</p>
                            <p>Market Cap</p>
                        </div>
                    </div>
                    {data.map((coin) => (
                        <div className="table-bottom">
                        <img src={coin.image} alt="" />
                        <div className="table-coin">
                            <h1>{coin.symbol}</h1>
                            <p>{coin.name}</p>
                        </div>
                        <div className="table-prices">
                            <p id = 'coin-price'>₹{coin.current_price}</p>
                            <p><img src={eye} alt="" />+3.59%</p>
                            <p>₹ 59,555,497M</p>
                        </div>
                    </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}

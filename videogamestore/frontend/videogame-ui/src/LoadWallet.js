import React, { useState } from 'react';
import './LoadWallet.css';

function LoadWallet({ loadCash }) {
    const [amount, setAmount] = useState('');

    // const [wallet, setWallet] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        loadCash(Number(amount));
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Amount:
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </label>
            <input type="submit" value="Load Wallet" />
        </form>
    );
}

export default LoadWallet;
"use client";
import React, { useState } from "react";

const currencyMultipliers: { [key: string]: number } = {
    usd: 100, // 1 USD = 100 cents
    eur: 100, // 1 EUR = 100 cents
    inr: 100, // 1 INR = 100 paise
    jpy: 1,   // 1 JPY = 1 yen (Japan does not use subunits)
    gbp: 100, // 1 GBP = 100 pence
};

const Convertecurrency = () => {
    const [amount, setAmount] = useState<number>(0);
    const [currency, setCurrency] = useState<string>("usd");
    const [convertedAmount, setConvertedAmount] = useState<number>(0);

    const convertToSubCurrency = (amount: number, currency: string): number => {
        const multiplier = currencyMultipliers[currency.toLowerCase()] || 100; // Default to 100
        return Math.round(amount * multiplier);
    };

    const handleConvert = () => {
        setConvertedAmount(convertToSubCurrency(amount, currency));
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Currency Converter</h2>

            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                placeholder="Enter Amount"
                className="w-full p-2 border border-gray-300 rounded-md mb-3"
            />

            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mb-3"
            >
                <option value="usd">USD (Dollars)</option>
                <option value="eur">EUR (Euros)</option>
                <option value="inr">INR (Indian Rupees)</option>
                <option value="jpy">JPY (Japanese Yen)</option>
                <option value="gbp">GBP (British Pounds)</option>
            </select>

            <button
                onClick={handleConvert}
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            >
                Convert
            </button>

            {convertedAmount > 0 && (
                <p className="mt-4 text-lg font-bold">
                    Converted Amount: <span className="text-green-600">{convertedAmount}</span> subunits
                </p>
            )}
        </div>
    );
};

export default Convertecurrency;

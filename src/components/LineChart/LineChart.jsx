import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

function LineChart({ HistoricalData }) {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        if (HistoricalData && HistoricalData.prices) {
            const dataCopy = [["Date", "Prices"]];
            HistoricalData.prices.forEach((item) => {
                const date = new Date(item[0]);
                if (!isNaN(date)) {
                    dataCopy.push([date, item[1]]);
                }
            });
            setData(dataCopy);
        }
    }, [HistoricalData]);

    return (
        <Chart
            chartType="LineChart"
            data={data}
            width="100%"
            height="400px"
            options={{ legend: { position: 'bottom' } }}
        />
    );
}

export default LineChart;

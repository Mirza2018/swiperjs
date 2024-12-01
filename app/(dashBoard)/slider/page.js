import GetSlideData from '@/app/Api/sliderApi';
import React from 'react';

const Sliderage = async () => {
    try {
        const data = await GetSlideData();

        return (
            <div>
                {data && data.length > 0 ? (
                    <div>
                        <h1>Slider Data</h1>
                        <ul>
                            {data.map((item, index) => (
                                <li key={index}>{JSON.stringify(item)}</li>
                            ))}
                        </ul>
                        <p>Total items: {data.length}</p>
                    </div>
                ) : (
                    <div>No Data Found</div>
                )}
            </div>
        );
    } catch (error) {
        return <div>Error loading data: {error.message}</div>;
    }
};

export default Sliderage;

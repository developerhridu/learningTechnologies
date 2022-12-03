import {useState} from 'react';

const HomeBanner = () => {

    const [color, setColor] = useState("blue");
    return (
        <div>

            <h1>This is Blue</h1>

        </div>
    );
};

export default HomeBanner;
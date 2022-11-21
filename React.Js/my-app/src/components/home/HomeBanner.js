import React from 'react';

const HomeBanner = (props) => {
    return (
        <div>

            {/* passing props from homepage*/}
            <h1>{props.title}</h1>
            <h1>{props.subtitle}</h1>

        </div>
    );
};

export default HomeBanner;
import React from 'react';

const Logo = () => {
    return (
        <div className="logo mb-5 h-20 sm:mb-0">
            <a href="/">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 344 244"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlSpace="preserve"
                    xmlnsserif="http://www.serif.com"
                    style={{
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        strokeLinecap: 'square',
                        strokeMiterlimit: '2',
                    }}
                >
                    <rect
                        id="Artboard1"
                        x="-36.813"
                        y="-77.199"
                        width="416.667"
                        height="416.667"
                        style={{ fill: '#090000' }}
                    />
                    <path
                        d="M61.625,91.759l102.881,89.375l116.911,-101.563l-60.794,-60.937l-56.117,-0l0,162.5l0,-162.5l-60.793,-0"
                        style={{ fill: 'none', stroke: '#fff', strokeWidth: '16.67px' }}
                    />
                    <text
                        x="-0.548px"
                        y="243.314px"
                        style={{ fontFamily: 'WalkwaySemiBold', fontSize: '45.686px', fill: '#fff' }}
                    >
                        JAMES
                    </text>
                    <text
                        x="149.378px"
                        y="243.314px"
                        style={{ fontFamily: 'WalkwayUltraBold', fontSize: '45.686px', fill: '#fff' }}
                    >
                        DARRIGO
                    </text>
                </svg>
            </a>
        </div>
    );
};

export default Logo;

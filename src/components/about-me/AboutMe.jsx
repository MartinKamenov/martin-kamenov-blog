import React from 'react';

import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='center-container about-me-container'>
            <h1>Martin Kamenov</h1>
            <img alt='my-profile' className='porfolio-image' src='https://avatars3.githubusercontent.com/u/24592428?s=460&v=4'/>
            <div>
                <h2 style={{ fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}>Experience</h2>
                <div className='row'>
                    <div className='col-md-4 col-sm-6 company-container'>
                        <h4 className='company-name'>Deutsche Telekom</h4>
                        <img
                            alt='company-logo'
                            className='company-logo'
                            src='https://thumbor.forbes.com/thumbor/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fcompanies%2Fdeutsche-telekom_416x416.jpg'/>
                        <div className='company-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 company-container'>
                        <h4 className='company-name'>Infragistics</h4>
                        <img
                            alt='company-logo'
                            className='company-logo'
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADXCAMAAADMbFYxAAAAY1BMVEUAmf////8Al/8Alf+Syv9etP8Ak/8AkP+Jx//G4P+czP8ppP8anv/v+f+s0/9csP/P6f/y+v8Am/9Orv90vv/G4/+Dw/8+qf+43f9ktv/W7P/k9P9/wP/B5P+Gxv9uuf+u2P/iUYuXAAACyElEQVR4nO3d7XaaQBRGYWdASKvGoPGjSdp4/1fZ9p+LRjjSAzO87v1/DM/CIajJcbGMi8coLhdYBcOqGVbNsGqGVTOsmmHVDKtmWDXDqhlWzbBqhlUzrJph1QyrZlg1M1pjYWnAkgHFoefGZo370tL1A8WtacmAXrfruipuHuv/WosyWKqul3w3LRlWczjuqrtPr9H6lJf1b4dTdfN41ax/tKv7tHO2hlDWj2MNL7s7du3MraFZ2bFzt4Zgx87f2qyt2Plbw8Z6XyFgDWfj1VjBGoyvXiSsxmexhDUcTVgN68Z0s6hhDT8sO1bEerCcWBFrMFBlrHvLG0ki1tJwJVaxng0bVsX69kDWd8M9sYq1eSBrwIoVK9ZbYZ0mrFixYr0V1mlys8bls6HL9QNZrM1+a+hzWuuAv/mxWDdFNLSa2Hp/JqvpJ2PF2hlWh7Bi7Q4r1s6wOjRfa6wNaVjjsdn0t5aw2l6/YsWKFStWrFixYsWKFStWrFixYsWKdSJrI2KNH28vff0UsS5i1Z+FOgerW1ixdoa1HVas7mHF2hnWdlixuocVa2dY22HF6h5WrJ1hbYcVq3tYsXaGtR3WdgvDJ3MDWudoPXwbpUOO1qRhxYoVa45hxYoVa45hHWL9lZrSm9//5n+kpvTmZ7XNPEuZn/WUmtKb3yyNKjWlN0frW2pLX37W4jm1pS/HeTDZb1jHOT/Ve2pMT47W7O+cPOc3xSa1pjtPa+63ia5zuTLfsa7WzC/FvvPWqqwvT86z5epLalBH3nP0qnNq0e3cZwZmfGb95yPW2e7ZEWZBVqdMf/WMMfcyVmVq1peNM+Oz2JWb1LJ/G2ueaVFtL7k9lceb3RqLend6fSrzye07Fr9eavuCg4myHPBYM3kzDKtmWDXDqhlWzbBqhlUzrJph1QyrZlg1w6oZVs2waoZVM6yaYdUMq2Zx+RuwqX2xvnk+egAAAABJRU5ErkJggg=='/>
                        <div className='company-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 company-container'>
                        <h4 className='company-name'>Irida estates</h4>
                        <img
                            alt='company-logo'
                            className='company-logo'
                            src='https://www.xn--b1acnacuoto8b3byd.bg/sites/default/files/imotivgrciya.png'/>
                        <div className='company-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
 
export default AboutMe;
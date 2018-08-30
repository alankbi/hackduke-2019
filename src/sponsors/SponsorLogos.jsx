import React from 'react';
import styled from 'react-emotion';

import AppianLogo from './img/appian.jpg';
import ScimedLogo from './img/scimed.png';
import WolframLogo from './img/wolfram.svg';

import FuquaLogo from './img/fuqua.jpg';
import PrattLogo from './img/pratt.jpg';
import IIDLogo from './img/iid.jpg';

import GlobalBankersLogo from './img/gbankers.png';
import FifteenSeventeenLogo from './img/1517.png';

const LogoRow = styled('div')`
    display: flex;
    padding-bottom: 60px;
`;

const LogoWrapper = styled('div')`
    flex-grow: 1;
    flex-basis: 0;
    height: 108px;
    text-align: center;
`;

const LogoImage = styled('img')`
    max-width: 100%;
    max-height: 100%;
    padding: 8px;
`;

const Logo = ({ src }) => (
    <LogoWrapper>
        <LogoImage src={src} />
    </LogoWrapper>
);

export default () => (
    <React.Fragment>
        <LogoRow>
            <Logo src={AppianLogo} />
            <Logo src={ScimedLogo} />
            <Logo src={WolframLogo} />
        </LogoRow>
        <LogoRow>
            <Logo src={FuquaLogo} />
            <Logo src={PrattLogo} />
            <Logo src={IIDLogo} />
        </LogoRow>
        <LogoRow>
            <Logo src={GlobalBankersLogo} />
            <Logo src={FifteenSeventeenLogo} />
        </LogoRow>
    </React.Fragment>
);

import React from 'react';

export default function LogoHeader(props: any) {
    let { style, logoType, ...otherProps } = props
    return <img loading='lazy' alt="logo"
        src={require(`assets/images/svgs/Logo_Header.svg`).default}
        style={style}
        {...otherProps} />
}

/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from "@wordpress/element";
import { dispatch, useDispatch, useSelect } from "@wordpress/data";
import { ButtonGroup, Button, Icon } from "@wordpress/components";

import { styles } from './device-switcher-styles';

export function DeviceSwitcher() {
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());

    const [ device, setDevice ] = useState(currentDevice);

    const onClickHandler = (device) => {
        setDevice(device);

        const deviceCapitalized = device.charAt(0).toUpperCase() + device.slice(1);
        dispatch('core/edit-post').__experimentalSetPreviewDeviceType(deviceCapitalized);
    }

    useEffect(() => {
        setDevice(currentDevice);
    }, [currentDevice]);

    return (
        <ButtonGroup css={styles.buttonGroup} className="atblocks-component-device-switcher">
            <Button 
                css={styles.button}
                className={ device === 'desktop' ? 'is-active' : '' } 
                onClick={ () => onClickHandler('desktop') }
            >
                <Icon 
                    css={styles.icon}
                    icon={
                        <svg width="15" height="15" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" height="24" rx="2" ry="2" width="30" x="1" y="1"/>
                            <polygon fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="21 31 11 31 12 25 20 25 21 31"/>
                            <line fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9" x2="23" y1="31" y2="31"/>
                            <line fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="1" x2="31" y1="21" y2="21"/>
                        </svg>
                    } 
                />
            </Button>
            <Button 
                css={styles.button}
                className={ device === 'tablet' ? 'is-active' : '' } 
                onClick={() => onClickHandler('tablet')}
            >
                <Icon 
                    css={styles.icon}
                    icon={
                        <svg width="15" height="15" viewBox="-4 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" height="30" rx="2" ry="2" width="22" x="5" y="1"/>
                            <line fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14" x2="18" y1="27" y2="27"/>
                        </svg>
                    } 
                />
            </Button>
            <Button 
                css={styles.button}
                className={ device === 'mobile' ? 'is-active' : '' } 
                onClick={() => onClickHandler('mobile')}
            >
                <Icon 
                    css={styles.icon}
                    icon={
                        <svg width="15" height="15" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" height="30" rx="2" ry="2" width="18" x="7" y="1"/>
                            <line fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="15" x2="17" y1="27" y2="27"/>
                            <path fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20,1V3a2,2,0,0,1-2,2H14a2,2,0,0,1-2-2V1"/>
                        </svg>
                    } 
                />
            </Button>
        </ButtonGroup>
    );
};
/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import {
    BaseControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption, 
} from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

import { styles } from './styles';

export function RadioButtons( props ) {
    const { label, options, defaultValue, responsive, reset, hidden, onChange, onClickReset } = props;
    const [ value, setValue ] = useState( defaultValue );

    useEffect(() => {
        setValue( defaultValue );
    }, [ defaultValue ]);

    if ( hidden ) {
        return null;
    }

    return(
        <BaseControl css={styles.wrapper} className="atblocks-component-radio-buttons">
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
                {
                    responsive && (
                        <DeviceSwitcher />
                    )
                }
                {
                    reset && (
                        <ResetValues 
                            onClick={ onClickReset }
                        />
                    )
                }
            </div>
            <ToggleGroupControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                label=""
                className="atblocks-radio-buttons"
                isBlock
                onChange={onChange}
                value={value}
            >
                {
                    options.map( ( option, index ) => {
                        return(
                            option.icon ? (
                                <ToggleGroupControlOptionIcon
                                    key={index}
                                    icon={option.icon}
                                    label={option.label}
                                    value={option.value}
                                />
                            ) : (
                                <ToggleGroupControlOption
                                    key={index}
                                    label={option.label}
                                    value={option.value}
                                />
                            )
                        );
                    })
                }            
            </ToggleGroupControl>
        </BaseControl>
    );
}
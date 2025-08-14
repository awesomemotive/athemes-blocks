/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { BaseControl, Tooltip } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

import { styles } from './styles';

export function RadioImages( props ) {
    const { label, options, defaultValue, responsive, reset, hidden, onChange, onClickReset } = props;
    const [ value, setValue ] = useState( defaultValue );
    const siteUrl = useSelect( ( select ) => select( 'core' ).getSite()?.url );

    useEffect(() => {
        setValue( defaultValue );
    }, [ defaultValue ]);

    if ( hidden ) {
        return null;
    }

    const optionOnClickHandler = ( value ) => {
        setValue( value );
        onChange( value );
    }

    const optionKeyDownHandler = ( e, value ) => {
        if ( e.key === 'Enter' || e.key === ' ' ) {
            optionOnClickHandler( value );
        }
    }

    return(
        <BaseControl className="atblocks-component-radio-images" css={styles.wrapper}>
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
            <div className="atblocks-component-radio-images__wrapper">
                {
                    options.map( ( option, index ) => {
                        return(
                            <Tooltip text={option.label} key={index}>
                                <div className={`atblocks-component-radio-images__option ${value === option.value ? 'is-selected' : ''}`} onClick={() => optionOnClickHandler( option.value )} tabIndex={0} onKeyDown={(e) => optionKeyDownHandler( e, option.value )}>
                                    { option.image }
                                </div>
                            </Tooltip>
                        );
                    })
                }
            </div>
        </BaseControl>
    );
}
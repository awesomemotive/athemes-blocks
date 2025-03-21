import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { BaseControl, ToggleControl } from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

export function SwitchToggle( props ) {
    const { label, value, responsive, reset, onChange, onClickReset } = props;

    return(
        <BaseControl>
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
            
            <ToggleControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                label=""
                checked={value}
                onChange={onChange}
            />
        </BaseControl>
    );
}
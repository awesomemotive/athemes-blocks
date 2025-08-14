import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { BaseControl, SelectControl, FocalPointPicker } from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

export function FocalPointer( props ) {
    const { label, value, url, responsive, reset, onChange, onClickReset } = props;

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
            
            <FocalPointPicker
                url={ url }
                value={ value }
                onChange={onChange}
                onDrag={() => {}}
                onDragEnd={() => {}}
                onDragStart={() => {}}
            />
        </BaseControl>
    );
}
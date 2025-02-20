import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { store as deviceSwitcherStore } from '../store/device-switcher-store';
import { 
    BaseControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption, 
} from '@wordpress/components';
import {
    DeviceSwitcher
} from '../controls-auxiliary/device-switcher/device-switcher-control';


export function RadioButtons( props ) {
    const { label, options, defaultValue, responsive, onChange } = props;
    const [ value, setValue ] = useState( defaultValue );

    useEffect(() => {
        setValue( defaultValue );
    }, [ defaultValue ]);

    return(
        <BaseControl>
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
                {
                    responsive && (
                        <DeviceSwitcher />
                    )
                }
            </div>
            <ToggleGroupControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                className="atblocks-radio-buttons"
                isBlock
                onChange={onChange}
                value={value}
            >
                {
                    options.map( ( option, index ) => {
                        return(
                            <ToggleGroupControlOption
                                key={index}
                                label={option.label}
                                value={option.value}
                            />
                        );
                    })
                }            
            </ToggleGroupControl>
        </BaseControl>
    );
}
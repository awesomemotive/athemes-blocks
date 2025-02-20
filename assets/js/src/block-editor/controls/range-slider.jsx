import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { store as deviceSwitcherStore } from '../store/device-switcher-store';
import { 
    BaseControl,
    RangeControl,
} from '@wordpress/components';
import { DeviceSwitcher } from '../controls-auxiliary/device-switcher/device-switcher-control';
import { UnitSwitcher } from '../controls-auxiliary/unit-switcher/unit-switcher-control';
import { ResetValues } from '../controls-auxiliary/reset-values/reset-values-control';

export function RangeSlider( props ) {
    const { label, description, options, defaultValue, min, max, responsive, units, reset, onChange, onChangeUnit, onClickReset } = props;
    const [ value, setValue ] = useState( defaultValue.value );
    const [ valueUnit, setValueUnit ] = useState( defaultValue.unit );

    useEffect(() => {
        setValue( defaultValue.value );
        setValueUnit( defaultValue.unit );
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
                {
                    units && (
                        <UnitSwitcher
                            units={units}
                            value={valueUnit}
                            onChange={ onChangeUnit }
                        />
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
            
            <RangeControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                help={description}
                initialPosition={ value }
                value={value}
                label=""
                max={max}
                min={min}
                onBlur={() => {}}
                onChange={onChange}
                onFocus={() => {}}
                onMouseLeave={() => {}}
                onMouseMove={() => {}}
            />
        </BaseControl>
    );
}
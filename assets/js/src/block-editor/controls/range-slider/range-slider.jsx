import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { 
    BaseControl,
    RangeControl,
} from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { UnitSwitcher } from '../../controls-auxiliary/unit-switcher/unit-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

export function RangeSlider( props ) {
    let { label, description, options, defaultValue, defaultUnit, min, max, responsive, units, reset, onChange, onChangeUnit, onClickReset } = props;
    const [ value, setValue ] = useState( defaultValue );
    const [ valueUnit, setValueUnit ] = useState( defaultUnit );

    // Depending on the unit, the max value should be 100.
    if ( valueUnit === '%' || valueUnit === 'vw' || valueUnit === 'vh' ) {
        max = 100;
    }

    useEffect(() => {
        setValue( defaultValue );
        setValueUnit( defaultUnit );
    }, [ defaultValue, defaultUnit ]);

    return(
        <BaseControl className="atblocks-component-range-slider">
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
                {
                    units && (
                        <UnitSwitcher
                            units={units}
                            value={valueUnit}
                            onChange={ onChangeUnit }
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
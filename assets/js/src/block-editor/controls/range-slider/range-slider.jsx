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
    let { label, description, options, defaultValue, defaultUnit, min, max, step, responsive, units, reset, onChange, onChangeUnit, onClickReset } = props;
    const [ value, setValue ] = useState( defaultValue );
    const [ valueUnit, setValueUnit ] = useState( defaultUnit );

    // Depending on the unit, the max value should be 100.
    if ( valueUnit === '%' || valueUnit === 'vw' || valueUnit === 'vh' ) {
        max = 100;
    }

    // Some controls needs to have different min/max values for each unit.
    // This is the object data structure accepted: 
    // {
    //     px: 150,
    //     em: 10,
    //     rem: 10,
    // }
    if ( typeof max === 'object' && max !== null ) {
        if ( max.px && valueUnit === 'px' ) {
            max = max.px;
        }
        
        if ( max.em && valueUnit === 'em' ) {
            max = max.em;
        }

        if ( max.rem && valueUnit === 'rem' ) {
            max = max.rem;
        }
    }

    if ( typeof min === 'object' && min !== null ) {
        if ( min.px && valueUnit === 'px' ) {
            min = min.px;
        }

        if ( min.em && valueUnit === 'em' ) {
            min = min.em;
        }

        if ( min.rem && valueUnit === 'rem' ) {
            min = min.rem;
        }

        if ( min.vw && valueUnit === 'vw' ) {
            min = min.vw || 1;
        }

        if ( min.vh && valueUnit === 'vh' ) {
            min = min.vh || 1;
        }

        if ( min.percent && valueUnit === '%' ) {
            min = min.percent || 1;
        }
    }

    // Step.
    if ( ! step ) {
        step = 1;
    }

    if ( valueUnit === 'em' || valueUnit === 'rem' ) {
        step = 0.1;
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
                step={step}
                onBlur={() => {}}
                onChange={onChange}
                onFocus={() => {}}
                onMouseLeave={() => {}}
                onMouseMove={() => {}}
            />
        </BaseControl>
    );
}
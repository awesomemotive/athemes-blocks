/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { BaseControl, __experimentalNumberControl as NumberControl, Button } from '@wordpress/components';
import { Icon, link, linkOff } from '@wordpress/icons';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { UnitSwitcher } from '../../controls-auxiliary/unit-switcher/unit-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

import { styles } from './styles';

export function Dimensions( props ) {
    const { label, value, defaultUnit, directionsValue, directions, connect, responsive, units, reset, onChange, onChangeUnit, onClickReset } = props;
    const [ inputNumberValues, setInputNumberValues ] = useState( directionsValue );
    const [ valueUnit, setValueUnit ] = useState( defaultUnit );
    const [ valueToReturn, setValueToReturn ] = useState(value);
    const [ isConnected, setIsConnected ] = useState( connect );

    const onChangeNumberInput = ( direction, newValue ) => {
        const directionKey = direction.value;

        setInputNumberValues( {
            ...inputNumberValues,
            [directionKey]: newValue
        } );

        if( isConnected ) {
            setValueToReturn( {
                ...value,
                value: {
                    top: newValue,
                    right: newValue,
                    bottom: newValue,
                    left: newValue
                },
                unit: valueUnit,
                connect: true
            } );
        } else {
            setValueToReturn( {
                ...value,
                value: {
                    ...inputNumberValues,
                    [directionKey]: newValue
                },
                unit: valueUnit,
                connect: false
            } );
        }
    }

    const onClickConnectValuesToggle = () => {
        setIsConnected( ! isConnected );

        if( isConnected ) {
            setValueToReturn( {
                ...value,
                value: {
                    top: inputNumberValues.top,
                    right: inputNumberValues.top,
                    bottom: inputNumberValues.top,
                    left: inputNumberValues.top
                },
                unit: valueUnit,
                connect: false
            } );
        } else {
            setValueToReturn( {
                ...value,
                value: {
                    top: inputNumberValues.top,
                    right: inputNumberValues.right,
                    bottom: inputNumberValues.bottom,
                    left: inputNumberValues.left
                },
                unit: valueUnit,
                connect: true
            } );
        }
    }

    // Update directionsValue, the input number values.
    useEffect( () => {
        setInputNumberValues( directionsValue );
        setValueUnit( defaultUnit );
    }, [ value, defaultUnit ] );

    // Update the value to return to the main control.
    // It must return an object with the value with this data structure:
    // {
    //     value: {
    //         top: 0,
    //         right: 0,
    //         bottom: 0,
    //         left: 0
    //     },
    //     unit: 'px'
    // }
    useEffect( () => {
        onChange( valueToReturn );
    }, [ valueToReturn ] );

    return(
        <BaseControl className="atblocks-control-dimensions">
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
            
            <div css={styles.control} className="atblocks-dimensions-control">
                <div css={styles.inputWrapper} className="atblocks-dimensions-control__input-wrapper">
                    {
                        directions.map( ( direction, index ) => {
                            const directionKey = direction.value;

                            return(
                                <div key={index} css={styles.inputItem} className="atblocks-dimensions-control__input-item">
                                    <NumberControl
                                        __next40pxDefaultSize
                                        label=""
                                        onChange={ ( newValue ) => onChangeNumberInput( direction, newValue ) }
                                        value={ inputNumberValues[directionKey] }
                                    />
                                    <label css={styles.inputLabel} className="atblocks-dimensions-control__input-label">{ direction.label }</label>
                                </div>
                            );
                        } )
                    }
                </div>
                <div css={styles.connectValuesToggle} className="atblocks-dimensions-control__connect-values-toggle">
                    <Button
                        className={ isConnected ? 'is-active' : '' }
                        icon={ isConnected ? link : linkOff }
                        label=""
                        onClick={onClickConnectValuesToggle}
                    />
                </div>
            </div>
        </BaseControl>
    );
}
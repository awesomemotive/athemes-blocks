import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";

import { BaseControl, TextControl, SelectControl } from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';
import { Dimensions } from '../dimensions/dimensions';
import { Select } from '../select/select';
import { ColorPicker } from '../../../block-editor/controls/color-picker/color-picker';

import { createInnerControlAttributeUpdater } from '../../../utils/block-attributes';

import { getInnerSettingDefaultValue, getInnerSettingDefaultUnit } from '../../../utils/settings';

export function Border( props ) {
    const { label, settingId, attributes, setAttributes, attributesDefaults, setUpdateCss, subFields } = props;
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
    const { 
        borderStyle, 
        borderWidth,
        borderRadius,
        borderColor,
    } = attributes[settingId].innerSettings;

    const updateInnerControlAttribute = createInnerControlAttributeUpdater( settingId, attributes, setAttributes);

    return(
        <BaseControl>
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
            </div>
            
            {
                ( subFields && subFields.includes('borderStyle') ) && (
                    <Select
                        label={ __( 'Style', 'athemes-blocks' ) }
                        options={[
                            { label: __( 'Default', 'athemes-blocks' ), value: 'default' },
                            { label: __( 'None', 'athemes-blocks' ), value: 'none' },
                            { label: __( 'Solid', 'athemes-blocks' ), value: 'solid' },
                            { label: __( 'Dashed', 'athemes-blocks' ), value: 'dashed' },
                            { label: __( 'Dotted', 'athemes-blocks' ), value: 'dotted' },
                            { label: __( 'Double', 'athemes-blocks' ), value: 'double' },
                            { label: __( 'Groove', 'athemes-blocks' ), value: 'groove' },
                            { label: __( 'Ridge', 'athemes-blocks' ), value: 'ridge' },
                            { label: __( 'Outset', 'athemes-blocks' ), value: 'outset' },
                            { label: __( 'Hidden', 'athemes-blocks' ), value: 'hidden' },
                        ]}
                        value={ borderStyle.default[currentDevice].value }
                        responsive={true}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'borderStyle', value, currentDevice );
                            
                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderStyle',
                                value: value,
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'borderStyle', attributesDefaults[settingId].default.innerSettings.borderStyle.default[currentDevice].value, currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderStyle',
                                value: getInnerSettingDefaultValue( settingId, 'borderStyle', currentDevice, attributesDefaults ),
                            } );
                        } }
                    />
                )
            }
            {
                ( borderStyle.default[currentDevice].value !== 'none' && borderStyle.default[currentDevice].value !== 'default' && subFields && subFields.includes('borderWidth') ) && (
                    <Dimensions
                        label={ __( 'Width', 'athemes-blocks' ) }
                        directions={[
                            { label: __( 'Top', 'athemes-blocks' ), value: 'top' },
                            { label: __( 'Right', 'athemes-blocks' ), value: 'right' },
                            { label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
                            { label: __( 'Left', 'athemes-blocks' ), value: 'left' },
                        ]}
                        value={ borderWidth.default[currentDevice].value }
                        defaultUnit={ borderWidth.default[currentDevice].unit }
                        directionsValue={ borderWidth.default[currentDevice].value }
                        connect={borderWidth.default[currentDevice].connect}
                        responsive={ true }
                        units={['px']}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'borderWidth', value, currentDevice );
                            
                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderWidth',
                                value: value,
                            } );
                        } }
                        onChangeUnit={ ( value ) => {
                            updateInnerControlAttribute( 'borderWidth', {
                                value: borderWidth.default[currentDevice].value,
                                unit: value
                            }, currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderWidth',
                                value: value,
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'borderWidth', {
                                value: getInnerSettingDefaultValue( settingId, 'borderWidth', currentDevice, attributesDefaults ),
                                unit: getInnerSettingDefaultUnit( settingId, 'borderWidth', currentDevice, attributesDefaults )
                            }, currentDevice ); 

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderWidth',
                                value: getInnerSettingDefaultValue( settingId, 'borderWidth', currentDevice, attributesDefaults ),
                            } );
                        } }
                    />
                )
            }
            {
                ( borderStyle.default[currentDevice].value !== 'default' && subFields && subFields.includes('borderRadius') ) && (
                    <Dimensions
                        label={ __( 'Radius', 'athemes-blocks' ) }
                        directions={[
                            { label: __( 'Top', 'athemes-blocks' ), value: 'top' },
                            { label: __( 'Right', 'athemes-blocks' ), value: 'right' },
                            { label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
                            { label: __( 'Left', 'athemes-blocks' ), value: 'left' },
                        ]}
                        value={ borderRadius.default[currentDevice].value }
                        defaultUnit={ borderRadius.default[currentDevice].unit }
                        directionsValue={ borderRadius.default[currentDevice].value }
                        connect={borderRadius.default[currentDevice].connect}
                        responsive={ true }
                        units={['px']}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'borderRadius', value, currentDevice );
                            
                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderRadius',
                                value: value,
                            } );
                        } }
                        onChangeUnit={ ( value ) => {
                            updateInnerControlAttribute( 'borderRadius', {
                                value: borderRadius.default[currentDevice].value,
                                unit: value
                            }, currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderRadius',
                                value: value,
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'borderRadius', {
                                value: getInnerSettingDefaultValue( settingId, 'borderRadius', currentDevice, attributesDefaults ),
                                unit: getInnerSettingDefaultUnit( settingId, 'borderRadius', currentDevice, attributesDefaults )
                            }, currentDevice ); 

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderRadius',
                                value: getInnerSettingDefaultValue( settingId, 'borderRadius', currentDevice, attributesDefaults ),
                            } );
                        } }
                    />
                )
            }
            {
                ( borderStyle.default[currentDevice].value !== 'none' && borderStyle.default[currentDevice].value !== 'default' && subFields && subFields.includes('borderColor') ) && (
                    <ColorPicker
                        label={ __( 'Color', 'athemes-blocks' ) }
                        value={ borderColor.default[currentDevice].value }
                        hover={true}
                        responsive={true}
                        reset={true}
                        defaultStateOnChangeComplete={ ( value ) => {
                            updateInnerControlAttribute( 'borderColor', {
                                defaultState: value.hex,
                                hoverState: borderColor.default[currentDevice].value.hoverState
                            }, currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderColor',
                                value: borderColor.default[currentDevice].value.defaultState
                            } );                          
                        } }
                        hoverStateOnChangeComplete={ ( value ) => {
                            updateInnerControlAttribute( 'borderColor', {
                                defaultState: borderColor.default[currentDevice].value.defaultState,
                                hoverState: value.hex
                            }, currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderColor',
                                value: borderColor.default[currentDevice].value.hoverState
                            } );                           
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'borderColor', {
                                value: getInnerSettingDefaultValue( settingId, 'borderColor', currentDevice, attributesDefaults ),
                            }, currentDevice ); 

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderColor',
                                value: getInnerSettingDefaultValue( settingId, 'borderColor', currentDevice, attributesDefaults ),
                            } );                            
                        } }
                    />
                )
            }
        </BaseControl>
    );
}
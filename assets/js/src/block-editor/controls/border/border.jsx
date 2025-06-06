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
    const { label, labelPosition, settingId, attributes, setAttributes, attributesDefaults, setUpdateCss, subFields } = props;
    const { 
        borderStyle, 
        borderWidth,
        borderRadius,
        borderColor,
    } = attributes[settingId].innerSettings;

    const borderStyleValue = borderStyle.default['desktop'].value;
    const borderWidthValue = borderWidth.default['desktop'].value;
    const borderWidthUnit = borderWidth.default['desktop'].unit;
    const borderWidthConnect = borderWidth.default['desktop'].connect;
    const borderRadiusValue = borderRadius.default['desktop'].value;
    const borderRadiusUnit = borderRadius.default['desktop'].unit;
    const borderRadiusConnect = borderRadius.default['desktop'].connect;
    const borderColorValue = borderColor.default['desktop'].value;

    const updateInnerControlAttribute = createInnerControlAttributeUpdater( settingId, attributes, setAttributes);

    return(
        <BaseControl>
            {
                labelPosition !== 'before-subfield-label' && (
                    <div className="atblocks-component-header">
                        <span className="atblocks-component-header__title">{ label }</span>
                    </div>
                )
            }
            
            {
                ( subFields && subFields.includes('borderStyle') ) && (
                    <Select
                        label={ labelPosition === 'before-subfield-label' ? `${label} ${__( 'Style', 'athemes-blocks' )}` : __( 'Style', 'athemes-blocks' ) }
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
                        value={ borderStyleValue }
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'borderStyle', value, 'desktop' );
                            
                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderStyle',
                                value: value,
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'borderStyle', attributesDefaults[settingId].default.innerSettings.borderStyle.default['desktop'].value, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderStyle',
                                value: getInnerSettingDefaultValue( settingId, 'borderStyle', 'desktop', attributesDefaults ),
                            } );
                        } }
                    />
                )
            }
            {
                ( borderStyleValue !== 'none' && borderStyleValue !== 'default' && subFields && subFields.includes('borderWidth') ) && (
                    <Dimensions
                        label={ labelPosition === 'before-subfield-label' ? `${label} ${__( 'Width', 'athemes-blocks' )}` : __( 'Width', 'athemes-blocks' ) }
                        directions={[
                            { label: __( 'Top', 'athemes-blocks' ), value: 'top' },
                            { label: __( 'Right', 'athemes-blocks' ), value: 'right' },
                            { label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
                            { label: __( 'Left', 'athemes-blocks' ), value: 'left' },
                        ]}
                        value={ borderWidthValue }
                        defaultUnit={ borderWidthUnit }
                        directionsValue={ borderWidthValue }
                        connect={ borderWidthConnect }
                        responsive={ false }
                        units={['px']}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'borderWidth', value, 'desktop' );
                            
                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderWidth',
                                value: value,
                            } );
                        } }
                        onChangeUnit={ ( value ) => {
                            updateInnerControlAttribute( 'borderWidth', {
                                value: borderWidthValue,
                                unit: value
                            }, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderWidth',
                                value: value,
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'borderWidth', {
                                value: getInnerSettingDefaultValue( settingId, 'borderWidth', 'desktop', attributesDefaults ),
                                unit: getInnerSettingDefaultUnit( settingId, 'borderWidth', 'desktop', attributesDefaults )
                            }, 'desktop' ); 

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderWidth',
                                value: getInnerSettingDefaultValue( settingId, 'borderWidth', 'desktop', attributesDefaults ),
                            } );
                        } }
                    />
                )
            }
            {
                ( borderStyleValue !== 'default' && subFields && subFields.includes('borderRadius') ) && (
                    <Dimensions
                        label={ labelPosition === 'before-subfield-label' ? `${label} ${__( 'Radius', 'athemes-blocks' )}` : __( 'Radius', 'athemes-blocks' ) }
                        directions={[
                            { label: __( 'Top', 'athemes-blocks' ), value: 'top' },
                            { label: __( 'Right', 'athemes-blocks' ), value: 'right' },
                            { label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
                            { label: __( 'Left', 'athemes-blocks' ), value: 'left' },
                        ]}
                        value={ borderRadiusValue }
                        defaultUnit={ borderRadiusUnit }
                        directionsValue={ borderRadiusValue }
                        connect={borderRadiusConnect}
                        responsive={ false }
                        units={['px']}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'borderRadius', value, 'desktop' );
                            
                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderRadius',
                                value: value,
                            } );
                        } }
                        onChangeUnit={ ( value ) => {
                            updateInnerControlAttribute( 'borderRadius', {
                                value: borderRadiusValue,
                                unit: value
                            }, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderRadius',
                                value: value,
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'borderRadius', {
                                value: getInnerSettingDefaultValue( settingId, 'borderRadius', 'desktop', attributesDefaults ),
                                unit: getInnerSettingDefaultUnit( settingId, 'borderRadius', 'desktop', attributesDefaults )
                            }, 'desktop' ); 

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderRadius',
                                value: getInnerSettingDefaultValue( settingId, 'borderRadius', 'desktop', attributesDefaults ),
                            } );
                        } }
                    />
                )
            }
            {
                ( borderStyleValue !== 'none' && borderStyleValue !== 'default' && subFields && subFields.includes('borderColor') ) && (
                    <ColorPicker
                        label={ labelPosition === 'before-subfield-label' ? `${label} ${__( 'Color', 'athemes-blocks' )}` : __( 'Color', 'athemes-blocks' ) }
                        value={ borderColorValue }
                        hover={true}
                        responsive={false}
                        reset={true}
                        defaultStateOnChangeComplete={ ( value ) => {
                            updateInnerControlAttribute( 'borderColor', {
                                defaultState: value,
                                hoverState: borderColorValue.hoverState
                            }, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderColor',
                                value: borderColorValue.defaultState
                            } );                          
                        } }
                        hoverStateOnChangeComplete={ ( value ) => {
                            updateInnerControlAttribute( 'borderColor', {
                                defaultState: borderColorValue.defaultState,
                                hoverState: value
                            }, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderColor',
                                value: borderColorValue.hoverState
                            } );                           
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'borderColor', {
                                value: getInnerSettingDefaultValue( settingId, 'borderColor', 'desktop', attributesDefaults ),
                            }, 'desktop' ); 

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'borderColor',
                                value: getInnerSettingDefaultValue( settingId, 'borderColor', 'desktop', attributesDefaults ),
                            } );                            
                        } }
                    />
                )
            }
        </BaseControl>
    );
}
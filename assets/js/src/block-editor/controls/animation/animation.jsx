import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";

import { BaseControl, TextControl, SelectControl } from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';
import { Dimensions } from '../dimensions/dimensions';
import { Select } from '../select/select';
import { ColorPicker } from '../../../block-editor/controls/color-picker/color-picker';
import { RangeSlider } from '../range-slider/range-slider';

import { createInnerControlAttributeUpdater } from '../../../utils/block-attributes';

import { getInnerSettingDefaultValue, getInnerSettingDefaultUnit } from '../../../utils/settings';

export function Animation( props ) {
    const { label, settingId, attributes, setAttributes, attributesDefaults, setUpdateCss, subFields } = props;
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
    const { 
        entranceAnimation, 
        animationDuration,
        animationDelay,
    } = attributes[settingId].innerSettings;

    const updateInnerControlAttribute = createInnerControlAttributeUpdater( settingId, attributes, setAttributes);

    const entranceAnimationValue = entranceAnimation.default['desktop'].value;
    const animationDurationValue = animationDuration.default['desktop'].value;
    const animationDelayValue = animationDelay.default['desktop'].value;

    return(
        <BaseControl>
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
            </div>
            
            {
                ( subFields && subFields.includes('entranceAnimation') ) && (
                    <Select
                        label={ __( 'Entrance Animation', 'athemes-blocks' ) }
                        options={[
                            { label: __( 'Default', 'athemes-blocks' ), value: 'default' },
                            { label: __( 'Fade In', 'athemes-blocks' ), value: 'fade-in' },
                            { label: __( 'Slide In', 'athemes-blocks' ), value: 'slide-in' },
                            { label: __( 'Zoom In', 'athemes-blocks' ), value: 'zoom-in' },
                            { label: __( 'Rotate In', 'athemes-blocks' ), value: 'rotate-in' },
                            { label: __( 'Flip In', 'athemes-blocks' ), value: 'flip-in' },
                            { label: __( 'Slide In', 'athemes-blocks' ), value: 'slide-in' },
                        ]}
                        value={ entranceAnimationValue }
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'entranceAnimation', value, 'desktop' );
                            
                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'entranceAnimation',
                                value: value,
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'entranceAnimation', attributesDefaults[settingId].default.innerSettings.entranceAnimation.default['desktop'].value, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'entranceAnimation',
                                value: getInnerSettingDefaultValue( settingId, 'entranceAnimation', 'desktop', attributesDefaults ),
                            } );
                        } }
                    />
                )
            }
            {
                ( entranceAnimation.default['desktop'].value !== 'default' && subFields && subFields.includes('animationDuration') ) && (
                    <>
                        <Select
                            label={ __( 'Animation Duration', 'athemes-blocks' ) }
                            options={[
                                { label: __( 'Normal', 'athemes-blocks' ), value: 'normal' },
                                { label: __( 'Fast', 'athemes-blocks' ), value: 'fast' },
                                { label: __( 'Slow', 'athemes-blocks' ), value: 'slow' },
                            ]}
                            value={ animationDurationValue }
                            responsive={false}
                            reset={true}
                            onChange={ ( value ) => {
                                updateInnerControlAttribute( 'animationDuration', value, 'desktop' );
                                
                                setUpdateCss( {
                                    type: 'inner-control',
                                    settingId: settingId,
                                    innerSettingId: 'animationDuration',
                                    value: value,
                                } );
                            } }
                            onClickReset={ () => {
                                updateInnerControlAttribute( 'animationDuration', attributesDefaults[settingId].default.innerSettings.animationDuration.default['desktop'].value, 'desktop' );

                                setUpdateCss( {
                                    type: 'inner-control',
                                    settingId: settingId,
                                    innerSettingId: 'animationDuration',
                                    value: getInnerSettingDefaultValue( settingId, 'animationDuration', 'desktop', attributesDefaults ),
                                } );
                            } }
                        />
                        <RangeSlider 
                            label={ __( 'Animation Delay (ms)', 'athemes-blocks' ) }
                            defaultValue={ animationDelayValue }
                            defaultUnit={ animationDelay.default['desktop'].unit }
                            min={ 0 }
                            max={ 15000 }
                            responsive={ false }
                            reset={ true }
                            units={false}
                            onChange={ ( value ) => {
                                updateInnerControlAttribute( 'animationDelay', {
                                    value: value,
                                    unit: animationDelay.default['desktop'].unit
                                }, 'desktop' );

                                setUpdateCss( {
                                    type: 'inner-control',
                                    settingId: settingId,
                                    innerSettingId: 'animationDelay',
                                    value: value,
                                } );
                            } }
                            onChangeUnit={ ( value ) => {
                                updateInnerControlAttribute( 'animationDelay', {
                                    value: animationDelayValue,
                                    unit: value
                                }, 'desktop' );

                                setUpdateCss( {
                                    type: 'inner-control',
                                    settingId: settingId,
                                    innerSettingId: 'animationDelay',
                                    value: value,
                                } );
                            } }
                            onClickReset={ () => {
                                updateInnerControlAttribute( 'animationDelay', {
                                    value: getInnerSettingDefaultValue( settingId, 'animationDelay', 'desktop', attributesDefaults ),
                                    unit: getInnerSettingDefaultUnit( settingId, 'animationDelay', 'desktop', attributesDefaults )
                                }, 'desktop' ); 

                                setUpdateCss( {
                                    type: 'inner-control',
                                    settingId: settingId,
                                    innerSettingId: 'animationDelay',
                                    value: getInnerSettingDefaultValue( settingId, 'animationDelay', 'desktop', attributesDefaults ),
                                } );
                            } }
                        />
                    </>
                )
            }
        </BaseControl>
    );
}
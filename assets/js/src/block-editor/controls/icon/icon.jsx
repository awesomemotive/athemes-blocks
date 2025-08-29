import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";

import { BaseControl, TextControl, SelectControl } from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';
import { Dimensions } from '../dimensions/dimensions';
import { Select } from '../select/select';
import { ColorPicker } from '../../../block-editor/controls/color-picker/color-picker';
import { IconLibrary } from '../../../block-editor/controls/icon-library/icon-library';
import { RadioButtons } from '../../../block-editor/controls/radio-buttons/radio-buttons';
import { RangeSlider } from '../../../block-editor/controls/range-slider/range-slider';

import { createInnerControlAttributeUpdater } from '../../../utils/block-attributes';

import { getInnerSettingDefaultValue, getInnerSettingDefaultUnit } from '../../../utils/settings';

export function Icon( props ) {
    const { label, settingId, attributes, setAttributes, attributesDefaults, setUpdateCss, subFields } = props;
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());

    const { 
        iconData,
        iconPosition,
        iconGap,
    } = attributes[settingId].innerSettings;

    const updateInnerControlAttribute = createInnerControlAttributeUpdater( settingId, attributes, setAttributes);

    return(
        <BaseControl>
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
            </div>
            
            {
                ( subFields && subFields.includes('iconData') ) && (
                    <IconLibrary
                        label={ __( 'Icon', 'athemes-blocks' ) }
                        value={ iconData.default }
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'iconData', value );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'iconData', attributesDefaults[settingId].default.innerSettings.iconData.default );
                        } }
                    />
                )
            }
            {
                ( subFields && subFields.includes('iconPosition') ) && (
                    <RadioButtons 
                        label={ __( 'Icon Position', 'athemes-blocks' ) }
                        defaultValue={ iconPosition.default }
                        options={[
                            { label: __( 'Before Text', 'athemes-blocks' ), value: 'before' },
                            { label: __( 'After Text', 'athemes-blocks' ), value: 'after' },
                        ]}
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'iconPosition', value );  
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'iconPosition', attributesDefaults[settingId].default.innerSettings.iconPosition.default );
                        } }
                    />
                )
            }
            {
                ( subFields && subFields.includes('iconGap') ) && (
                    <RangeSlider 
                        label={ __( 'Icon Gap', 'athemes-blocks' ) }
                        defaultValue={ iconGap.default[currentDevice].value }
                        defaultUnit={ iconGap.default[currentDevice].unit }
                        min={ 0 }
                        max={ 50 }
                        responsive={ true }
                        reset={ true }
                        units={['px']}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'iconGap', {
                                value: value,
                                unit: iconGap.default[currentDevice].unit
                            }, currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'iconGap',
                                value: value,
                            } );
                        } }
                        onChangeUnit={ ( value ) => {
                            updateInnerControlAttribute( 'iconGap', {
                                value: iconGap.default[currentDevice].value,
                                unit: value
                            }, currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'iconGap',
                                value: value,
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'iconGap', {
                                value: getInnerSettingDefaultValue( settingId, 'iconGap', currentDevice, attributesDefaults ),
                                unit: getInnerSettingDefaultUnit( settingId, 'iconGap', currentDevice, attributesDefaults )
                            }, currentDevice ); 

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'iconGap',
                                value: getInnerSettingDefaultValue( settingId, 'iconGap', currentDevice, attributesDefaults ),
                            } );
                        } }
                    />
                )
            }
        </BaseControl>
    );
}
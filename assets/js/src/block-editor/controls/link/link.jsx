import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";

import { BaseControl, TextControl, SelectControl } from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';
import { Dimensions } from '../dimensions/dimensions';
import { Select } from '../select/select';
import { ColorPicker } from '../../../block-editor/controls/color-picker/color-picker';
import { TextInput } from '../../../block-editor/controls/text-input/text-input';
import { SwitchToggle } from '../../../block-editor/controls/switch-toggle/switch-toggle';

import { createInnerControlAttributeUpdater } from '../../../utils/block-attributes';

import { getInnerSettingDefaultValue, getInnerSettingDefaultUnit } from '../../../utils/settings';

export function Link( props ) {
    const { label, settingId, attributes, setAttributes, attributesDefaults, setUpdateCss, subFields } = props;
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
    const { 
        linkUrl, 
        linkTarget,
        linkNoFollow,
    } = attributes[settingId].innerSettings;

    const updateInnerControlAttribute = createInnerControlAttributeUpdater( settingId, attributes, setAttributes);

    return(
        <BaseControl>
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
            </div>
            
            {
                ( subFields && subFields.includes('linkUrl') ) && (
                    <TextInput
                        label={ __( 'Link', 'athemes-blocks' ) }
                        value={ linkUrl.default }
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'linkUrl', value );   
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'linkUrl', attributesDefaults[settingId].default.innerSettings.linkUrl.default );
                        } }
                    />
                )
            }
            {
                ( linkUrl.default !== '' && subFields && subFields.includes('linkTarget') ) && (
                    <SwitchToggle
                        label={ __( 'Open in a new window', 'athemes-blocks' ) }
                        value={ linkTarget.default }
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'linkTarget', value );                            
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'linkTarget', attributesDefaults[settingId].default.innerSettings.linkTarget.default );
                        } }
                    />
                )
            }
            {
                ( linkUrl.default !== '' && subFields && subFields.includes('linkNoFollow') ) && (
                    <SwitchToggle
                        label={ __( 'Add "nowfollow" attribute', 'athemes-blocks' ) }
                        value={ linkNoFollow.default }
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'linkNoFollow', value );                            
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'linkNoFollow', attributesDefaults[settingId].default.innerSettings.linkNoFollow.default );
                        } }
                    />
                )
            }        
        </BaseControl>
    );
}
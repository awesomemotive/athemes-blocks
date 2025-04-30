/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";

import { BaseControl, TextControl, SelectControl, Button, Tooltip } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Icon, trash, edit, plus} from '@wordpress/icons';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';
import { Dimensions } from '../dimensions/dimensions';
import { Select } from '../select/select';
import { ColorPicker } from '../color-picker/color-picker';
import { SwitchToggle } from '../switch-toggle/switch-toggle';
import { TextInput } from '../text-input/text-input';

import { createInnerControlAttributeUpdater } from '../../../utils/block-attributes';

import { getInnerSettingDefaultValue, getInnerSettingDefaultUnit, getInnerSettingValue } from '../../../utils/settings';

import { getImageSizeLabel } from '../../../utils/helpers';

import { styles } from './styles';

export function ImageUpload( props ) {
    const { label, settingId, attributes, setAttributes, attributesDefaults, setUpdateCss, subFields } = props;
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());

    const { 
        image, 
        disableLazyLoad,
        size,
        caption,
        captionText
    } = attributes[settingId].innerSettings;

    const imageData = image ? image.default : {};

    const updateInnerControlAttribute = createInnerControlAttributeUpdater( settingId, attributes, setAttributes);

    const [ imageSizes, setImageSizes ] = useState( [] );
    const [ imageSizeOptions, setImageSizeOptions ] = useState( [] );

    useEffect( () => {
        if ( image.default.sizes ) {
            setImageSizes( image.default.sizes );
        } else if ( image.default.media_details ) {
            setImageSizes( image.default.media_details.sizes );
        }
    }, [ image ] );

    useEffect( () => {
        const availableSizes = [];

        if ( imageSizes ) {
            Object.keys( imageSizes ).forEach( ( size ) => {
                availableSizes.push({ label: getImageSizeLabel( size ), value: size });
            } );

            setImageSizeOptions( availableSizes );
        }
    }, [ imageSizes ] );
    
    // Remove Image.
    const removeImageOnClickHandler = () => {
        updateInnerControlAttribute( 'image', '' );
    }

    return(
        <BaseControl css={ styles.fieldWrapper }>
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
            </div>
            
            {
                ( subFields && subFields.includes('image') ) && (
                    <MediaUploadCheck>
                        <MediaUpload
                            title={ __( 'Select a image', 'athemes-blocks' ) }
                            onSelect={ (media) => {
                                updateInnerControlAttribute( 'image', media );
                            } }
                            allowedTypes={ [ "image" ] }
                            value={ image }
                            render={ ( { open } ) => {
                                const hasImage = imageData && imageData.url;

                                return(
                                    <>
                                        <div className="atblocks-component-header">
                                            <span className="atblocks-component-header__title">{ __( 'Image', 'athemes-blocks' ) }</span>
                                        </div>
                                        <div className={ `atblocks-image-upload__image-wrapper ${ hasImage ? 'has-image' : '' }` }>
                                            {
                                                hasImage && (
                                                    <>
                                                        <img src={ imageData.url } alt={ imageData.alt } />
                                                        <div className="atblocks-image-upload__actions">
                                                            <Tooltip text={ __( 'Remove Image', 'athemes-blocks' ) }>
                                                                <button className="atblocks-image-upload__actions-item atblocks-image-upload__actions-item--remove" onClick={ removeImageOnClickHandler }>
                                                                    <Icon icon={ trash } />
                                                                </button>
                                                            </Tooltip>
                                                            <Tooltip text={ __( 'Change Image', 'athemes-blocks' ) }>
                                                                <button className="atblocks-image-upload__actions-item atblocks-image-upload__actions-item--edit" onClick={ open }>
                                                                    <Icon icon={ edit } />
                                                                </button>
                                                            </Tooltip>
                                                        </div>
                                                    </>
                                                ) || (
                                                    <div className="atblocks-image-upload__actions">
                                                        <button className="atblocks-image-upload__actions-item atblocks-image-upload__actions-item--add" onClick={ open }>
                                                            <Icon icon={ plus } />
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </>
                                )
                            } }
                        />
                    </MediaUploadCheck>
                )
            }
            {
                ( subFields && subFields.includes('disableLazyLoad') ) && (
                    <SwitchToggle
                        label={ __( 'Disable Lazy Load', 'athemes-blocks' ) }
                        value={ disableLazyLoad.default }
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'disableLazyLoad', value );                            
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'disableLazyLoad', attributesDefaults[settingId].default.innerSettings.disableLazyLoad.default );
                        } }
                    />
                )
            }
            {
                ( subFields && subFields.includes('size') ) && (
                    <Select
                        label={ __( 'Size', 'athemes-blocks' ) }
                        options={ imageSizeOptions }
                        value={ size.default }
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'size', value );                            
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'size', attributesDefaults[settingId].default.innerSettings.size.default );
                        } }
                    />
                )
            }
            {
                ( subFields && subFields.includes('caption') ) && (
                    <Select
                        label={ __( 'Caption', 'athemes-blocks' ) }
                        options={ [
                            { label: __( 'None', 'athemes-blocks' ), value: 'none' },
                            { label: __( 'Attachment caption', 'athemes-blocks' ), value: 'attachment' },
                            { label: __( 'Custom caption', 'athemes-blocks' ), value: 'custom' },
                        ] }
                        value={ caption.default }
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'caption', value );                            
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'caption', attributesDefaults[settingId].default.innerSettings.caption.default );
                        } }
                    />
                )
            }
            {
                ( subFields && subFields.includes('captionText') && caption.default === 'custom' ) && (
                    <TextInput
                        label={ __( 'Caption', 'athemes-blocks' ) }
                        value={ captionText.default }
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'captionText', value );   
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'captionText', attributesDefaults[settingId].default.innerSettings.captionText.default );
                        } }
                    />
                )
            }
        </BaseControl>
    );
}
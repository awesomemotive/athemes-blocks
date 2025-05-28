/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";
import { Icon } from '@wordpress/icons';
import { BaseControl, TextControl, SelectControl, GradientPicker, Tooltip, FocalPointPicker } from '@wordpress/components';
import { MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { trash, edit, plus } from '@wordpress/icons';

import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';
import { Dimensions } from '../dimensions/dimensions';
import { Select } from '../select/select';
import { ColorPicker } from '../color-picker/color-picker';
import { RadioButtons } from '../../../block-editor/controls/radio-buttons/radio-buttons';
import { RangeSlider } from '../../../block-editor/controls/range-slider/range-slider';
import { FocalPointer } from '../../../block-editor/controls/focal-pointer/focal-pointer';
import { SwitchToggle } from '../../../block-editor/controls/switch-toggle/switch-toggle';

import { createInnerControlAttributeUpdater } from '../../../utils/block-attributes';

import { getInnerSettingValue, getInnerSettingDefaultValue, getInnerSettingDefaultUnit } from '../../../utils/settings';

import { styles } from './styles';

export function ColorPickerAdvanced( props ) {
    const { label, settingId, attributes, setAttributes, attributesDefaults, setUpdateCss, subFields } = props;
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());

    const { 
        type,
        color, 
        gradient,
        backgroundImage,
        backgroundImagePosition,
        backgroundImageAttachment,
        backgroundImageRepeat,
        backgroundImageSize,
        backgroundImageOverlay,
        backgroundImageOverlayColor,
        backgroundImageOverlayOpacity
    } = attributes[settingId].innerSettings;

    const typeValue = type.default;
    const colorValue = color.default['desktop'].value;
    const gradientValue = gradient.default['desktop'].value;

    const backgroundImageValue = getInnerSettingValue( settingId, 'backgroundImage', 'desktop', attributes );
    const backgroundImagePositionValue = getInnerSettingValue( settingId, 'backgroundImagePosition', currentDevice, attributes );
    const backgroundImageAttachmentValue = getInnerSettingValue( settingId, 'backgroundImageAttachment', currentDevice, attributes );
    const backgroundImageRepeatValue = getInnerSettingValue( settingId, 'backgroundImageRepeat', currentDevice, attributes );
    const backgroundImageSizeValue = getInnerSettingValue( settingId, 'backgroundImageSize', currentDevice, attributes );
    const backgroundImageOverlayValue = getInnerSettingValue( settingId, 'backgroundImageOverlay', '', attributes );
    const backgroundImageOverlayColorValue = backgroundImageOverlayColor.default['desktop'].value;
    const backgroundImageOverlayOpacityValue = backgroundImageOverlayOpacity.default['desktop'].value;

    const imageData = backgroundImageValue ? backgroundImageValue : {};

    const updateInnerControlAttribute = createInnerControlAttributeUpdater( settingId, attributes, setAttributes);

    // Remove Image.
    const removeImageOnClickHandler = () => {
        updateInnerControlAttribute( 'backgroundImage', '', 'desktop' );

        setUpdateCss( {
            type: 'inner-control',
            settingId: settingId,
            innerSettingId: 'backgroundImage',
            value: ''
        } );
    }
    return(
        <BaseControl css={ styles.fieldWrapper }>
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title"></span>
            </div>
            
            <RadioButtons 
                label={ label ? label : __( 'Type', 'athemes-blocks' ) }
                defaultValue={ typeValue }
                options={[
                    { label: __( 'Color', 'athemes-blocks' ), value: 'color' },
                    { label: __( 'Gradient', 'athemes-blocks' ), value: 'gradient' },
                    { label: __( 'Image', 'athemes-blocks' ), value: 'image' },
                ]}
                responsive={false}
                reset={false}
                onChange={ ( value ) => {
                    updateInnerControlAttribute( 'type', value );
                } }
                onClickReset={ () => {} }
            />
            
            {
                ( typeValue === 'color' && subFields && subFields.includes('color') ) && (
                    <ColorPicker
                        label={ __( 'Color', 'athemes-blocks' ) }
                        value={ colorValue }
                        hover={false}
                        responsive={false}
                        reset={true}
                        defaultStateOnChangeComplete={ ( value ) => {
                            updateInnerControlAttribute( 'color', {
                                defaultState: value,
                                hoverState: colorValue.hoverState
                            }, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'color',
                                value: colorValue.defaultState
                            } );                          
                        } }
                        hoverStateOnChangeComplete={ ( value ) => {
                            updateInnerControlAttribute( 'color', {
                                defaultState: colorValue.defaultState,
                                hoverState: value
                            }, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'color',
                                value: colorValue.hoverState
                            } );                           
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'color', {
                                value: getInnerSettingDefaultValue( settingId, 'color', 'desktop', attributesDefaults ),
                            }, 'desktop' ); 

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'color',
                                value: getInnerSettingDefaultValue( settingId, 'color', 'desktop', attributesDefaults ),
                            } );                            
                        } }
                    />
                )
            }
            {
                ( typeValue === 'gradient' && subFields && subFields.includes('gradient') ) && (
                    <GradientPicker
                        value={ gradientValue.defaultState || undefined }
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'gradient', {
                                defaultState: value,
                                hoverState: ''
                            }, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'gradient',
                                value: value
                            } );
                        } }
                    />
                )
            }
            {
                ( typeValue === 'image' && subFields && subFields.includes('backgroundImage') ) && (
                    <MediaUploadCheck>
                        <MediaUpload
                            title={ __( 'Select a image', 'athemes-blocks' ) }
                            onSelect={ (media) => {
                                updateInnerControlAttribute( 'backgroundImage', media, 'desktop' );

                                if ( media ) {
                                    setUpdateCss( {
                                        type: 'inner-control',
                                        settingId: settingId,
                                        innerSettingId: 'backgroundImage',
                                        value: media.url || ''
                                    } );
                                }
                            } }
                            allowedTypes={ [ "image" ] }
                            value={ backgroundImageValue }
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
                ( typeValue === 'image' && imageData && imageData.url && subFields && subFields.includes('backgroundImagePosition') ) && (
                    <FocalPointer
                        label={ __( 'Position', 'athemes-blocks' ) }
                        url={ imageData.url }
                        value={ backgroundImagePositionValue }
                        responsive={true}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'backgroundImagePosition', value, currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImagePosition',
                                value: value
                            } );
                        }}
                        onDrag={() => {}}
                        onDragEnd={() => {}}
                        onDragStart={() => {}}
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'backgroundImagePosition', getInnerSettingDefaultValue( settingId, 'backgroundImagePosition', currentDevice, attributesDefaults ), currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImagePosition',
                                value: getInnerSettingDefaultValue( settingId, 'backgroundImagePosition', currentDevice, attributesDefaults )
                            } );
                        } }
                    />
                )
            }
            {
                ( typeValue === 'image' && subFields && subFields.includes('backgroundImageAttachment') ) && (
                    <Select
                        label={ __( 'Attachment', 'athemes-blocks' ) }
                        value={ backgroundImageAttachmentValue }
                        responsive={true}
                        reset={true}
                        options={ [
                            { label: __( 'Scroll', 'athemes-blocks' ), value: 'scroll' },
                            { label: __( 'Fixed', 'athemes-blocks' ), value: 'fixed' },
                        ] }
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'backgroundImageAttachment', value, currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImageAttachment',
                                value: value
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'backgroundImageAttachment', getInnerSettingDefaultValue( settingId, 'backgroundImageAttachment', currentDevice, attributesDefaults ), currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImageAttachment',
                                value: getInnerSettingDefaultValue( settingId, 'backgroundImageAttachment', currentDevice, attributesDefaults )
                            } );
                        } }
                    />
                )
            }
            {
                ( typeValue === 'image' && subFields && subFields.includes('backgroundImageRepeat') ) && (
                    <Select
                        label={ __( 'Repeat', 'athemes-blocks' ) }
                        value={ backgroundImageRepeatValue }
                        responsive={true}
                        reset={true}
                        options={ [
                            { label: __( 'Repeat', 'athemes-blocks' ), value: 'repeat' },
                            { label: __( 'Repeat X', 'athemes-blocks' ), value: 'repeat-x' },
                            { label: __( 'Repeat Y', 'athemes-blocks' ), value: 'repeat-y' },
                            { label: __( 'No Repeat', 'athemes-blocks' ), value: 'no-repeat' },
                        ] }
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'backgroundImageRepeat', value, currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImageRepeat',
                                value: value
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'backgroundImageRepeat', getInnerSettingDefaultValue( settingId, 'backgroundImageRepeat', currentDevice, attributesDefaults ), currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImageRepeat',
                                value: getInnerSettingDefaultValue( settingId, 'backgroundImageRepeat', currentDevice, attributesDefaults )
                            } );
                        } }
                    />
                )
            }
            {
                ( typeValue === 'image' && subFields && subFields.includes('backgroundImageSize') ) && (
                    <Select
                        label={ __( 'Size', 'athemes-blocks' ) }
                        value={ backgroundImageSizeValue }
                        responsive={true}
                        reset={true}
                        options={ [
                            { label: __( 'Cover', 'athemes-blocks' ), value: 'cover' },
                            { label: __( 'Contain', 'athemes-blocks' ), value: 'contain' },
                            { label: __( 'Auto', 'athemes-blocks' ), value: 'auto' },
                        ] }
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'backgroundImageSize', value, currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImageSize',
                                value: value
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'backgroundImageSize', getInnerSettingDefaultValue( settingId, 'backgroundImageSize', currentDevice, attributesDefaults ), currentDevice );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImageSize',
                                value: getInnerSettingDefaultValue( settingId, 'backgroundImageSize', currentDevice, attributesDefaults )
                            } );
                        } }
                    />
                )
            }
            {
                ( typeValue === 'image' && subFields && subFields.includes('backgroundImageOverlay') ) && (
                    <SwitchToggle
                        label={ __( 'Overlay', 'athemes-blocks' ) }
                        value={ backgroundImageOverlayValue }
                        responsive={false}
                        reset={true}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'backgroundImageOverlay', value );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'backgroundImageOverlay', getInnerSettingDefaultValue( settingId, 'backgroundImageOverlay', '', attributesDefaults ) );
                        } }
                    />
                )
            }
            {
                ( typeValue === 'image' && backgroundImageOverlayValue && subFields && subFields.includes('backgroundImageOverlayColor') ) && (
                    <ColorPicker
                        label={ __( 'Overlay Color', 'athemes-blocks' ) }
                        value={ backgroundImageOverlayColorValue }
                        hover={false}
                        responsive={false}
                        reset={true}
                        enableAlpha={false}
                        defaultStateOnChangeComplete={ ( value ) => {
                            updateInnerControlAttribute( 'backgroundImageOverlayColor', {
                                defaultState: value,
                                hoverState: backgroundImageOverlayColorValue.hoverState
                            }, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImageOverlayColor',
                                value: backgroundImageOverlayColorValue.defaultState
                            } );                          
                        } }
                        hoverStateOnChangeComplete={ ( value ) => {
                            updateInnerControlAttribute( 'backgroundImageOverlayColor', {
                                defaultState: backgroundImageOverlayColorValue.defaultState,
                                hoverState: value
                            }, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImageOverlayColor',
                                value: backgroundImageOverlayColorValue.hoverState
                            } );                           
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'backgroundImageOverlayColor', {
                                value: getInnerSettingDefaultValue( settingId, 'backgroundImageOverlayColor', 'desktop', attributesDefaults ),
                            }, 'desktop' ); 

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImageOverlayColor',
                                value: getInnerSettingDefaultValue( settingId, 'backgroundImageOverlayColor', 'desktop', attributesDefaults ),
                            } );                            
                        } }
                    />
                )
            }
            {
                ( typeValue === 'image' && backgroundImageOverlayValue && subFields && subFields.includes('backgroundImageOverlayOpacity') ) && (
                    <RangeSlider 
                        label={ __( 'Overlay Opacity', 'athemes-blocks' ) }
                        defaultValue={ backgroundImageOverlayOpacityValue }
                        defaultUnit=""
                        min={0}
                        step={0.1}
                        max={1}
                        responsive={false}
                        reset={true}
                        units={false}
                        onChange={ ( value ) => {
                            updateInnerControlAttribute( 'backgroundImageOverlayOpacity', value, 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImageOverlayOpacity',
                                value: value
                            } );
                        } }
                        onClickReset={ () => {
                            updateInnerControlAttribute( 'backgroundImageOverlayOpacity', getInnerSettingDefaultValue( settingId, 'backgroundImageOverlayOpacity', 'desktop', attributesDefaults ), 'desktop' );

                            setUpdateCss( {
                                type: 'inner-control',
                                settingId: settingId,
                                innerSettingId: 'backgroundImageOverlayOpacity',
                                value: getInnerSettingDefaultValue( settingId, 'backgroundImageOverlayOpacity', 'desktop', attributesDefaults )
                            } );								
                        } }
                    />
                )
            }
        </BaseControl>
    );
}
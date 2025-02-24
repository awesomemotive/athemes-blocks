import { __ } from '@wordpress/i18n';
import { useSelect } from "@wordpress/data";
import { useState, useEffect } from '@wordpress/element';
import { store as deviceSwitcherStore } from '../../store/device-switcher-store';
import { BaseControl, Button, Popover, SelectControl } from '@wordpress/components';
import { Select } from '../select/select';
import { RangeSlider } from '../range-slider/range-slider';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { UnitSwitcher } from '../../controls-auxiliary/unit-switcher/unit-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

import { createInnerControlAttributeUpdater } from '../../../utils/block-attributes';

export function Typography( props ) {
    const { label, attributeId, attributes, setAttributes, attributesDefaults, subFields } = props;
    const currentDevice = useSelect((select) => select('device-switcher-store').getCurrentDevice());
    const { 
        fontSize, 
        fontFamily, 
        fontWeight,
        fontStyle,
        textTransform,
        textDecoration,
        lineHeight,
        letterSpacing,
    } = attributes[attributeId].typographySettings;

    const updateInnerControlAttribute = createInnerControlAttributeUpdater( attributeId, attributes, setAttributes);

    // Popover State (default)
    const [ isDefaultVisible, setIsDefaultVisible ] = useState( false );
    const toggleDefaultVisible = () => {
        setIsDefaultVisible( ( state ) => ! state );
    };

    return(
        <BaseControl>
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
                <Button 
                    label=""
                    variant="secondary" 
                    onClick={ toggleDefaultVisible } 
                >

                    { isDefaultVisible && (
                        <Popover
                            onClick={ ( event ) => event.stopPropagation() }
                            onFocusOutside={ toggleDefaultVisible }
                        >
                            {
                                ( subFields && subFields.includes('fontFamily') ) && (
                                    <Select
                                        label={ __( 'Font family', 'athemes-blocks' ) }
                                        options={[
                                            { label: __( 'Default', 'athemes-blocks' ), value: 'default' },
                                            { label: __( 'Arial', 'athemes-blocks' ), value: 'Arial' },
                                            { label: __( 'Helvetica', 'athemes-blocks' ), value: 'Helvetica' },
                                            { label: __( 'Times New Roman', 'athemes-blocks' ), value: 'Times New Roman' },
                                        ]}
                                        value={ fontFamily }
                                        reset={true}
                                        onChange={ ( value ) => updateInnerControlAttribute( 'fontFamily', value, currentDevice ) }
                                        onClickReset={ () => updateInnerControlAttribute( 'fontFamily', attributesDefaults[attributeId].default.typographySettings.fontFamily, currentDevice ) }
                                    />
                                )
                            }

                            {
                                ( subFields && subFields.includes('fontSize') ) && (
                                    <RangeSlider 
                                        label={ __( 'Font size', 'athemes-blocks' ) }
                                        defaultValue={ fontSize[currentDevice] }
                                        min={ 10 }
                                        max={ 200 }
                                        responsive={ true }
                                        reset={ true }
                                        units={['px', 'em', 'rem']}
                                        onChange={ ( value ) => updateInnerControlAttribute( 'fontSize', {
                                            value: value,
                                            unit: fontSize[currentDevice].unit
                                        }, currentDevice ) }
                                        onChangeUnit={ ( value ) => updateInnerControlAttribute( 'fontSize', {
                                            value: fontSize[currentDevice].value,
                                            unit: value
                                        }, currentDevice ) }
                                        onClickReset={ () => updateInnerControlAttribute( 'fontSize', attributesDefaults[attributeId].default.typographySettings.fontSize[currentDevice], currentDevice ) }
                                    />
                                )
                            }
                            
                            {
                                ( subFields && subFields.includes('fontWeight') ) && (
                                    <Select
                                        label={ __( 'Weight', 'athemes-blocks' ) }
                                        options={[
                                            { label: __( 'Default', 'athemes-blocks' ), value: 'default' },
                                            { label: '100', value: '100' },
                                            { label: '200', value: '200' },
                                            { label: '300', value: '300' },
                                            { label: '400', value: '400' },
                                            { label: '500', value: '500' },
                                            { label: '600', value: '600' },
                                            { label: '700', value: '700' },
                                            { label: '800', value: '800' },
                                            { label: '900', value: '900' },
                                        ]}
                                        value={ fontWeight }
                                        responsive={ false }
                                        reset={true}
                                        onChange={ ( value ) => updateInnerControlAttribute( 'fontWeight', value, currentDevice ) }
                                        onClickReset={ () => updateInnerControlAttribute( 'fontWeight', attributesDefaults[attributeId].default.typographySettings.fontWeight, currentDevice ) }
                                    />                                    
                                )
                            }

                            {
                                ( subFields && subFields.includes('fontStyle') ) && (
                                    <Select
                                        label={ __( 'Style', 'athemes-blocks' ) }
                                        options={[
                                            { label: __( 'Default', 'athemes-blocks' ), value: 'default' },
                                            { label: __( 'Italic', 'athemes-blocks' ), value: 'italic' },
                                            { label: __( 'Oblique', 'athemes-blocks' ), value: 'oblique' },
                                        ]}
                                        value={ fontStyle }
                                        responsive={ false }
                                        reset={true}
                                        onChange={ ( value ) => updateInnerControlAttribute( 'fontStyle', value, currentDevice ) }
                                        onClickReset={ () => updateInnerControlAttribute( 'fontStyle', attributesDefaults[attributeId].default.typographySettings.fontStyle, currentDevice ) }
                                    />
                                )
                            }

                            {
                                ( subFields && subFields.includes('textTransform') ) && (
                                    <Select
                                        label={ __( 'Transform', 'athemes-blocks' ) }
                                        options={[
                                            { label: __( 'Default', 'athemes-blocks' ), value: 'default' },
                                            { label: __( 'Normal', 'athemes-blocks' ), value: 'normal' },
                                            { label: __( 'Capitalize', 'athemes-blocks' ), value: 'capitalize' },
                                            { label: __( 'Uppercase', 'athemes-blocks' ), value: 'uppercase' },
                                            { label: __( 'Lowercase', 'athemes-blocks' ), value: 'lowercase' },
                                        ]}
                                        value={ textTransform }
                                        responsive={ false }
                                        reset={true}
                                        onChange={ ( value ) => updateInnerControlAttribute( 'textTransform', value, currentDevice ) }
                                        onClickReset={ () => updateInnerControlAttribute( 'textTransform', attributesDefaults[attributeId].default.typographySettings.textTransform, currentDevice ) }
                                    />                                
                                )
                            }

                            {
                                ( subFields && subFields.includes('textDecoration') ) && (
                                    <Select
                                        label={ __( 'Decoration', 'athemes-blocks' ) }
                                        options={[
                                            { label: __( 'Default', 'athemes-blocks' ), value: 'default' },
                                            { label: __( 'None', 'athemes-blocks' ), value: 'none' },
                                            { label: __( 'Underline', 'athemes-blocks' ), value: 'underline' },
                                            { label: __( 'Overline', 'athemes-blocks' ), value: 'overline' },
                                            { label: __( 'Line Through', 'athemes-blocks' ), value: 'line-through' },
                                        ]}
                                        value={ textDecoration }
                                        responsive={ false }
                                        reset={true}
                                        onChange={ ( value ) => updateInnerControlAttribute( 'textDecoration', value, currentDevice ) }
                                        onClickReset={ () => updateInnerControlAttribute( 'textDecoration', attributesDefaults[attributeId].default.typographySettings.textDecoration, currentDevice ) }
                                    />                                
                                )
                            }

                            {
                                ( subFields && subFields.includes('lineHeight') ) && (
                                    <RangeSlider 
                                        label={ __( 'Line Height', 'athemes-blocks' ) }
                                        defaultValue={ lineHeight[currentDevice] }
                                        min={ 0 }
                                        max={ 10 }
                                        responsive={ true }
                                        reset={ true }
                                        units={['px', 'em', 'rem']}
                                        onChange={ ( value ) => updateInnerControlAttribute( 'lineHeight', {
                                            value: value,
                                            unit: lineHeight[currentDevice].unit
                                        }, currentDevice ) }
                                        onChangeUnit={ ( value ) => updateInnerControlAttribute( 'lineHeight', {
                                            value: lineHeight[currentDevice].value,
                                            unit: value
                                        }, currentDevice ) }
                                        onClickReset={ () => updateInnerControlAttribute( 'lineHeight', attributesDefaults[attributeId].default.typographySettings.lineHeight[currentDevice], currentDevice ) }
                                    />                                
                                )
                            }

                            {
                                ( subFields && subFields.includes('letterSpacing') ) && (
                                    <RangeSlider 
                                        label={ __( 'Letter Spacing', 'athemes-blocks' ) }
                                        defaultValue={ letterSpacing[currentDevice] }
                                        min={ -50 }
                                        max={ 200 }
                                        responsive={ true }
                                        reset={ true }
                                        units={['px', 'em', 'rem']}
                                        onChange={ ( value ) => updateInnerControlAttribute( 'letterSpacing', {
                                            value: value,
                                            unit: letterSpacing[currentDevice].unit
                                        }, currentDevice ) }
                                        onChangeUnit={ ( value ) => updateInnerControlAttribute( 'letterSpacing', {
                                            value: letterSpacing[currentDevice].value,
                                            unit: value
                                        }, currentDevice ) }
                                        onClickReset={ () => updateInnerControlAttribute( 'letterSpacing', attributesDefaults[attributeId].default.typographySettings.letterSpacing[currentDevice], currentDevice ) }
                                    />
                                )
                            }
                            
                        </Popover>
                    ) }

                </Button>
            </div>
        </BaseControl>
    );
}
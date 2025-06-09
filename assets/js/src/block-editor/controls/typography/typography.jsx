/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { useSelect } from "@wordpress/data";
import { useState, useEffect } from '@wordpress/element';
import { store as deviceSwitcherStore } from '../../store/device-switcher-store';
import { BaseControl, Button, Popover, SelectControl } from '@wordpress/components';
import { Icon, edit } from '@wordpress/icons';
import { Select } from '../select/select';
import { RangeSlider } from '../range-slider/range-slider';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { UnitSwitcher } from '../../controls-auxiliary/unit-switcher/unit-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';
import { FontFamilySelect } from '../font-family/font-family';

import { createInnerControlAttributeUpdater } from '../../../utils/block-attributes';

import { getInnerSettingDefaultValue, getInnerSettingDefaultUnit } from '../../../utils/settings';

import { styles } from './styles';

export function Typography( props ) {
    const { label, settingId, attributes, setAttributes, attributesDefaults, setUpdateCss, subFields } = props;
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());

    const [ fontWeightOptions, setFontWeightOptions ] = useState([]);

    const googleFontsData = window.athemesBlocksGoogleFonts;
    const fontFamilyOptions = googleFontsData.items.map( ( font ) => {
        return {
            label: font.family,
            value: font.family,
        };
    } );

    const { 
        fontSize, 
        fontFamily, 
        fontWeight,
        fontStyle,
        textTransform,
        textDecoration,
        lineHeight,
        letterSpacing,
    } = attributes[settingId].innerSettings;

    const updateInnerControlAttribute = createInnerControlAttributeUpdater( settingId, attributes, setAttributes);

    useEffect( () => {
        if ( ! fontFamily.default['desktop'].value || fontFamily.default['desktop'].value === 'default' ) {
            setFontWeightOptions( 
                [
                    {
                        label: '400',
                        value: '400',
                    },
                    {
                        label: '500',
                        value: '500',
                    },
                    {
                        label: '600',
                        value: '600',
                    },
                    {
                        label: '700',
                        value: '700',
                    },
                ] 
            );
            
            return;
        }

        const selectedFontFamily = googleFontsData.items.find( ( font ) => font.family === fontFamily.default['desktop'].value );
        if ( ! selectedFontFamily ) {
            return;
        }

        const fontWeightOptions = selectedFontFamily.variants.map( ( variant ) => {
            return {
                label: variant,
                value: variant,
            };
        } );

        setFontWeightOptions( fontWeightOptions );

        // We need to update the font weight attribute when the font family changes.
        // This is needed because the font weight options are dynamic and depend on the font family.
        if (fontWeightOptions.length > 0) {
            const currentWeight = fontWeight.default[currentDevice].value;
            const newWeight = fontWeightOptions.find( ( weight ) => weight.value === currentWeight )?.value || fontWeightOptions[0].value;
            
            updateInnerControlAttribute('fontWeight', newWeight, currentDevice);
            
            setUpdateCss({
                type: 'inner-control',
                settingId: settingId,
                innerSettingId: 'fontWeight',
                value: newWeight,
            });
        }
    }, [ fontFamily.default['desktop'].value ] );

    // Popover State (default)
    const [ isDefaultVisible, setIsDefaultVisible ] = useState( false );
    const toggleDefaultVisible = () => {
        setIsDefaultVisible( ( state ) => ! state );
    };

    return(
        <BaseControl className="atblocks-component-typography">
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
                <Button 
                    css={styles.button}
                    label=""
                    icon={edit}
                    variant="secondary" 
                    onClick={ toggleDefaultVisible } 
                >

                    { isDefaultVisible && (
                        <Popover
                            css={styles.popover}
                            onClick={ ( event ) => event.stopPropagation() }
                            onFocusOutside={ toggleDefaultVisible }
                        >
                            {
                                ( subFields && subFields.includes('fontFamily') ) && (
                                    <>
                                        <FontFamilySelect
                                            label={ __( 'Font family', 'athemes-blocks' ) }
                                            options={ fontFamilyOptions }
                                            defaultValue={ fontFamily.default[currentDevice].value }
                                            responsive={false}
                                            reset={true}
                                            googleFontsData={ googleFontsData }
                                            onChange={ ( value ) => {
                                                updateInnerControlAttribute( 'fontFamily', value, currentDevice );
                                                
                                                setUpdateCss( {
                                                    type: 'inner-control',
                                                    settingId: settingId,
                                                    innerSettingId: 'fontFamily',
                                                    value: value,
                                                } );
                                            } }
                                            onFilterValueChange={ ( value ) => {

                                            } }
                                            onClickReset={ () => {
                                                updateInnerControlAttribute( 'fontFamily', attributesDefaults[settingId].default.innerSettings.fontFamily.default[currentDevice].value, currentDevice );

                                                setUpdateCss( {
                                                    type: 'inner-control',
                                                    settingId: settingId,
                                                    innerSettingId: 'fontFamily',
                                                    value: getInnerSettingDefaultValue( settingId, 'fontFamily', currentDevice, attributesDefaults ),
                                                } );
                                            } }
                                        />
                                        <Select
                                            label={ __( 'Weight', 'athemes-blocks' ) }
                                            options={ fontWeightOptions }
                                            value={ fontWeight.default[currentDevice].value }
                                            responsive={ false }
                                            reset={true}
                                            onChange={ ( value ) => {
                                                updateInnerControlAttribute( 'fontWeight', value, currentDevice );
                                                
                                                setUpdateCss( {
                                                    type: 'inner-control',
                                                    settingId: settingId,
                                                    innerSettingId: 'fontWeight',
                                                    value: value,
                                                } );
                                            } }
                                            onClickReset={ () => {
                                                updateInnerControlAttribute( 'fontWeight', attributesDefaults[settingId].default.innerSettings.fontWeight.default[currentDevice].value, currentDevice );

                                                setUpdateCss( {
                                                    type: 'inner-control',
                                                    settingId: settingId,
                                                    innerSettingId: 'fontWeight',
                                                    value: getInnerSettingDefaultValue( settingId, 'fontWeight', currentDevice, attributesDefaults ),
                                                } );
                                            } }
                                        />
                                    </>
                                )
                            }

                            {
                                ( subFields && subFields.includes('fontSize') ) && (
                                    <RangeSlider 
                                        label={ __( 'Font size', 'athemes-blocks' ) }
                                        defaultValue={ fontSize.default[currentDevice].value }
                                        defaultUnit={ fontSize.default[currentDevice].unit }
                                        min={ {
                                            px: 10,
                                            em: 0.1,
                                            rem: 0.1,
                                        } }
                                        max={ {
                                            px: 200,
                                            em: 10,
                                            rem: 10,
                                        } }
                                        responsive={ true }
                                        reset={ true }
                                        units={['px', 'em', 'rem']}
                                        onChange={ ( value ) => {
                                            updateInnerControlAttribute( 'fontSize', {
                                                value: value,
                                                unit: fontSize.default[currentDevice].unit
                                            }, currentDevice );

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'fontSize',
                                                value: value,
                                            } );
                                        } }
                                        onChangeUnit={ ( value ) => {
                                            updateInnerControlAttribute( 'fontSize', {
                                                value: fontSize.default[currentDevice].value,
                                                unit: value
                                            }, currentDevice );

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'fontSize',
                                                value: value,
                                            } );
                                        } }
                                        onClickReset={ () => {
                                            updateInnerControlAttribute( 'fontSize', {
                                                value: getInnerSettingDefaultValue( settingId, 'fontSize', currentDevice, attributesDefaults ),
                                                unit: getInnerSettingDefaultUnit( settingId, 'fontSize', currentDevice, attributesDefaults )
                                            }, currentDevice ); 

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'fontSize',
                                                value: getInnerSettingDefaultValue( settingId, 'fontSize', currentDevice, attributesDefaults ),
                                            } );
                                        } }
                                    />
                                )
                            }
                            
                            {/* {
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
                                        value={ fontWeight.default[currentDevice].value }
                                        responsive={ false }
                                        reset={true}
                                        onChange={ ( value ) => {
                                            updateInnerControlAttribute( 'fontWeight', value, currentDevice );
                                            
                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'fontWeight',
                                                value: value,
                                            } );
                                        } }
                                        onClickReset={ () => {
                                            updateInnerControlAttribute( 'fontWeight', attributesDefaults[settingId].default.innerSettings.fontWeight.default[currentDevice].value, currentDevice );

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'fontWeight',
                                                value: getInnerSettingDefaultValue( settingId, 'fontWeight', currentDevice, attributesDefaults ),
                                            } );
                                        } }
                                    />                                    
                                )
                            } */}

                            {
                                ( subFields && subFields.includes('fontStyle') ) && (
                                    <Select
                                        label={ __( 'Style', 'athemes-blocks' ) }
                                        options={[
                                            { label: __( 'Default', 'athemes-blocks' ), value: 'default' },
                                            { label: __( 'Italic', 'athemes-blocks' ), value: 'italic' },
                                            { label: __( 'Oblique', 'athemes-blocks' ), value: 'oblique' },
                                        ]}
                                        value={ fontStyle.default[currentDevice].value }
                                        responsive={ false }
                                        reset={true}
                                        onChange={ ( value ) => {
                                            updateInnerControlAttribute( 'fontStyle', value, currentDevice );
                                            
                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'fontStyle',
                                                value: value,
                                            } );
                                        } }
                                        onClickReset={ () => {
                                            updateInnerControlAttribute( 'fontStyle', attributesDefaults[settingId].default.innerSettings.fontStyle.default[currentDevice].value, currentDevice );

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'fontStyle',
                                                value: getInnerSettingDefaultValue( settingId, 'fontStyle', currentDevice, attributesDefaults ),
                                            } );
                                        } }
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
                                        value={ textTransform.default[currentDevice].value }
                                        responsive={ false }
                                        reset={true}
                                        onChange={ ( value ) => {
                                            updateInnerControlAttribute( 'textTransform', value, currentDevice );
                                            
                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'textTransform',
                                                value: value,
                                            } );
                                        } }
                                        onClickReset={ () => {
                                            updateInnerControlAttribute( 'textTransform', attributesDefaults[settingId].default.innerSettings.textTransform.default[currentDevice].value, currentDevice );

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'textTransform',
                                                value: getInnerSettingDefaultValue( settingId, 'textTransform', currentDevice, attributesDefaults ),
                                            } );
                                        } }
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
                                        value={ textDecoration.default[currentDevice].value }
                                        responsive={ false }
                                        reset={true}
                                        onChange={ ( value ) => {
                                            updateInnerControlAttribute( 'textDecoration', value, currentDevice );
                                            
                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'textDecoration',
                                                value: value,
                                            } );
                                        } }
                                        onClickReset={ () => {
                                            updateInnerControlAttribute( 'textDecoration', attributesDefaults[settingId].default.innerSettings.textDecoration.default[currentDevice].value, currentDevice );

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'textDecoration',
                                                value: getInnerSettingDefaultValue( settingId, 'textDecoration', currentDevice, attributesDefaults ),
                                            } );
                                        } }
                                    />                                    
                                )
                            }

                            {
                                ( subFields && subFields.includes('lineHeight') ) && (
                                    <RangeSlider 
                                        label={ __( 'Line Height', 'athemes-blocks' ) }
                                        defaultValue={ lineHeight.default[currentDevice].value }
                                        defaultUnit={ lineHeight.default[currentDevice].unit }
                                        min={ {
                                            px: 1,
                                            em: 0.1,
                                            rem: 0.1,
                                        } }
                                        max={ {
                                            px: 150,
                                            em: 10,
                                            rem: 10,
                                        } }
                                        responsive={ true }
                                        reset={ true }
                                        units={['px', 'em', 'rem']}
                                        onChange={ ( value ) => {
                                            updateInnerControlAttribute( 'lineHeight', {
                                                value: value,
                                                unit: lineHeight.default[currentDevice].unit
                                            }, currentDevice );

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'lineHeight',
                                                value: value,
                                            } );
                                        } }
                                        onChangeUnit={ ( value ) => {
                                            updateInnerControlAttribute( 'lineHeight', {
                                                value: lineHeight.default[currentDevice].value,
                                                unit: value
                                            }, currentDevice );

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'lineHeight',
                                                value: value,
                                            } );
                                        } }
                                        onClickReset={ () => {
                                            updateInnerControlAttribute( 'lineHeight', {
                                                value: getInnerSettingDefaultValue( settingId, 'lineHeight', currentDevice, attributesDefaults ),
                                                unit: getInnerSettingDefaultUnit( settingId, 'lineHeight', currentDevice, attributesDefaults )
                                            }, currentDevice ); 

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'lineHeight',
                                                value: getInnerSettingDefaultValue( settingId, 'lineHeight', currentDevice, attributesDefaults ),
                                            } );
                                        } }
                                    />
                                )
                            }

                            {
                                ( subFields && subFields.includes('letterSpacing') ) && (
                                    <RangeSlider 
                                        label={ __( 'Letter Spacing', 'athemes-blocks' ) }
                                        defaultValue={ letterSpacing.default[currentDevice].value }
                                        defaultUnit={ letterSpacing.default[currentDevice].unit }
                                        min={ {
                                            px: -30,
                                            em: -10,
                                            rem: -10,
                                        } }
                                        max={ {
                                            px: 30,
                                            em: 10,
                                            rem: 10,
                                        } }
                                        responsive={ true }
                                        reset={ true }
                                        units={['px', 'em', 'rem']}
                                        onChange={ ( value ) => {
                                            updateInnerControlAttribute( 'letterSpacing', {
                                                value: value,
                                                unit: letterSpacing.default[currentDevice].unit
                                            }, currentDevice );

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'letterSpacing',
                                                value: value,
                                            } );
                                        } }
                                        onChangeUnit={ ( value ) => {
                                            updateInnerControlAttribute( 'letterSpacing', {
                                                value: letterSpacing.default[currentDevice].value,
                                                unit: value
                                            }, currentDevice );

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'letterSpacing',
                                                value: value,
                                            } );
                                        } }
                                        onClickReset={ () => {
                                            updateInnerControlAttribute( 'letterSpacing', {
                                                value: getInnerSettingDefaultValue( settingId, 'letterSpacing', currentDevice, attributesDefaults ),
                                                unit: getInnerSettingDefaultUnit( settingId, 'letterSpacing', currentDevice, attributesDefaults )
                                            }, currentDevice ); 

                                            setUpdateCss( {
                                                type: 'inner-control',
                                                settingId: settingId,
                                                innerSettingId: 'letterSpacing',
                                                value: getInnerSettingDefaultValue( settingId, 'letterSpacing', currentDevice, attributesDefaults ),
                                            } );
                                        } }
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
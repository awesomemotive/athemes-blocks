import { __ } from '@wordpress/i18n';
import { Panel, PanelBody } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import { Dimensions } from '../dimensions/dimensions';
import { SwitchToggle } from '../../../block-editor/controls/switch-toggle/switch-toggle';
import { ColorPicker } from '../../../block-editor/controls/color-picker/color-picker';
import { Animation } from '../../../block-editor/controls/animation/animation';
import { RangeSlider } from '../../../block-editor/controls/range-slider/range-slider';
import { Border } from '../../../block-editor/controls/border/border';

import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getColorPickerSettingValue, getColorPickerSettingDefaultValue, getDimensionsSettingValue, getDimensionsSettingDirectionsValue, getDimensionsSettingConnectValue, getDimensionsSettingDefaultValue, getInnerSettingValue } from '../../../utils/settings';

const AdvancedPanel = (props) => {
    const { attributes, setAttributes, attributesDefaults, updateAttribute, setUpdateCss, blockName, isPanelOpened, onTogglePanelBodyHandler } = props;

    const atts = attributes;
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());

    return (
        <Panel>
            <PanelBody 
                title={ __( 'Layout', 'botiga-pro' ) } 
                initialOpen={false}
                opened={ isPanelOpened( 'layout', true ) }
                onToggle={ () => onTogglePanelBodyHandler( 'layout' ) }
            >
                <Dimensions
                    label={ __( 'Padding', 'athemes-blocks' ) }
                    directions={[
                        { label: __( 'Top', 'athemes-blocks' ), value: 'top' },
                        { label: __( 'Right', 'athemes-blocks' ), value: 'right' },
                        { label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
                        { label: __( 'Left', 'athemes-blocks' ), value: 'left' },
                    ]}
                    value={ getDimensionsSettingValue( 'padding', currentDevice, atts ) }
                    defaultUnit={ getSettingUnit('padding', currentDevice, atts) }
                    directionsValue={ getDimensionsSettingDirectionsValue('padding', currentDevice, atts) }
                    connect={ getDimensionsSettingConnectValue('padding', currentDevice, atts) }
                    responsive={ true }
                    units={['px', '%', 'em', 'rem', 'vh', 'vw']}
                    reset={true}
                    onChange={ ( value ) => {
                        updateAttribute( 'padding', {
                            value: value.value,
                            unit: getSettingUnit( 'padding', currentDevice, atts ),
                            connect: getDimensionsSettingConnectValue( 'padding', currentDevice, atts )
                        }, currentDevice );

                        setUpdateCss( { settingId: 'padding', value: value.value } );
                    } }
                    onChangeUnit={ ( value ) => {
                        updateAttribute( 'padding', {
                            value: getSettingValue( 'padding', currentDevice, atts ),
                            unit: value,
                            connect: getDimensionsSettingConnectValue( 'padding', currentDevice, atts )
                        }, currentDevice );

                        setUpdateCss( { settingId: 'padding', value: getSettingValue( 'padding', currentDevice, atts ) } );
                    } }
                    onClickReset={ () => {
                        updateAttribute( 'padding', getDimensionsSettingDefaultValue( 'padding', currentDevice, attributesDefaults ), currentDevice );

                        setUpdateCss( { settingId: 'padding', value: getDimensionsSettingDefaultValue( 'padding', currentDevice, attributesDefaults ) } );
                    } }
                />
                <Dimensions
                    label={ __( 'Margin', 'athemes-blocks' ) }
                    directions={[
                        { label: __( 'Top', 'athemes-blocks' ), value: 'top' },
                        { label: __( 'Right', 'athemes-blocks' ), value: 'right' },
                        { label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
                        { label: __( 'Left', 'athemes-blocks' ), value: 'left' },
                    ]}
                    value={ getDimensionsSettingValue( 'margin', currentDevice, atts ) }
                    defaultUnit={ getSettingUnit('margin', currentDevice, atts) }
                    directionsValue={ getDimensionsSettingDirectionsValue('margin', currentDevice, atts) }
                    connect={ getDimensionsSettingConnectValue('margin', currentDevice, atts) }
                    responsive={ true }
                    units={['px', '%', 'em', 'rem', 'vh', 'vw']}
                    reset={true}
                    onChange={ ( value ) => {
                        updateAttribute( 'margin', {
                            value: value.value,
                            unit: getSettingUnit( 'margin', currentDevice, atts ),
                            connect: getDimensionsSettingConnectValue( 'margin', currentDevice, atts )
                        }, currentDevice );

                        setUpdateCss( { settingId: 'margin', value: value.value } );
                    } }
                    onChangeUnit={ ( value ) => {
                        updateAttribute( 'margin', {
                            value: getSettingValue( 'margin', currentDevice, atts ),
                            unit: value,
                            connect: getDimensionsSettingConnectValue( 'margin', currentDevice, atts )
                        }, currentDevice );

                        setUpdateCss( { settingId: 'margin', value: getSettingValue( 'margin', currentDevice, atts ) } );
                    } }
                    onClickReset={ () => {
                        updateAttribute( 'margin', getDimensionsSettingDefaultValue( 'margin', currentDevice, attributesDefaults ), currentDevice );

                        setUpdateCss( { settingId: 'margin', value: getDimensionsSettingDefaultValue( 'margin', currentDevice, attributesDefaults ) } );
                    } }
                />
                <RangeSlider 
                    label={ __( 'Z-Index', 'athemes-blocks' ) }
                    defaultValue={ getSettingValue( 'zIndex', currentDevice, atts ) }
                    defaultUnit={ getSettingUnit( 'zIndex', currentDevice, atts ) }
                    min={ 0 }
                    max={ 15 }
                    responsive={ true }
                    reset={ true }
                    units={false}
                    onChange={ ( value ) => {
                        updateAttribute( 'zIndex', {
                            value: value,
                            unit: getSettingUnit( 'zIndex', currentDevice, atts )
                        }, currentDevice );

                        setUpdateCss( { settingId: 'zIndex', value: value } );
                    } }
                    onClickReset={ () => {
                        updateAttribute( 'zIndex', {
                            value: getSettingDefaultValue( 'zIndex', currentDevice, attributesDefaults ),
                            unit: getSettingDefaultUnit( 'zIndex', currentDevice, attributesDefaults )
                        }, currentDevice );							

                        setUpdateCss( { settingId: 'zIndex', value: getSettingDefaultValue( 'zIndex', currentDevice, attributesDefaults ) } );								
                    } }
                />
            </PanelBody>
            {
                ['athemes-blocks/flex-container'].includes(blockName) === false && (
                    <PanelBody 
                        title={__('Background', 'athemes-blocks')} 
                        initialOpen={false}
                        opened={ isPanelOpened( 'background' ) }
                        onToggle={ () => onTogglePanelBodyHandler( 'background' ) }
                    >
                        <ColorPicker
                            label={ __( 'Color', 'athemes-blocks' ) }
                            value={ getSettingValue('backgroundColor', 'desktop', atts) }
                            hover={true}
                            responsive={false}
                            reset={true}
                            defaultStateOnChangeComplete={ ( value ) => {
                                updateAttribute( 'backgroundColor', {
                                    value: {
                                        defaultState: value,
                                        hoverState: getColorPickerSettingValue( 'backgroundColor', 'desktop', 'hoverState', atts )
                                    }
                                }, 'desktop' );

                                setUpdateCss( { settingId: 'backgroundColor', value: getColorPickerSettingValue( 'backgroundColor', 'desktop', 'defaultState', atts ) } );                          
                            } }
                            hoverStateOnChangeComplete={ ( value ) => {
                                updateAttribute( 'backgroundColor', {
                                    value: {
                                        defaultState: getColorPickerSettingValue( 'backgroundColor', 'desktop', 'defaultState', atts ),
                                        hoverState: value
                                    }
                                }, 'desktop' );

                                setUpdateCss( { settingId: 'backgroundColor', value: getColorPickerSettingValue( 'backgroundColor', 'desktop', 'hoverState', atts ) } );                           
                            } }
                            onClickReset={ () => {
                                updateAttribute( 'backgroundColor', {
                                    value: {
                                        defaultState: getColorPickerSettingDefaultValue( 'backgroundColor', 'desktop', 'defaultState', attributesDefaults ),
                                        hoverState: getColorPickerSettingDefaultValue( 'backgroundColor', 'desktop', 'hoverState', attributesDefaults )
                                    }
                                }, 'desktop' ); 

                                setUpdateCss( { settingId: 'backgroundColor', value: getColorPickerSettingDefaultValue( 'backgroundColor', 'desktop', 'defaultState', attributesDefaults ) } );                            
                            } }
                        />
                    </PanelBody>
                )
            }
            {
                ['athemes-blocks/heading', 'athemes-blocks/text', 'athemes-blocks/icon', 'athemes-blocks/testimonials', 'athemes-blocks/google-maps'].includes(blockName) === true && (
                    <PanelBody 
                        title={ __( 'Border', 'botiga-pro' ) } 
                        initialOpen={false}
                        opened={ isPanelOpened( 'border' ) }
                        onToggle={ () => onTogglePanelBodyHandler( 'border' ) }
                    >
                        <Border
                            label=""
                            settingId="border"
                            attributes={ atts }
                            setAttributes={ setAttributes }
                            attributesDefaults={ attributesDefaults }
                            setUpdateCss={ setUpdateCss }
                            subFields={['borderStyle', 'borderWidth', 'borderRadius', 'borderColor']}
                        />
                    </PanelBody>
                )
            }
            <PanelBody 
                title={ __( 'Animation', 'botiga-pro' ) } 
                initialOpen={false}
                opened={ isPanelOpened( 'animation' ) }
                onToggle={ () => onTogglePanelBodyHandler( 'animation' ) }
            >
                <Animation
                    label=""
                    settingId="animation"
                    attributes={ atts }
                    setAttributes={ setAttributes }
                    attributesDefaults={ attributesDefaults }
                    setUpdateCss={ setUpdateCss }
                    subFields={['entranceAnimation', 'animationDuration', 'animationDelay']}
                />
            </PanelBody>
            <PanelBody 
                title={__('Responsive', 'athemes-blocks')} 
                initialOpen={false}
                opened={ isPanelOpened( 'responsive' ) }
                onToggle={ () => onTogglePanelBodyHandler( 'responsive' ) }
            >
                <SwitchToggle
                    label={ __( 'Hide On Desktop', 'athemes-blocks' ) }
                    value={ getSettingValue( 'hideOnDesktop', 'desktop', atts ) }
                    responsive={false}
                    reset={true}
                    onChange={ ( value ) => {
                        updateAttribute( 'hideOnDesktop', {
                            value: value
                        }, 'desktop' );
                    } }
                    onClickReset={ () => {
                        updateAttribute( 'hideOnDesktop', {
                            value: getSettingDefaultValue( 'hideOnDesktop', 'desktop', attributesDefaults )
                        }, 'desktop' );
                    } }
                />
                <SwitchToggle
                    label={ __( 'Hide On Tablet', 'athemes-blocks' ) }
                    value={ getSettingValue( 'hideOnTablet', 'desktop', atts ) }
                    responsive={false}
                    reset={true}
                    onChange={ ( value ) => {
                        updateAttribute( 'hideOnTablet', {
                            value: value
                        }, 'desktop' );
                    } }
                    onClickReset={ () => {
                        updateAttribute( 'hideOnTablet', {
                            value: getSettingDefaultValue( 'hideOnTablet', 'desktop', attributesDefaults )
                        }, 'desktop' );
                    } }
                />
                <SwitchToggle
                    label={ __( 'Hide On Mobile', 'athemes-blocks' ) }
                    value={ getSettingValue( 'hideOnMobile', 'desktop', atts ) }
                    responsive={false}
                    reset={true}
                    onChange={ ( value ) => {
                        updateAttribute( 'hideOnMobile', {
                            value: value
                        }, 'desktop' );
                    } }
                    onClickReset={ () => {
                        updateAttribute( 'hideOnMobile', {
                            value: getSettingDefaultValue( 'hideOnMobile', 'desktop', attributesDefaults )
                        }, 'desktop' );
                    } }
                />
            </PanelBody>
        </Panel>
    );
};

export default AdvancedPanel;
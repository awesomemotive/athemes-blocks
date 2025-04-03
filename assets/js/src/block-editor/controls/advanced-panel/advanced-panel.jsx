import { __ } from '@wordpress/i18n';
import { Panel, PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import { Dimensions } from '../dimensions/dimensions';
import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getColorPickerSettingValue, getColorPickerSettingDefaultValue, getDimensionsSettingValue, getDimensionsSettingDirectionsValue, getDimensionsSettingConnectValue, getDimensionsSettingDefaultValue, getInnerSettingValue } from '../../../utils/settings';

const AdvancedPanel = ({ attributes, setAttributes, attributesDefaults, updateAttribute, setUpdateCss }) => {
    const atts = attributes;
    const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());

    return (
        <Panel>
            <PanelBody title={__('Spacing', 'athemes-blocks')}>
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
                        console.log(value);
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
                        console.log(value);
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
            </PanelBody>
        </Panel>
    );
};

export default AdvancedPanel;
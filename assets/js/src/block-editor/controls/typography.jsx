import { __ } from '@wordpress/i18n';
import { useSelect } from "@wordpress/data";
import { useState, useEffect } from '@wordpress/element';
import { store as deviceSwitcherStore } from '../store/device-switcher-store';
import { BaseControl, Button, Popover, SelectControl } from '@wordpress/components';
import { Select } from '../../block-editor/controls/select';
import { RangeSlider } from '../controls/range-slider';
import { DeviceSwitcher } from '../controls-auxiliary/device-switcher/device-switcher-control';
import { UnitSwitcher } from '../controls-auxiliary/unit-switcher/unit-switcher-control';
import { ResetValues } from '../controls-auxiliary/reset-values/reset-values-control';

import { createInnerControlAttributeUpdater } from '../../utils/block-attributes';

export function Typography( props ) {
    const { label, attributeId, attributes, setAttributes, attributesDefaults } = props;
    const currentDevice = useSelect((select) => select('device-switcher-store').getCurrentDevice());
    const { fontSize, fontFamily } = attributes[attributeId].typographySettings;

    const updateInnerControlAttribute = createInnerControlAttributeUpdater( attributeId, attributes, setAttributes);

    // Popover State (default)
    const [ isDefaultVisible, setIsDefaultVisible ] = useState( false );
    const toggleDefaultVisible = () => {
        setIsDefaultVisible( ( state ) => ! state );
    };

    return(
        <BaseControl>
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
                        <Select
                            label={ __( 'Font family', 'athemes-blocks' ) }
                            options={[
                                { label: __( 'Arial', 'athemes-blocks' ), value: 'Arial' },
                                { label: __( 'Helvetica', 'athemes-blocks' ), value: 'Helvetica' },
                                { label: __( 'Times New Roman', 'athemes-blocks' ), value: 'Times New Roman' },
                            ]}
                            value={ fontFamily }
                            reset={true}
                            onChange={ ( value ) => updateInnerControlAttribute( 'fontFamily', value, currentDevice ) }
                            onClickReset={ () => updateInnerControlAttribute( 'fontFamily', attributesDefaults[attributeId].default.typographySettings.fontFamily, currentDevice ) }
                        />

                        <RangeSlider 
							label={ __( 'Font size2', 'athemes-blocks' ) }
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
                    </Popover>
                ) }

            </Button>
        </BaseControl>
    );
}
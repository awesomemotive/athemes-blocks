import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { store as deviceSwitcherStore } from '../../store/device-switcher-store';
import { BaseControl, Button, Popover, ColorPicker as ColorPickerControl } from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

import { colord } from 'colord';

export function ColorPicker( props ) {
    const { label, value, hover, responsive, reset, onChange, onClickReset, defaultStateOnChangeComplete, hoverStateOnChangeComplete } = props;
    const { defaultState, hoverState } = value;

    const colorObjectDefaultState = colord( defaultState );
    const colorObjectHoverState = colord( hoverState );

    // Popover State (default)
    const [ isDefaultVisible, setIsDefaultVisible ] = useState( false );
    const toggleDefaultVisible = () => {
        setIsDefaultVisible( ( state ) => ! state );
    };

    // Popover State (hover)
    const [ isHoverVisible, setIsHoverVisible ] = useState( false );
    const toggleHoverVisible = () => {
        setIsHoverVisible( ( state ) => ! state );
    };

    return(
        <BaseControl>
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
                {
                    responsive && (
                        <DeviceSwitcher />
                    )
                }
                {
                    reset && (
                        <ResetValues 
                            onClick={ onClickReset }
                        />
                    )
                }
            </div>
            
            <Button 
                label=""
                variant="secondary" 
                onClick={ toggleDefaultVisible } 
                style={ { 
                    backgroundColor: defaultState,
                    textIndent: '-99999px',
                    width: '25px',
                    height: '25px',
                    boxShadow: 'none',
                    outlineColor: '#adadad',
                    borderRadius: '100%',
                    marginLeft: ! hover ? 0 : 'auto',
                    marginRight: ! hover ? 0 : '10px'
                } }>

                { isDefaultVisible && (
                    <Popover
                        onClick={ ( event ) => event.stopPropagation() }
                        onFocusOutside={ toggleDefaultVisible }>
                        <ColorPickerControl
                            color={ colorObjectDefaultState }
                            enableAlpha
                            onChangeComplete={ defaultStateOnChangeComplete }
                        />  
                    </Popover>
                ) }

            </Button>
            {
                hover && (
                    <Button 
                        label=""
                        variant="secondary" 
                        onClick={ toggleHoverVisible } 
                        style={ { 
                            backgroundColor: hoverState,
                            textIndent: '-99999px',
                            width: '25px',
                            height: '25px',
                            boxShadow: 'none',
                            outlineColor: '#adadad',
                            borderRadius: '100%' 
                        } }>

                        { isHoverVisible && (
                            <Popover
                                onClick={ ( event ) => event.stopPropagation() }
                                onFocusOutside={ toggleHoverVisible }>
                                <ColorPickerControl
                                    color={ colorObjectHoverState }
                                    enableAlpha
                                    onChangeComplete={ hoverStateOnChangeComplete }
                                />  
                            </Popover>
                        ) }
                        
                    </Button>
                )
            }
            
        </BaseControl>
    );
}
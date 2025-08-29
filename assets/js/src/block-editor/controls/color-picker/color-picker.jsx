import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { BaseControl, Button, Popover, ColorPalette as ColorPickerControl, Tooltip } from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

export function ColorPicker( props ) {
    let { label, value, hover, responsive, reset, enableAlpha, onChange, onClickReset, defaultStateOnChangeComplete, hoverStateOnChangeComplete } = props;
    const { defaultState, hoverState } = value;

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

    // Color Palette.
    const colorPalette = athemesBlocksColorPalette || [
        {
            color: '#f00',
            name: 'Red'
        },
        {
            color: '#fff',
            name: 'White'
        },
        {
            color: '#00f',
            name: 'Blue'
        }
    ];

    // Enable alpha.
    if ( ! enableAlpha ) {
        enableAlpha = true;
    }

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
            
            <Tooltip text={ __( 'Default', 'athemes-blocks' ) }>
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
                        className="atblocks-popover"
                        onClick={ ( event ) => event.stopPropagation() }
                        onFocusOutside={ toggleDefaultVisible }>
                        <ColorPickerControl
                            colors={ colorPalette }
                            enableAlpha={enableAlpha}
                            onChange={ defaultStateOnChangeComplete }
                            value={ defaultState }
                        />
                    </Popover>
                ) }

                </Button>
            </Tooltip>
            {
                hover && (
                    <Tooltip text={ __( 'Hover', 'athemes-blocks' ) }>
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
                                className="atblocks-popover"
                                onClick={ ( event ) => event.stopPropagation() }
                                onFocusOutside={ toggleHoverVisible }>
                                <ColorPickerControl
                                    colors={ colorPalette }
                                    enableAlpha={enableAlpha}
                                    onChange={ hoverStateOnChangeComplete }
                                    value={ hoverState }
                                />  
                            </Popover>
                        ) }
                        
                        </Button>
                    </Tooltip>
                )
            }
            
        </BaseControl>
    );
}
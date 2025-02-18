import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";
import { 
    BaseControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption, 
} from '@wordpress/components';


export function RadioButtons( props ) {
    const { label, options, defaultValue, responsive, onChange } = props;
    const [ value, setValue ] = useState( defaultValue );

    const device = useSelect((select) => select("athemes-blocks/device-switcher").getDevice(), []);
    const { textDesktop, textTablet, textMobile } = attributes;

    const handleChange = (value) => {
        if (device === "desktop") {
            setAttributes({ textDesktop: value });
        } else if (device === "tablet") {
            setAttributes({ textTablet: value });
        } else {
            setAttributes({ textMobile: value });
        }
    };

    return(
        <BaseControl>
             <div>
                <input
                    type="text"
                    value={device === "desktop" ? textDesktop : device === "tablet" ? textTablet : textMobile}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder={`Text for ${device}`}
                />
            </div>

            <div className="atblocks-header">
                <span className="atblocks-header__title">{ label }</span>
                {
                    responsive && (
                        <span className="atblocks-header__responsive">
                            { __( 'Responsive', 'athemes-blocks' ) }
                        </span>
                    )
                }
            </div>
            <ToggleGroupControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                className="atblocks-radio-buttons"
                isBlock
                onChange={onChange}
                value={value}
            >
                {
                    options.map( ( option, index ) => {
                        return(
                            <ToggleGroupControlOption
                                key={index}
                                label={option.label}
                                value={option.value}
                            />
                        );
                    })
                }            
            </ToggleGroupControl>
        </BaseControl>
    );
}
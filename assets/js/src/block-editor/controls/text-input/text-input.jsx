import { __ } from '@wordpress/i18n';
import { BaseControl, TextControl } from '@wordpress/components';
import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

export function TextInput( props ) {
    const { label, value, responsive, reset, onChange, onClickReset } = props;

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
            
            <TextControl
                value={value}
                onChange={onChange}
            />
        </BaseControl>
    );
}
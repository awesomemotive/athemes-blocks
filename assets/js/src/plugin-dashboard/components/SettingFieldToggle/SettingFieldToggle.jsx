import { useState } from 'react';

import { ToggleControl } from '@wordpress/components';

const SettingFieldToggle = ( { value, onChange } ) => {
    const [ inputValue, setInputValue ] = useState( value );

    return (
        <ToggleControl
            checked={ inputValue }
            onChange={(value) => {
                setInputValue( value );
                onChange( value );
            }}
        />
    );
};

export { SettingFieldToggle };
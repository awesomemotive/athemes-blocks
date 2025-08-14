import { useState } from 'react';

import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

const SettingFieldNumber = ( { value, onChange } ) => {
    const [ inputValue, setInputValue ] = useState( value );

    return (
        <NumberControl
            __next40pxDefaultSize
            label=""
            value={inputValue}
            onChange={(value) => {
                setInputValue( value );
                onChange( value );
            }}
        />
    );
};

export { SettingFieldNumber };
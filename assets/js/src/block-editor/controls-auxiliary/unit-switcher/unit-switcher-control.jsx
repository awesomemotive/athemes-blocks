/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { SelectControl } from "@wordpress/components";

export function UnitSwitcher(props) {
    if (!props) {
        return null;
    }
        
    const { units, value, onChange } = props;
    const currentDevice = useSelect((select) => select('device-switcher-store').getCurrentDevice());
    const [ unit, setUnit ] = useState(units);

    const options = units.map( ( item ) => {
        return {
            label: item,
            value: item,
        };
    } );

    return (
        <SelectControl
            label=""
            value={value}
            options={options}
            onChange={ onChange }
        />
    );
};
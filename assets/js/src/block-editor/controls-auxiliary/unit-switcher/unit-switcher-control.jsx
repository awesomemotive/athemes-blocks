/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { SelectControl } from "@wordpress/components";

import { styles } from './unit-switcher-styles';

export function UnitSwitcher(props) {
    if (!props) {
        return null;
    }
        
    const { units, value, onChange } = props;
    const options = units.map( ( item ) => {
        return {
            label: item,
            value: item,
        };
    } );

    return (
        <div css={styles.auxiliaryWrapper} className="atblocks-control-auxiliary-wrapper">
            <SelectControl
                css={styles.select}
                className="atblocks-component-unit-switcher"
                label=""
                value={value}
                options={options}
                onChange={ onChange }
            />
        </div>
    );
};
/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { SelectControl } from "@wordpress/components";

export function ResetValues(props) {
    const { onClick } = props;

    return (
        <button 
            onClick={onClick}
        >
            Reset
        </button>
    );
};
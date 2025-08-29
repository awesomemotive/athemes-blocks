/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { Icon, rotateLeft } from '@wordpress/icons';

import { styles } from './reset-values-styles';

export function ResetValues(props) {
    const { onClick } = props;

    return (
        <button
            css={styles.button}
            className="atblocks-component-reset-values"
            onClick={onClick}
        >
            <Icon
                css={styles.icon} 
                icon={rotateLeft} 
            />
        </button>
    );
};
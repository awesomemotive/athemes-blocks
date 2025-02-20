import { css } from '@emotion/react';

const styles = {
    buttonGroup: css`

    `,
    button: css`
        padding: 7px;
        box-shadow: inset 0 0 0 1px #CCC;
        height: auto;
    `,
    icon: css`
        width: 12px;
        height: auto;

        rect, polygon, line, path {
            stroke: #212121;
        }
    `
};

export { styles };
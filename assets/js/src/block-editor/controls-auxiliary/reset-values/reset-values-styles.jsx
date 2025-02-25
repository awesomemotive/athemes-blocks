import { css } from '@emotion/react';

const styles = {
    button: css`
        padding: 2px;
        box-shadow: none !important;
        height: auto;
        background: none;
        border: 0;
        cursor: pointer;
        outline: none;

        &.is-active {
            svg {
                rect, polygon, line, path {
                    stroke: var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));
                }
            }
        }
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
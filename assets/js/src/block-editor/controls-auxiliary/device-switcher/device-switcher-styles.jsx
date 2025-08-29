import { css } from '@emotion/react';

const styles = {
    buttonGroup: css`
        display: flex;
        align-items: center;
    `,
    button: css`
        padding: 2px !important;
        box-shadow: none !important;
        height: auto;

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
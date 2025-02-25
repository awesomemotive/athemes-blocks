import { css } from '@emotion/react';

const styles = {
    control: css`
        display: flex;
        flex-wrap: nowrap;
    `,
    inputWrapper: css`
        display: flex;
        flex-wrap: nowrap;
    `,
    inputItem: css`
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;

        input {
            height: auto !important;
            min-width: 0;
            min-height: 0 !important;
            padding: 7px 0px 8px 7px !important;
        }

        .components-base-control {
            margin: 0;
        }

        .components-input-control__backdrop {
            border-color: #e7e4e4 !important;
            border-left: 0;
        }

        label {
            font-size: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #989898;
        }

        &:first-child {
            .components-input-control__backdrop {
                border-left: 1px solid #e7e4e4 !important;
            }
        }
    `,
    inputLabel: css`
        
    `,
    connectValuesToggle: css`
        svg {
            width: 17px;
            height: auto;
        }

        .components-button {
            &.is-active {
                svg {
                    path {
                        fill: var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));
                    }
                }
            }
        }
    `,
};

export { styles };
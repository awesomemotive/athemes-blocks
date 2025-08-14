import { css } from '@emotion/react';

const styles = {
    wrapper: css`
        .atblocks-component-radio-images__wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .atblocks-component-radio-images__option {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            cursor: pointer;
            border: 2px solid #ededed;
            border-radius: 4px;
            box-sizing: content-box;

            svg {
                width: 100%;
                height: 100%;
            }

            &.is-selected {
                border-color: var(--at-color-primary, #335EEA);
            }

            &:focus {
                border-color: var(--at-color-primary, #335EEA);
            }
        }
    `,
};

export { styles };
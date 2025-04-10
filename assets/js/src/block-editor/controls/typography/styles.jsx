import { css } from '@emotion/react';

const styles = {
    button: css`
        background: none !important;
        border: 1px solid #CCC !important;
        border-radius: 4px;
        color: #212121 !important;
        cursor: pointer;
        box-shadow: none !important;
        width: 25px;
        height: 25px;
        min-width: 0 !important;

        svn {
            width: 14px;
            height: auto;

            path {
                fill: #212121;
            }
        }
    `,
    popover: css`
        .components-popover__content {
            width: 100%;
            max-width: 237px;
            padding: 10px;
        }
    `,
};

export { styles };
import { css } from '@emotion/react';

const styles = {
    auxiliaryWrapper: css`
        > .components-base-control,
        > .components-base-control > .components-base-control__field {
            margin: 0;
        }
    `,
    select: css`
        select {
            padding: 8px 21px 5px 4px !important;
            line-height: 1 !important;
            min-height: 0 !important;
            height: auto !important;
            margin-top: -7px !important;
        }

        .components-input-control__backdrop {
            border: none !important;
        }
    `,

};

export { styles };
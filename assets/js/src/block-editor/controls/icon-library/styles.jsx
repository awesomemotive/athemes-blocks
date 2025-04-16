import { css } from '@emotion/react';

const styles = {
    modal: css`
        .components-modal__content {
            overflow: hidden;
        }
    `,
    iconsLibrary: css`
        display: flex;
        gap: 10px;

        .atblocks-icon-library__categories {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    `,
    iconsGrid: css`
        > div {
            // display: grid;
            // grid-template-columns: repeat( 10, 1fr );
            // gap: 20px;
            // max-height: 500px;
            // overflow-y: auto;

            // .atblocks-icon-library__icons-grid-row {
            //     display: grid;
            //     grid-template-columns: repeat( 10, 1fr );
            //     gap: 20px;
            // }
        }
    `,
    icon: css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 85px;
        height: 85px;
        padding: 0;
        box-sizing: content-box;

        svg {
            width: 22px;
            height: 22px;
        }
    `,
};

export { styles };
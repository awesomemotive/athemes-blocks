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
    iconPreview: css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border: 1px solid #ededed;
        border-radius: 4px;
        padding: 15px 0px;
        box-sizing: content-box;

        svg {
            width: 22px;
            height: 22px;
        }

        .atblocks-icon-library__icon-preview-placeholder {
            font-size: 1.4rem;
        }
    `,
};

export { styles };
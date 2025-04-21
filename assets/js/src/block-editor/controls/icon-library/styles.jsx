import { css } from '@emotion/react';

const styles = {
    modal: css`
        .components-modal__content {
            max-height: 100%;
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
        color: #212121 !important;
        padding: 0;
        box-sizing: content-box;
        box-shadow: none !important;
        border: 2px solid #ededed;
        transition: box-shadow 250ms ease;

        svg {
            width: 22px;
            height: 22px;
        }

        &.is-selected {
            border-color: var(--at-color-primary, #335EEA);
        }

        &:hover {
            box-shadow: 0 0 0 2px rgba(128, 128, 128, 0.2) !important;
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
    categoryButton: css`
        background: transparent;
        border: 0;
        box-shadow: none !important;

        &.is-selected,
        &.is-selected:hover:not(:disabled) {
            background-color: var(--at-color-primary, #335EEA);
            color: #fff !important;
        }

        &:hover {
            color: var(--atb-color-primary, #335EEA) !important;
        }
    `,
    search: css`
        margin-bottom: 15px;
        margin-left: 5px;

        .components-text-control__input {
            height: 42px;
            font-size: 0.9rem;
            border-radius: 4px;
            border-color: #ededed;
            padding-left: 10px;
            padding-right: 10px;
        }
    `,
};

export { styles };
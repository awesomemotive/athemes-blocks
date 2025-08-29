import { css } from '@emotion/react';

const styles = {
    fieldWrapper: css`
        .atblocks-image-upload__image-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            border: 1px dashed #ededed;
            border-radius: 5px;

            img {
                display: block;
                width: 100%;
                height: 100%;
                max-height: 100px;
                object-fit: cover;
                object-position: center;
            }

            .atblocks-image-upload__actions {
                display: flex;
                align-items: center;
                gap: 5px;
                width: 100%;
                height: 100%;

                .atblocks-image-upload__actions-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    background-color: #fff;
                    border: none;
                    padding: 0;

                    &:hover {
                        background-color: #f0f0f0;

                        svg {
                            path {
                                fill: #212121;
                            }
                        }
                    }

                    svg {
                        width: 16px;
                        height: 16px;

                        path {
                            fill: #757575;
                        }
                    }
                }
            }

            &.has-image {
                position: relative;

                .atblocks-image-upload__actions {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: auto;
                    height: auto;

                    .atblocks-image-upload__actions-item {
                        width: 24px;
                        height: 24px;
                        border: 1px solid #ccc;
                        border-radius: 50%;
                    }
                }
            }
        }
    `,
};

export { styles };
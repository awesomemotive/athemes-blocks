export function getImageSizeLabel( size ) {
    const availableSizes = athemesBlocksAvailableImageSizes || [];

    const sizeData = availableSizes.find( ( availableSize ) => availableSize.value === size );

    if ( sizeData ) {
        return sizeData.label;
    }

    return size;
}
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
    return (
        <h1 { ...useBlockProps.save() }>
			The heading text here.
		</h1>
    );
}

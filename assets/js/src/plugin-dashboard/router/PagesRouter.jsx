import { PageBlocks } from '../pages/PageBlocks.jsx';
import { PageSettings } from '../pages/PageSettings.jsx';

export function PagesRouter({ page }) {
	return (
		<>
			{ page === 'blocks' && <PageBlocks /> }
			{ page === 'settings' && <PageSettings /> }
		</>
	);
}
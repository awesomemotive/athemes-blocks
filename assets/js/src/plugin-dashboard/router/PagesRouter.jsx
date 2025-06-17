import { PageBlocks } from '../pages/PageBlocks.jsx';
import { PageSettingsEditorOptions } from '../pages/PageSettingsEditorOptions.jsx';
import { PageSettingsPerformance } from '../pages/PageSettingsPerformance.jsx';

export function PagesRouter({ page }) {
	return (
		<>
			{ page === 'blocks' && <PageBlocks /> }
			{ page === 'settings-editor-options' && <PageSettingsEditorOptions /> }
			{ page === 'settings-performance' && <PageSettingsPerformance /> }
		</>
	);
}
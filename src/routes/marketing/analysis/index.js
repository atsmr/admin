import { h } from 'preact';
import style from './style';
import ContentsHeader from '../../../components/molecules/contentsHeader'

const MarketingAnalysis = () => (
	<div class={style.home}>
        <ContentsHeader title="Analysis" />
		<p>This is the Analysis component.</p>
		<p>This is the Analysis component.</p>
		<p>This is the Analysis component.</p>
	</div>
);

export default MarketingAnalysis;

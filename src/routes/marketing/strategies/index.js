import { h } from 'preact';
import style from './style';
import ContentsHeader from '../../../components/molecules/contentsHeader'

const MarketingAnalysis = () => (
	<div class={style.home}>
        <ContentsHeader title="Strategies" />
		<p>This is the Home component.</p>
		<p>This is the Home component.</p>
		<p>This is the Home component.</p>
	</div>
);

export default MarketingAnalysis;

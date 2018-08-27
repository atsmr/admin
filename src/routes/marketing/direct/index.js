import { h } from 'preact';
import style from './style';
import ContentsHeader from '../../../components/molecules/contentsHeader'

const MarketingAnalysis = () => (
	<div class={style.home}>
        <ContentsHeader title="Direct" />
		<p>This is the Direct component.</p>
		<p>This is the Direct component.</p>
		<p>This is the Direct component.</p>
	</div>
);

export default MarketingAnalysis;

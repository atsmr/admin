import { h } from 'preact';
import style from './style';
import ContentsHeader from '../../components/molecules/contentsHeader'

const Support = () => (
	<div class={style.home}>
        <ContentsHeader title="Support" />
		<p>This is the Home component.</p>
	</div>
);

export default Support;

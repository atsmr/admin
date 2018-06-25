import { h } from 'preact';
import style from './style';
import ContentsHeader from '../../components/molecules/contentsHeader'

const Marketing = () => (
	<div class={style.home}>
        <ContentsHeader title="Marketing" />
		<p>This is the Home component.</p>
	</div>
);

export default Marketing;

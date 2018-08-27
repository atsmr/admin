import { h } from 'preact';
import style from './style';
import ContentsHeader from '../../../components/molecules/contentsHeader'

const Management = () => (
	<div class={style.home}>
        <ContentsHeader title="Shifts" />
		<p>This is the Shifts component.</p>
	</div>
);

export default Management;

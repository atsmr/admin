import { h } from 'preact';
import style from './style';
import ContentsHeader from '../../components/molecules/contentsHeader'

const Management = () => (
	<div class={style.home}>
        <ContentsHeader title="Management" />
		<p>This is the Home component.</p>
	</div>
);

export default Management;

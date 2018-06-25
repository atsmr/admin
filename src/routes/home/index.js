import { h } from 'preact';
import style from './style';
import ContentsHeader from '../../components/molecules/contentsHeader'

const Home = () => (
	<div class={style.home}>
        <ContentsHeader title="Dashboard" />
		<p>This is the Home component.</p>
	</div>
);

export default Home;

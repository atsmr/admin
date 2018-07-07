import { h } from 'preact';
import style from './style';
import ContentsHeader from '../../components/molecules/contentsHeader'
import CircleChart from '../../components/molecules/circleChart'

const Home = () => (
	<div class={style.home}>
        <ContentsHeader title="Dashboard" />
		<p>This is the Home component.</p>
        <CircleChart />
	</div>
);

export default Home;

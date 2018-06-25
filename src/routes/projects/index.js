import { h } from 'preact';
import style from './style';
import ContentsHeader from '../../components/molecules/contentsHeader'

const Projects = () => (
	<div class={style.home}>
        <ContentsHeader title="Projects" />
		<p>This is the Home component.</p>
	</div>
);

export default Projects;

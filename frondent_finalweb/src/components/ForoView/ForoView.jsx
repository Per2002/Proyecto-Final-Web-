import Entradas from "./Entradas/Entradas";
import Header from "../Header/Header";
import PiePagina from "../PiePagina/PiePagina";

const ForoView = () => {
	return (
		<div>
			<Header />
			<Entradas />
			<PiePagina />
		</div>
	);
}

export default ForoView;
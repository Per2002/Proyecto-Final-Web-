import Header from "../Header/Header";
import Principal from "./Principal/Principal";
import PiePagina from "../PiePagina/PiePagina";

const HomeView = () => {
    return (
        <div>
            <Header />
            <Principal /> 
            <PiePagina />           
        </div>

    );
}

export default HomeView;
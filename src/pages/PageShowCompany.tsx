import { getDataOfCompany } from "../services/WebClientMercadoFacil";


const PageShowCompany = () => {

    getDataOfCompany();

    return (
        <h1>Component Importado</h1>
    );

}

export default PageShowCompany;
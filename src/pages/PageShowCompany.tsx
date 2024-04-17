import CompanyCard from "../components/companyCard/CompanyCard";
import { getDataOfCompany } from "../services/WebClientMercadoFacil";


const PageShowCompany = () => {

    getDataOfCompany();

    return (
        <CompanyCard/>        
    );

}

export default PageShowCompany;
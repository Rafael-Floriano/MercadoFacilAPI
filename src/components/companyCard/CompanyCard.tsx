
import {
    Typography,
    Card
  } from "@material-tailwind/react";
import './CompanyCard.css';

const CompanyCard = () => {
    return (
        <Card className="conteiner-card_tailwind" color="white" shadow={true}>
        <div className="conteiner-card_company grid gap-6 mb-6 md:grid-cols-2">
            <div className="conteiner-logo_company">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLmjcmr_pYZUqqi36N9zg2Iwdt2ifpS4OPA3yZ3rez1w&s" alt="Logo Raízen" />
            </div>

            <div className="conteiner-primary-info">
                <div className="conteiner-info">
                    <Card color="grey" shadow={true} className="config-info">
                        <Typography variant="h4" color="purple">Valor Atual</Typography>
                        <Typography variant="h4" color="black">39,22</Typography>
                    </Card>
                    <Card color="grey" shadow={true} className="config-info">
                        <Typography variant="h4" color="purple">Valor Atual</Typography>
                        <Typography variant="h4" color="black">39,22</Typography>
                    </Card>
                    <Card color="grey" shadow={true} className="config-info">
                        <Typography variant="h4" color="purple">Valor Atual</Typography>
                        <Typography variant="h4" color="black">39,22</Typography>
                    </Card>
                </div>
                <div className="conteiner-info">
                    <Card color="grey" shadow={true} className="config-info">
                        <Typography variant="h4" color="purple">Valor Atual</Typography>
                        <Typography variant="h4" color="black">39,22</Typography>
                    </Card>
                    <Card color="grey" shadow={true} className="config-info">
                        <Typography variant="h4" color="purple">Valor Atual</Typography>
                        <Typography variant="h4" color="black">39,22</Typography>
                    </Card>
                    <Card color="grey" shadow={true} className="config-info">
                        <Typography variant="h4" color="purple">Valor Atual</Typography>
                        <Typography variant="h4" color="black">39,22</Typography>
                    </Card>
                </div>
            </div>
        </div>
        </Card>
    );
}

export default CompanyCard;
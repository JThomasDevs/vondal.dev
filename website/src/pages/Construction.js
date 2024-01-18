import BusinessContact from "../components/BusinessContact";
import HomeButton from "../components/HomeButton";
import Helmet from "react-helmet";


function Construction({ header }) {
    return (
        <>
            <Helmet>
                <title>{ '{ Construction }' }</title>
            </Helmet>
            { header }
            <HomeButton />
            <div className="bg-black font-mono">
                <p className="text-content-text text-center body-text pt-4">
                    This Page is Under Construction
                </p>
            </div>
            <BusinessContact />
        </>
    );
}

export default Construction;

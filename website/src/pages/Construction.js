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
            <div className="bg-black font-mono text-center flex-col items-center justify-center">
                <p className="text-content-text tracking-tighter leading-6 flex-col text-center body-text pt-4">
                    This Page is Under Construction
                </p>
                <BusinessContact />
            </div>
        </>
    );
}

export default Construction;

import BusinessContact from "../components/BusinessContact";
import HomeButton from "../components/HomeButton";


function Construction({ header }) {
    return (
        <>
            { header }
            <HomeButton />
            <div className="bg-black font-mono text-center flex-col items-center justify-center">
                <p className="text-content-text break-words leading-6 flex-col text-center pl-10vw pr-10vw pt-4">
                    This Page is Under Construction
                </p>
                <BusinessContact />
            </div>
        </>
    );
}

export default Construction;

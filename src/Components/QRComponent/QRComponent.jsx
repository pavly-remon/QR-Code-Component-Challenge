import Assets from "@/assets/assets.js";

const QRComponent = () => {
    const assets = Assets;

    return (
        <>
            <div className="qr-card rounded-2xl shadow-lg m-5 p-5 mx-auto mobile:w-[70%] w-[50%] bg-white">
                <img className="rounded-2xl mb-5" src={assets.qrCodeImage} alt="QR Code"/>
                <p className="font-bold text-center text-2xl mb-5">Improve your front-end skills by building
                    projects</p>
                <p className="font-thin text-center mb-5">Scan the QR code to visit Frontend Mentor and take your coding
                    skills to the
                    next level</p>
            </div>
        </>
    )
};

export default QRComponent;
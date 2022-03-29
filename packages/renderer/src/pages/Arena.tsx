import { BackButton } from "../components";

const Arena = () => {
    
    return (
        <div className="arena-container">
            <div className="header">
                <div className="back-button-wrapper">
                    <BackButton />
                </div>
                <h1>Tank Game</h1>
            </div>
            <div className="score-container">

            </div>
            <div className="play-area-container">

            </div>
            <div className="footer">
                <h4>Created by Malitha</h4>
            </div>
        </div>
    )
}

export default Arena;
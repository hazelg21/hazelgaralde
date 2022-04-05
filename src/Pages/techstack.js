
import TechUsed from "../Components/techUsed"


export default function Techstack() {

    return (
        <div className="techstackDiv" id="page-tech">
            <div className="tech">
                <h1 className="tech-h1">Tech Stack</h1>
            </div>

            {/* cards for tech image */}
            <TechUsed />
        </div>
    )
}
import useHighlight from "../hooks/useHighlight";
import useTitle from "../hooks/useTitle";

const About = () => {
    useTitle("TICKET APP - HOME");
    const { highlight } = useHighlight("about");

    if(highlight !== null && highlight === "about"){
        document.querySelector("#signup-btn").classList.remove("bg-green-200");
        document.querySelector("#login-btn").classList.remove("bg-green-200");
    }
    
    return (
        <div className="py-20 grid grid-cols-12">
            <div className="col-span-1">

            </div>
            <div className="col-span-10 text-center">
                <div className="h-96 flex flex-wrap content-center">
                    <p className="text-green-500 text-xl w-full">PLEASE CREATE AN ACCOUNT OR LOGIN TO CONTINUE...</p>
                    <div className="mt-2 w-full">
                        <hr className="text-green-500"></hr>
                        <p className="italic text-green-500">
                            This app is for generating of ticket that can be used as a troubleshooting receipt for our technician. <br></br>
                            The stack used for this app are <span className="underline text-blue-500">React JS</span>, <span className="underline text-black">tailwind css</span> and <span className="underline text-yellow-600">Firebase</span>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1">

            </div>
        </div>
    )
}

export default About;
import useHighlight from "../../hooks/useHighlight";
import useTitle from "../../hooks/useTitle";
import Back from "../Back";

const Signup = () => {
    useTitle("TICKET APP - SIGNUP");
    const { highlight } = useHighlight("signup");

    if(highlight !== null && highlight === "signup"){
        document.querySelector("#signup-btn").classList.add("bg-green-200");
        document.querySelector("#login-btn").classList.remove("bg-green-200");
    }

    return (
        <div className="py-20 grid grid-cols-12">
            <div className="col-span-1">
                <Back />
            </div>
            <div className="col-span-10 flex justify-center">
                <div className="card">
                    <p className="text-3xl">CREATE ACCOUNT</p>
                    <form className="mt-3">
                        <div>
                            <label className="block">EMAIL:</label>
                            <input type="email" className="input" />
                        </div>
                        <div className="mt-3">
                            <label className="block">PASSWORD:</label>
                            <input type="password" className="input" />
                        </div>
                        <div className="mt-3">
                            <label className="block">CONFIRM PASSWORD:</label>
                            <input type="password" className="input" />
                        </div>
                        <div className="mt-3">
                            <button className="btn">SIGN UP</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-span-1">

            </div>
        </div>
    )
}

export default Signup;

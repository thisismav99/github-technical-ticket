import useFetch from "../../hooks/useFetch";
import useHighlight from "../../hooks/useHighlight";
import useTitle from "../../hooks/useTitle";

const TicketList = () => {
    useTitle("TICKET APP - DASHBOARD");
    
    const { tickets } = useFetch("tickets");

    const { highlight } = useHighlight("ticketlist");

    if(highlight !== null && highlight === "ticketlist"){
        document.querySelector("#home-btn").classList.add("border-solid", "border-r-4", "border-green-500");
        document.querySelector("#create-ticket-btn").classList.remove("border-solid", "border-r-4", "border-green-500");
    }

    return (
        <div className="grid grid-cols-12 gap-2 text-center">
            { tickets && 
              tickets.map((ticket) => (
                <div className="col-span-12 mx-2" key={ticket.id}>
                    <div className="border-solid border-2 border-green-500 rounded text-green-500 p-5">
                        <p className="text-3xl">{ticket.title}</p>
                        <div className="text-left ml-10 mt-3">
                            <p className="text-xl">{ticket.description}</p>
                        </div>
                        <hr></hr>
                        <div className="flex flex-wrap justify-between mx-2 mt-2 text-sm">
                            <div className="text-left">
                                <p>{new Date(ticket.createdAt.toDate()).toString()}</p>
                                <p>{ticket.user}</p>
                            </div>
                            <button className="btn">
                                SOLVE
                            </button>
                        </div>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default TicketList;

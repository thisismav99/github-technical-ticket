
const Loading = () => {
    return (
        <div className="col-span-12 mx-2 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    )
}

export default Loading

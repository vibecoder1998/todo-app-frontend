export default function Priority_Status() {
    return (
        <div className="flex">
            <div className="flex">
                <h1>Priority:</h1>
                <p className="text-blue-700"> Moderate</p>
            </div>
            <div className="flex">
                <h1>Status:</h1>
                <p className=" text-red-500"> Not Started</p>
            </div>
            <div className="flex">
                <h1>
                    Created on:
                </h1>
                <p>20/06/2023</p>
            </div>
        </div>
    );
}
export default function Modal({
    show,
    onClose = () => { },
    title,
    content
}) {

    return (
        <>
            {show &&
                <div className="fixed top-0 left-0 w-full h-screen bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white p-5 rounded-md flex flex-col justify-center items-center relative">
                        <div className="text-black">
                            <h1>{title}</h1>
                            <div className="overflow-y-auto overflow-x-hidden min-h-[300px] max-h-[500px] sm:w-[600px]">
                                {content}
                            </div>
                        </div>
                        <button
                            type="button"
                            className="absolute top-2 right-2 text-red-500 px-2 hover:bg-[#86d1cb]"
                            onClick={onClose}>
                            X
                        </button>
                    </div>
                </div>
            }
        </>
    )
}
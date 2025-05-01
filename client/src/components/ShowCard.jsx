export default function ShowCard({ person }) {

    return (
        <div className='sm:w-[600px] border-2 border-gray-500 rounded-md flex'>
            <div className=''>
                <img
                    src={`/image-person/${person.image}`}
                    alt={`${person.name}-photo`}
                    className='w-full h-full' />
            </div>
            <div className='flex flex-col justify-center items-center gap-2 p-5'>
                <div className='text-4xl font-bold text-center'>
                    {person.name}
                </div>
                {person.quote !== null &&
                    <div className='text-yellow-500'>
                        {person.quote}
                        <span className='ml-2 text-gray-400'> cit.</span>
                    </div>}
                <div>
                    Mestiere:
                    {' ' + person.occupation}
                </div>
            </div>
        </div>
    )
}
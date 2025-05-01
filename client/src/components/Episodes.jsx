export default function Episodes({
    callbackSelect = () => { },
    presenceSeason = [],
    seasonSelected = '',
    sorted = [],
    seasonSelectedInfo = {}
}) {

    const { name, overview } = seasonSelectedInfo;

    return (
        <>
            <section className='transition duration-300 ease-in-out'>
                <label htmlFor="season">
                    Seleziona una stagione:
                    <br />
                    <select
                        name="season"
                        id="season"
                        onChange={callbackSelect}>
                        <option value="">Stagione</option>
                        {presenceSeason.map((p, i) => (
                            <option
                                key={i}
                                value={p.id}>{p.name}</option>
                        ))}
                    </select>
                </label>
            </section>

            {seasonSelected &&
                <div className='sm:w-[600px]'>

                    {/* SEASON NAME */}
                    <div className="my-10">
                        <h2>{name}</h2>
                        <p className='text-md italic'>{overview}</p>
                    </div>

                    {/* EPISODES */}
                    <h2 className='text-start'>Episodi:</h2>
                    {sorted.filter(p => p.season_id === Number(seasonSelected)).map((p, i) => (
                        <div key={i} className='mb-8 text-center'>
                            <div className='text-2xl text-[#028d81] font-semibold underline underline-offset-1'>
                                {p.episode_n}
                            </div>
                            <div className='text-xl font-normal'>
                                {p.name}
                            </div>
                        </div>
                    ))}
                </div>}

        </>
    )

}
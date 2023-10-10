export default function Project() {
    const projectList = [
        {
            id: 1,
            name: 'Cosmic Cocktail Creator',
            desc: 'A fun and creative way to add space themes to your cocktails.',
            img: 'src/assets/cosmic-cocktail.jpg',
            link: 'https://greycoded.github.io/cosmic-cocktail-creator-2.0/',
            repo: 'https://github.com/GrayCoded/cosmic-cocktail-2.0'
        },
        {
            id: 2,
            name: 'Schduler',
            desc: 'A great application for scheduling your day.',
            img: 'src/assets/scheduler.png',
            link: 'https://graycoded.github.io/scheduler/',
            repo: 'https://github.com/GrayCoded/scheduler'
        },
        {
            id: 3,
            name: 'weather-dashboard',
            desc: 'Great for planning a weekend',
            img: 'src/assets/weather-dashboard.png',
            link: 'https://graycoded.github.io/weather-dashboard/',
            repo: 'https://github.com/GrayCoded/weather-dashbord'
        },
        {
            id: 4,
            name: 'Mapbrew',
            desc: 'A creative way to create maps.',
            img: 'src/assets/mapbrew.png',
            link: 'https://mapbrew-websitee-20a575919a4b.herokuapp.com/login',
            repo: 'https://github.com/GrayCoded/mapbrew'
        },
    ];
  
    return (
        <div className="text-white">
            <div className="flex flex-col items-center gap-y-10 min-h-screen">
                <h1 className="text-4xl">Projects</h1>
                <div className="flex flex-col gap-5">
                    {projectList.map(({ id, name, desc, img, link, repo }) => (
                        <div key={id} className="mx-10 smw-auto flex p-4 rounded-lg border hover:scale-105 duration-225 hover:shadow-2xl hover:shadow-opacityBlue hover:bg-opacityBlue">
                            <a href={link} target="_blank">
                                <div className="flex flex-col sm:flex-row">
                                    <img src={img} width={250} alt={name} className="rounded-lg object-contain" />
                                </div>
                                <div>
                                    <h3>{name}</h3>
                                    <p>{desc}</p>
                                </div>
                            </a>
                            {repo ? (
                                <a href={repo} className="text-blue border border-yellow w-fit h-fit p-2 rounded-lg">
                                    <p>GitHub Repo</p>
                                </a>
                            ) : null}
  
                        </div>
                    ))}
                </div>
            </div>
        </div>
  
    );
  };
  
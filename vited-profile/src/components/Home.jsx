const Home = () => {
    return (
        <div className="flex flex-col ">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="src/assets/video/drone-video-edit.mp4" type="video/mp4" />

            </video>
            <div className="mt-[10vh] scale-85 md:scale-100 flex flex-col sm:flex-row md:justify-around md:flex-row intro-minh-screen">
                <div className="text-7xl -z-10">
                    <h1>Daniel Grayson</h1>
                </div>
                <p className="text-white text-2xl max-w-4xl text-center mt-16">
                    <span className="text-4xl text-lightGreen">Software Developer</span>{' '}
                    skilled in both front-end and back-end development. I am always looking for
                    new challenges and opportunities to learn and grow. I have learned to accomodate
                    with teams and work with others to achieve a common goal. I excell in leadership
                    and task management. I look forward to learning additional technologies and expanding
                    my skillset. Currently breaking into the industry as a software developer I enjoy working
                    with {' '}
                    <span classMate="text-3xl animate-pulse duration-500 text-yellow hover:animate-none">React</span>{' '}
                    ,
                    <span classMate="text-3xl animate-pulse duration-500 text-yellow hover:animate-none">JavaScript</span>{' '}
                    , and
                    <span classMate="text-3xl animate-pulse duration-500 text-yellow hover:animate-none">mongoDB</span>{' '}.
                    . Recently through talking to a friend I have started working with {' '}
                    <span classMate="text-3xl animate-pulse duration-500 text-yellow hover:animate-none">Tailwind</span>{' '}
                    which is yieling great results.
                </p>
            </div>
        </div>
    );
};

export default Home;
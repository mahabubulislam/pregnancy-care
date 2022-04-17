import React from 'react';

const Carousel = () => {
    return (
        <div
            id="carouselDarkVariant"
            className="carousel slide carousel-fade carousel-dark relative"
            data-bs-ride="carousel"
        >

            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="1"
                    aria-label="Slide 1"
                ></button>
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="2"
                    aria-label="Slide 1"
                ></button>
            </div>


            <div className="carousel-inner relative w-full overflow-hidden">

                <div className="carousel-item active relative float-left w-full">
                    <img
                        src="https://i.ibb.co/6P0Mz3T/banner.png"
                        className="block w-full lg:h-[100vh]"
                        alt="doctor and patient"
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-2xl">Routine Visits and Testing</h5>
                        <p>Every 4 weeks until the 28th week of pregnancy</p>
                        <p>Every 2 weeks until 36 weeks</p>
                    </div>
                </div>


                <div className="carousel-item relative float-left w-full">
                    <img
                        src="https://i.ibb.co/86nJ4wZ/banner-2.png"
                        className="block w-full lg:h-[100vh]"
                        alt="doctor and patient"
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-2xl">Feel Safe with Mom's care</h5>
                        <p>The best care in pregnancy</p>
                        <p>Fell free to contact</p>
                    </div>
                </div>


                <div className="carousel-item relative float-left w-full">
                    <img
                        src="https://i.ibb.co/Zg9Gv8H/banner-3.png"
                        className="block w-full lg:h-[100vh]"
                        alt="doctor and patient"
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Talking to Your Health Care Provider</h5>
                        <p>Folow up fee discount</p>
                    </div>
                </div>
            </div>

            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
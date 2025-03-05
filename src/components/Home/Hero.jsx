/* eslint-disable react/no-unescaped-entities */
import HeroImage from '../../assets/hero.png';
import Logo2 from '../../assets/logo2.svg';
import Shadow from '../../assets/shadow.png';
import ContentImage from '../../assets/ARTSlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import '../../styles/Hero.css';
// import { TypeAnimation } from 'react-type-animation';

function Hero() {

    return (
        <div className='relative'>

            {/*  due to more responsive i will design normal css .... */}
            <div className="flex items-center justify-center relative" id='hero'>
                <img src={HeroImage} className='object-cover w-full h-full relative z-10' alt="hero-bg" />

                <img src={Shadow} alt="shadow" className='absolute top-3 animate-pulse z-20' />

                <div className="absolute-container z-20">
                    <div className='child-1-parent'>
                        <h1 className="child-1">“Vision Unveils: </h1>
                        <h1 className="child-2">
                            The Artistry Within”
                            {/* <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'The Artistry Within”',
                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                    '',
                                    1500,

                                ]}
                                wrapper="span"
                                speed={10}
                                className='child-2'
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            /> */}
                        </h1>
                    </div>
                    <div>
                        <h4 className='child-3'>40th EMEA College Students Union</h4>
                        <h6 className='child-4'>presents</h6>
                    </div>
                    <div className='relative'>
                        <img src={Logo2} alt="logo2" className='child-logo   z-20' />
                        <p className='child-logo-p'>Fine Arts 23-24</p>
                    </div>
                    <div>
                        <h5 className='child-date'>
                            <FontAwesomeIcon icon={faCalendar} />&nbsp;08 FEB - 09 FEB 2024</h5>
                    </div>
                </div>

            </div>
            <div className='-mt-16  h-fit w-full z-50 mx-auto md:px-14 px-10'>
                <div className='bg-white h-full w-full pt-10 text-center relative flex  overflow-hidden rounded-b-lg  responsive-custom-content p-2'>
                    <div className='mx-auto responsive-content-img-card '>

                        <img src={ContentImage} alt="content" className=' responsive-content-img' />
                    </div>

                    <div className='mt-10 p-4  text-center md:text-left flex flex-col gap-4 max-w-[600px] mx-auto responsive-content-text basis-9/12 justify-center items-center'>
                        <p className=''>
                            Welcome to EMEA College of Arts & Science's vibrant world of creativity! Immerse yourself in the magic of
                            {/* <strong className='font-black text-lg'>
                                कലാർട്ട്,
                            </strong> */}
                            <strong>&nbsp;
                                kALART
                            </strong>,&nbsp;
                            our two-day art festival celebrating diverse artistic expressions.
                        </p>
                        <p className=''>
                            Explore a spectrum of events, from mesmerizing performances to breathtaking exhibitions. Stay tuned for the unveiling of results, showcasing the extraordinary accomplishments of our talented participants.
                        </p>

                        <p className=''>
                            Meet the dedicated coordinators and convenors behind <strong>
                                kALART</strong>, the driving forces ensuring a seamless and memorable experience. They embody the festival's spirit of collaboration and creativity.
                        </p>
                        {/* <p className=''>
                            Join us in celebrating the power of art to inspire, provoke, and unite.
                            <strong>kALART
                            </strong> is more than an event; it's a testament to the boundless potential within each of us. Be part of this artistic extravaganza, where every moment is a masterpiece waiting to be unveiled. Let the colors of <strong>
                                kALART </strong> paint the canvas of your imagination!
                        </p> */}
                    </div>
                </div>
                {/* Your card content here */}
            </div>
        </div>
    )
}

export default Hero;

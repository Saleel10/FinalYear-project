
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import offStagePoster from '../../assets/Poster/offStage.jpg';
import onStagePoster from '../../assets/Poster/onstage.jpg';
import Firstbadge from '../../assets/Poster/1st.png';
import Secondbadge from '../../assets/Poster/2nd.png';
import Thirdbadge from '../../assets/Poster/3rd.png';
import Union from '../../assets/Poster/40thUnion.png';
import Logo from '../../assets/Poster/logo.png';
import '../../styles/Carousal.css';
import Congrats from '../../assets/Poster/cngrts.png';

const Carousal = () => {
  const [resultList, setResultList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/results", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const results = await response.json();
        
        // Transform the data to ensure it has all needed properties
        const transformedResults = results.map(item => {
          // Make sure we have both structures available
          const transformedItem = { ...item };
          
          // Ensure stage is properly formatted (convert to uppercase if needed)
          transformedItem.stage = (item.stage || "").toUpperCase();
          
          // Handle records format (for Carousal component)
          if (!transformedItem.records) {
            transformedItem.records = (item.winners || []).map(winner => ({
              fields: {
                Name: winner.name,
                Department: winner.department || "",
                Year: winner.year || "",
                Team: winner.team || "",
                Place: winner.position === "1st" ? "FIRST" : 
                      winner.position === "2nd" ? "SECOND" : 
                      winner.position === "3rd" ? "THIRD" : ""
              }
            }));
          }
          
          return transformedItem;
        });

        console.log(transformedResults);
        setResultList(transformedResults);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const groupWinnersByPosition = (winners) => {
    const groupedWinners = {};
    winners.forEach((winner) => {
      const position = winner.position;
      if (!groupedWinners[position]) {
        groupedWinners[position] = [];
      }
      groupedWinners[position].push(winner);
    });
    return groupedWinners;
  };
 const getBadgeImage = (position) => {
     switch (position) {
       case "1st":
         return Firstbadge;
       case "2nd":
         return Secondbadge;
       case "3rd":
         return Thirdbadge;
       default:
         return '';
     }
   };

  return (
    <>
      {loading ? (
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          className="mySwiper rounded-md skeleton-loading flex gap-10 mx-auto"
        >
          <SwiperSlide>
            <div className="skeleton-item "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skeleton-item "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skeleton-item "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skeleton-item "></div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          className="mySwiper2"
        >
          {resultList.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: .5 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: .5, delay: 0.1 } }}
                viewport={{ once: true }}
              >
                <div className='rounded-xl result-card-respo overflow-hidden'>
                  <div className="mx-auto shadow-xl relative">
                    <img src={item.stage === "OFF STAGE" ? offStagePoster : onStagePoster} alt="offStagePoster" className="w-full object-cover responsive-poster-img" />

                    
                    <div className="flex flex-col items-start justify-start absolute left-16 top-52 gap-1 h-fit">
                        {/* <p className="w-full bg-blue-800 md:text-[14px] text-[10px] flex items-center justify-center py-1 px-4 rounded-full text-white font-semibold">
                          Fine Arts {result.stage.toUpperCase()} Result
                        </p> */}

                        <div>
                          <p className="font-bold uppercase respo-program">
                            {item.programName}
                          </p>
                        </div>
                        
                        <div className="flex flex-col  rounded-xl py-3  gap-4 respo-result-card">
                          {/* Group winners by position and display badge once for each group */}
                          {Object.entries(groupWinnersByPosition(item.winners)).map(([position, winners]) => (
                            <div key={position} className="flex gap-4 items-start">
                              <div>
                                <img src={getBadgeImage(position)} alt={`Badge ${position}`} className="top-0 respo-badge max-w-3 md:max-w-5" />
                              </div>
                              <div className={`${winners.length > 1 ? '-mt-1' : '-mt-1'}`}>
                                {/* Display winner(s) and department(s) for each position */}
                                {winners.map((winner, index) => (
                                  <div key={index}>
                                    <p className={`font-semibold respo-winner ${winners.length > 1 ? 'more-winners' : ''}`}>
                                      {winner.name}
                                    </p>
                                    <p className={`ml-2 respo-winner-year ${winners.length > 1 ? 'more-winners-year' : ''}`}>
                                      {winner.team && <span> {winner.team} </span>}
                                      
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* <img src={Congrats} alt="Congrats" className="w-44 h-auto mx-auto respo-congrats" /> */}
                      </div>
                    </div>
                  </div>
                
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Carousal;
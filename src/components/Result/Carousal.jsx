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
import { fetchRecords } from "../../utils/airtableService";
import '../../styles/Carousal.css';
import Congrats from '../../assets/Poster/cngrts.png';
const Carousal = () => {
  const [resultList, setResultList] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const tableName = "Published Programs";
      const filterBy = "";
      const sortField = "auto";
      const sortDirection = "desc";
      const maxRecords = 4;
      const Records = await fetchRecords(
        tableName,
        filterBy,
        sortField,
        sortDirection,
        maxRecords
      );
      setResultList(Records);
      // console.log(Records);
    } catch (error) {
      console.error(error);
    }
  };

  const allRecords = [];
  const fetchProgramsData = async () => {
    try {
      const programs = resultList.map((result) => result.fields.Name);

      for (const program of programs) {
        const tableName = "Result";
        const filterBy = `{Program} = '${program}'`;
        const sortField = "Point";
        const sortDirection = "asc";
        const Records = await fetchRecords(
          tableName,
          filterBy,
          sortField,
          sortDirection
        );

        // Combine all records for the same program
        allRecords.push({
          programName: program,
          records: Records,
          stage: Records[0].fields.Stage,
        });
      }
      setLoading(false);
      setResult(allRecords);
      // console.log(allRecords);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch initial data
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch program data when resultList changes
  useEffect(() => {
    if (resultList.length > 0) {
      fetchProgramsData();
    }
  }, [resultList]);

  const getBadgeImage = (place) => {
    switch (place) {
      case "FIRST":
        return Firstbadge;
      case "SECOND":
        return Secondbadge;
      case "THIRD":
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
          // navigation={true}
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
          {result.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: .5 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: .5, delay: 0.1 } }}
                viewport={{ once: true }}
              >
                <div className='rounded-xl result-card-respo overflow-hidden'>
                  <div className="max-w-[400px]  mx-auto shadow-xl relative ">
                    <img src={item.stage === "OFF STAGE" ? offStagePoster : onStagePoster} alt="offStagePoster" className="w-full h-auto object-cover responsive-poster-img" />

                    <div className=" top-0 left-0 right-0 bottom-0 absolute ">
                      <div className="flex flex-col justify-between items-center h-full w-full p-4 pt-8 gap-3 responsive-poster-card">
                        <div>
                          <img src={Union} alt="Union" className="w-40 h-auto  mx-auto" />
                        </div>
                        <div className='relative'>
                          <img src={Logo} alt="Logo" className="w-48 h-auto mx-auto" />
                          {/* <p className="uppercase absolute text-[10px] -bottom-1 right-10">Fine Arts 23-24</p> */}
                        </div>
                        <div>
                          <p className="bg-blue-900 text-white font-bold py-1 px-6 rounded-full uppercase text-[10px] md:text-[10px]">
                            Fine Arts {item.stage} Result
                          </p>
                        </div>
                        <div>
                          <p className="font-bold uppercase">
                            {item.programName}
                          </p>
                        </div>
                        <div className="flex flex-col bg-white/70 rounded-2xl  p-6 gap-2">
                          {item.records.map((record, index) => (
                            <div key={index} className="flex gap-8 items-center">
                              <div>
                                <img src={getBadgeImage(record.fields.Place)} alt={`Badge ${record.fields.Place}`} className="w-10 top-0" />
                              </div>
                              <div>
                                <p className="font-semibold max-text-[16px]">{record.fields.Name}</p>
                                <p className="text-[13px] ml-2">{record.fields.Department} {record.fields.Year && <span> ({record.fields.Year} year) </span> }</p>
                              </div>
                              <div>
                                {/* white space */}
                              </div>
                            </div>
                          ))}
                          <div></div>
                        </div>
                        <div>
                          <img src={Congrats} alt='Congratulations' className='w-40 ' />
                        </div>
                      </div>
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

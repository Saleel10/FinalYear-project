
import main1 from '../../assets/Avatars/Committe/Main/img1.png'
import main2 from '../../assets/Avatars/Committe/Main/img2.png'
import main3 from '../../assets/Avatars/Committe/Main/img3.png'
import onstage1 from '../../assets/Avatars/Committe/OnStage/img1.png'
import onstage2 from '../../assets/Avatars/Committe/OnStage/img2.png'
import onstage3 from '../../assets/Avatars/Committe/OnStage/img3.png'
import onstage4 from '../../assets/Avatars/Committe/OnStage/img4.png'
import offStage1 from '../../assets/Avatars/Committe/OffStage/img1.png'
import offStage2 from '../../assets/Avatars/Committe/OffStage/img2.png'
import offStage3 from '../../assets/Avatars/Committe/OffStage/img3.png'
import offStage4 from '../../assets/Avatars/Committe/OffStage/img4.png'
import { motion } from "framer-motion"

function Committe() {
  return (
    <div className='w-full mx-auto ' id='committee' >
      <h1 className='font-bold text-3xl text-center mb-10 text-black'>Committee</h1>
      <main className='flex flex-col gap-16 p-4 mx-auto items-center '>
        {/* Main Committe */}
        <section className='flex gap-10  mx-auto items-center justify-center  max-w-full main-committe-parent'>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center justify-end  w-full'>
                <h1 className='font-bold text-red-700 text-2xl  uppercase leading-6 text-right main-committee-heading'>FINEARTS
                  <br /> DIRECTOR</h1>
              </div>
              <div className='relative main-committee overflow-hidden'>
                <img src={main1} alt='main1' className='w-full h-full object-cover' />
                <div className='absolute  h-20 w-10 -top-8 -left-5 rotate-45 background-custom-color' ></div>
                <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5 rotate-45'></div>
              </div>
              <div className='flex items-center justify-start  w-full'>
                <h3 className='font-semibold text-2xl leading-6 text-gray-900 mt-2 main-committee-name'>Sibi Nijas</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center justify-end  w-full'>
                <h1 className='font-bold text-red-700 text-2xl  uppercase leading-6 text-right main-committee-heading'>FINEARTS
                  <br /> SECRETORY</h1>
              </div>
              <div className='relative main-committee overflow-hidden'>
                <img src={main2} alt='main1' className='w-full h-full object-cover' />
                <div className='absolute background-custom-color h-20 w-10 -top-8 -left-5 rotate-45'></div>
                <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5 rotate-45'></div>
              </div>
              <div className='flex items-center justify-start  w-full'>
                <h3 className='font-semibold text-2xl leading-6 text-gray-900 mt-2 main-committee-name'>Shalu Fazil</h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className='flex flex-col items-center justify-center mt-6'>
              <div className='flex items-center justify-end  w-full'>
                <h1 className='font-bold text-red-700 text-2xl  uppercase leading-6 text-right main-committee-heading'>FINEARTS
                  <br /> CONVENER</h1>
              </div>
              <div className='relative main-committee overflow-hidden'>
                <img src={main3} alt='main1' className='w-full h-full object-cover' />
                <div className='absolute background-custom-color h-20 w-10 -top-8 -left-5 rotate-45'></div>
                <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5 rotate-45'></div>
              </div>
              <div className='flex items-center justify-start  w-full'>
                <h3 className='font-semibold text-2xl leading-6 text-gray-900 mt-2 main-committee-name'>Nihal <br/>Kuruniyan</h3>
              </div>
            </div>
          </motion.div>
        </section>
        <section className='flex flex-col gap-2 items-center '>

          <div className='text-center flex items-center gap-6  relative  mb-3 overflow-hidden w-full'>
            <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-l-[30px] border-l-red-900 border-transparent absolute -left-4'></span>
            <hr className='border-[2px] border-red-900 w-1/2 mx-auto' />
            <span className='text-3xl font-bold  uppercase text-red-900 text-nowrap onstage-committee-heading'>OnStage Conveners</span>
            <hr className='border-[2px] border-red-900 w-1/2 mx-auto' />
            <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-r-[30px] border-r-red-900 border-transparent absolute -right-4'></span>
          </div>
        
            {/* OnStage Commiite */}

            <div className='flex gap-4 w-full mx-auto onstage-committee-parent'>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } }}
            viewport={{ once: true }}
          >
              <div className='flex flex-col items-center justify-center '>
                <div className='relative onstage-committee overflow-hidden'>
                  <img src={onstage1} alt='main1' className='w-full h-full object-cover' />
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg]  background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-semibold text-gray-800 text-xl mt-2 capitalize text-wrap onstage-committee-name'>Safwan TK</h3>
                </div>
              </div>
              </motion.div>
              <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.4 } }}
            viewport={{ once: true }}
          >
              <div className='flex flex-col items-center justify-center'>
                <div className='relative onstage-committee overflow-hidden'>
                  <img src={onstage2} alt='main1' className='w-full h-full object-cover' />
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg] background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-semibold text-gray-800 text-xl mt-2 capitalize text-wrap onstage-committee-name'>Vaseem Afreen</h3>
                </div>
              </div>
              </motion.div>
              <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.6 } }}
            viewport={{ once: true }}
          >
              <div className='flex flex-col items-center justify-center mt-5'>
                <div className='relative onstage-committee  overflow-hidden -mt-5'>
                  <img src={onstage3} alt='main1' className='w-full h-full object-cover' />
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg]  background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-semibold text-gray-800 text-xl mt-2 capitalize text-wrap onstage-committee-name'>Shafi<br />
                    Kunnummal</h3>
                </div>
              </div>
              </motion.div>
              <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.8 } }}
            viewport={{ once: true }}
          >
              <div className='flex flex-col items-center justify-center'>
                <div className='relative onstage-committee overflow-hidden'>
                  <img src={onstage4} alt='main1' className='w-full h-full object-cover ' />
                  <div className='absolute h-full w-2 top-0 bottom-0 left-0  background-custom-color '></div>
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg] background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-semibold text-gray-800 text-xl mt-2 capitalize text-wrap onstage-committee-name'>Shabeer</h3>
                </div>
              </div>
              </motion.div>
            </div>
        </section>

        <section className='flex flex-col gap-2 items-center'>
          <div className='text-center flex items-center gap-6  relative   mb-6 overflow-hidden w-[95%]'>
            <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-l-[30px] border-l-red-900 border-transparent absolute -left-4'></span>
            <hr className='border-[2px] border-red-900 w-1/2 mx-auto' />
            <span className='text-3xl font-bold  uppercase text-red-900 text-nowrap offstage-committee-heading'>OffStage Conveners</span>
            <hr className='border-[2px] border-red-900 w-1/2 mx-auto' />
            <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-r-[30px] border-r-red-900 border-transparent absolute -right-4'></span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } }}
            viewport={{ once: true }}
          >
            {/* OffStage Commiite */}

            <div className='flex gap-4  mx-auto max-w-full'>
              <div className='flex flex-col items-center justify-center flex-wrap offstage-committee-parent'>
                <div className='relative offstage-committee overflow-hidden'>
                  <img src={offStage1} alt='main1' className='w-full h-full object-cover' />
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg]  background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-semibold text-gray-800 text-xl mt-2 capitalize text-wrap offstage-committee-name'>Aysha Hasna</h3>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='relative offstage-committee overflow-hidden'>
                  <img src={offStage2} alt='main1' className='w-full h-full object-cover' />
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg] background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-semibold text-gray-800 text-xl mt-2 capitalize text-wrap offstage-committee-name'>Navithra</h3>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='relative offstage-committee overflow-hidden'>
                  <img src={offStage3} alt='main1' className='w-full h-full object-cover' />
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg]  background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-semibold text-gray-800 text-xl mt-2 capitalize text-wrap offstage-committee-name'>Ramees</h3>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='relative offstage-committee overflow-hidden'>
                  <img src={offStage4} alt='main1' className='w-full h-full object-cover ' />
                  <div className='absolute h-full w-2 top-0 bottom-0 left-0  background-custom-color '></div>
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg] background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-semibold text-gray-800 text-xl mt-2 capitalize text-wrap offstage-committee-name'>Jaseel</h3>
                </div>
              </div>

            </div>
          </motion.div>
        </section>

      </main>
    </div>

  )
}

export default Committe
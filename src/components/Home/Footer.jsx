import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import EmeaLogo from '../../assets/EMEAlogo.png';
import Union40 from '../../assets/unionlogo.png';
import Logo from '../../assets/logo.png';
import { NavLink  } from 'react-router-dom';

function Footer() {
  const navigate = (url) => () => {
    window.open(url, '_blank');
  };
    return (
    <div >
      <footer className='h-fit w-full  text-2xl text-center bg-red-950 text-white p-8 rounded-t-2xl flex flex-col justify-between pb-3 ' >
        <div className='flex justify-between flex-1 flex-row  gap-10 items-center responsive-footer'>

          {/* left section */}
          <div className=' flex flex-col justify-start gap-4 responsive-footer-child-1'>
            <div>
              <img src={Logo} alt='Union40 Logo' />
            </div>
            <div className='flex flex-col leading-5 responsive-footer-child'>
              <div>
                <p className='uppercase text-[18px] font-bold'>
                  40th Emea college students union
                </p>
              </div>
              <div className='flex gap-1 items-center cursor-pointer mt-2' onClick={navigate('https://www.instagram.com/40th_studentsunion_emea/')} target='_black'>

                <FontAwesomeIcon icon={faInstagram} className='text-[16px]' />

                <p className='text-[16px]'>40th_studentsunion_emea</p>
              </div>

            </div>
            {/* <div className='bg-stone-300 p-2 rounded-lg pb-2 flex flex-col gap-1'>

              <textarea name="" id="" cols="30" rows="2" placeholder='Type Here' className='text-sm p-3 rounded-lg bg-white  outline-red-950 text-blue-950' />

              <div className='flex justify-end '>
                <button className='bg-red-950 py-1 px-4 rounded-lg text-sm'>
                  Submit
                </button>
              </div>

            </div> */}

          </div>
          {/* right section */}
          <div className=' flex flex-col justify-end gap-2 responsive-footer-child-2'>
            <div className='flex gap-4 justify-end'>
              <img src={Union40} alt='Union40 Logo' className='h-20' />
              <img src={EmeaLogo} alt='EMEA Logo' />

            </div>
            <div className='flex flex-col  items-end text-[18px] font-bold responsive-footer-child opacity-70'>
              <p>EMEA College of Arts and Science-Kondotty</p>
              {/* <p>Re-accredited with’A’ Grade by NAAC</p> */}
            </div>
            {/* <div className='flex flex-col items-end text-stone-400 text-[15px] leading-5  responsive-footer-child'>
              <p>Kumminiparamaba PO, Kondotty, Malappuram Dt.</p>
              <p>Kerala - India   PIN :673638</p>
            </div>
            <div className='flex flex-col items-end text-stone-400 text-[16px] leading-5 responsive-footer-child'>
              <p>0483 271 2030 <FontAwesomeIcon icon={faPhone} /></p>
              <p>mail@emeacollege.ac.in<FontAwesomeIcon icon={faEnvelope} /></p>
            </div> */}



          </div>
        </div>

        <div className='text-stone-400 text-[16px] mt-4 pt-2 border-t border-t-stone-500 flex items-center justify-center gap-1'>
          Designed by
          <NavLink to='https://www.linkedin.com/in/dilshad360/' target="_blank" className='navlink-designer'>
            <p className='designer-1 text-stone-400'>
              Dilshad,

            </p>
          </NavLink>
          <NavLink to='https://www.linkedin.com/in/muhammed-saleel-cp-84064524b' target="_blank" className='navlink-designer'>
            <p className="designer-2 text-stone-400">

              Saleel,
            </p>
          </NavLink>
          <NavLink to='https://www.linkedin.com/in/muhammed-shamil-65878227a/' target="_blank" className='navlink-designer'>
            <p className="designer-3 text-stone-400">
              Shamil
            </p>
          </NavLink>
          {/* &nbsp;Buy us a <FontAwesomeIcon icon={faCoffee} /> */}
        </div>
        <div>
          <p className='text-stone-400 text-[12px] text-opacity-50'>© 2024 EMEA College of Arts and Science-Kondotty Union. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

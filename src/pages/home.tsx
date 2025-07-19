import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import LogoWeb from '../assets/logo/logo-web.webp'
import LogoDeal from '../assets/logo/logo-Deal.webp'
import LogoTopPicks from '../assets/logo/logo-topPicks.webp'
import Anh1 from '../assets/img/img-home-1.webp'
import AnhMayTinh from '../assets/img/anh-may-tin.webp'
import AnhDienThoai from '../assets/img/anh-dien-thoai.webp'
import AnhDienThoai1 from '../assets/img/anh-dien-thoai-1.webp'
import AnhMangHinh from '../assets/img/anh-mang-hinh.webp'
import AnhMayAnh from '../assets/img/anh-may-anh.webp'
import Header from '../components/header'
import Footer from '../components/footer'
import SanPhamCongNghe from '../components/Product-CongNghe'
import LogoSanPham from '../components/logo'
import Bt from '../components/nut'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header logo={LogoWeb} targetHome={"text-blue-500"} />

    {/* content 1 */}
    <div className='mt-10 bg-img h-200'>
      <div>
        <div>
          <span className='text-3xl font-medium'>
            <center>
              Enhance Your Lifestyle With 500+ Powerful Smart Devices
            </center>
          </span>
        </div>
        <div>
          <span className='text-xl'>
            <center>
              Don't miss out on incredible savings and the chance to embrace the latest in technology
            </center>

          </span>
        </div>
      </div>

      <div className='pl-20 flex justify-between pr-20 pt-30'>
        <div className='w-3/12 mt-10'>
          <span className='text-xl text-gray-400 font-medium'>
            TRENDING
          </span>

          <a href="">
            <div className='border-1 pt-1 pb-1 text-center mt-2 rounded-full text-xl'>
              <span>Apple iPhone 15 Pro Max</span>
            </div>
          </a>
          <a href="">
            <div className='border-1 pt-1 pb-1 text-center mt-2 rounded-full text-xl'>
              <span>Acer Chromebook Spin 514</span>
            </div>
          </a>
          <a href="">
            <div className='border-1 pt-1 pb-1 text-center mt-2 rounded-full text-xl'>
              <span>Samsung Galaxy Watch 6</span>
            </div>
          </a>
          <a href="">
            <div className='border-1 pt-1 pb-1 text-center mt-2 rounded-full text-xl'>
              <span>
                Sony BRAVIA X80K / X81K</span>
            </div>
          </a>

          <Bt style="bg-black text-white text-center font-medium text-xl pt-2 pb-2 rounded-full mt-10" text="Shop Now" />
        </div>


        <div className='w-6/12'>
          <img src={Anh1} alt="" />
        </div>


      </div>
    </div>
    {/* end content 1 */}

    {/* content 2 */}
    <div className='mt-20'>
      <div className='text-center text-2xl font-bold'>
        <span>
          Shop by category
        </span>
      </div>

      <div className='pl-30 pr-30 flex justify-center mt-20'>
        <SanPhamCongNghe AnhSanPham={AnhMayTinh} TenSanPham="Computers" />
        <SanPhamCongNghe AnhSanPham={AnhDienThoai} TenSanPham="Mobile" />
        <SanPhamCongNghe AnhSanPham={AnhMangHinh} TenSanPham="TVs & home theater" />
        <SanPhamCongNghe AnhSanPham={AnhMayAnh} TenSanPham="Camera & drones" />
      </div>
    </div>
    {/* end content 2 */}


    {/* content 3 */}
    <div className='flex justify-between pl-125 pr-125 mt-20'>
      <LogoSanPham logo={LogoDeal} Text="Deals" />
      <LogoSanPham logo={LogoTopPicks} Text="Top Picks" />
    </div>
    {/* end content 3 */}

    {/* content 4 */}
    <div className='mt-20 pb-50'>
      <div className='pl-30 pr-30 flex justify-center mt-20'>
        <SanPhamCongNghe AnhSanPham={AnhMayTinh} TenSanPham="Computers" />
        <SanPhamCongNghe AnhSanPham={AnhDienThoai} TenSanPham="Mobile" />
        <SanPhamCongNghe AnhSanPham={AnhMangHinh} TenSanPham="TVs & home theater" />
        <SanPhamCongNghe AnhSanPham={AnhMayAnh} TenSanPham="Camera & drones" />
      </div>
    </div>
    {/* end content 4 */}

    {/* content 5 */}
    <div className='bg-gray-100 flex pl-50 pr-50 justify-between h-100'>
      <div className='w-2/12 mt-20'>
        <div className='text-2xl font-medium text-gray-400'>
          <span>|| HOLIDAY DEALS</span>
        </div>
        <div className='text-2xl font-medium'>
          <span>||Up To </span>
          <span className='text-blue-500'>30% </span>
          <span>OFF</span>
        </div>
        <div className='text-2xl font-medium'>
          <span>Smartphone Brand </span>
        </div>
        <div className='text-2xl font-medium'>
          <span>
            Name Magic Pro 4
          </span>
        </div>

        <Bt style="bg-black text-white text-center font-medium text-xl pt-2 pb-2 rounded-full w-9/12 mt-10" text="Shop Now" />
      </div>

      <div className='h-full w-9/12 pt-3 pb-3 flex'>
        <div className='h-full'>
          <div className='h-1/2'>
            <img className='h-full pb-2' src= {AnhDienThoai1} alt="" />
          </div>

          <div className='h-1/2'>
            <img className='h-full pt-2' src= {AnhDienThoai1} alt="" />
          </div>
        </div>

        <div className='h-full'>
          <img className='h-full pl-5' src= {AnhDienThoai1} alt="" />  
        </div>  
      </div>


    </div>
    {/* end content 5 */}
    <Footer />
  </StrictMode>,
)

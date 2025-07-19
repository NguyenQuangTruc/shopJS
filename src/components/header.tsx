import './component.css'


export default function (props: any) {
    return (
        <div className="w-full h-25 pl-45 pr-45 pt-10 flex justify-between">
            <div className="header-logo h-full w-25">
                <a href="../../home.html">
                    <img src={props.logo} alt="" />
                </a>
            </div>

            <div className="menu flex">
                <div className={`text-gray-500 font-medium ml-3 mr-3 `}>
                    <a className={`${props.targetHome}`} href="../../home.html">
                        Home.
                    </a>
                </div>
                <div className='text-gray-500 font-medium ml-3 mr-3'>
                    <a className={`${props.targetShop}`} href='../../Shop.html'>
                        Shop Now
                    </a>
                </div>
                <div className='text-gray-500 font-medium ml-3 mr-3'>
                    <a className={`${props.targetAbout}`} href="">
                        About Us
                    </a>
                </div>
                <div className='text-gray-500 font-medium ml-3 mr-3'>
                    <a className={`${props.targetContactAndSuppot}`} href="">
                        Contact & Support
                    </a>
                </div>
            </div>
        </div>
    )
}


export default function (props: any) {
    return (
        <div className="w-80 border-1 border-gray-100">
            <div>
                <img src={props.imgSP} alt="" />
            </div>

            <div className="w-full mt-1 text-center">
                <div className="font-medium text-xl">
                    <span>{props.tenSP}</span>
                </div>

                <div className="mt-10 text-blue-500">
                    <span>{props.gia}</span>
                </div>

                <div className="flex mt-3 pl-2 pr-2 mb-4">
                    <a href="">
                        <div className="bg-gray-300 p-2 rounded-xl">
                            <span>GH</span>
                        </div>
                    </a>

                    <a className="w-full" href="">
                        <div className="bg-black p-2 text-white rounded-xl">
                            <span>Mua Ngay</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
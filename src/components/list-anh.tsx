import { useState } from 'react'
import AnhHuawei from '../assets/img/dien-loai-huawei.webp'
import AnhPrime from '../assets/img/prime.webp'
import AnhSim from '../assets/img/sim.webp'



export default function () {
    let listAnh: string[] = [AnhHuawei, AnhPrime, AnhSim]
    const [index, setIndex] = useState(0)
    const [linkAnh, setLinkAnh] = useState<string>(listAnh[index])
    return (
        <div className='flex justify-center mt-10'>
            <button
                className='translate-x-10 bg-gray-400 rounded-full opacity-30 h-10 w-10 mt-40 cursor-pointer'
                onClick={() => {
                    if (index > 0) {
                        setLinkAnh(listAnh[index - 1])
                        setIndex(index - 1)
                    }
                }}
            >
                <span className='text-3xl'>
                    &lt;
                </span>
            </button>
            <img src={linkAnh} alt="" />
            <button
                className='-translate-x-10 bg-gray-400 rounded-full opacity-30 h-10 w-10 mt-40 cursor-pointer'
                onClick={() => {

                    if (index < listAnh.length - 1) {
                        setLinkAnh(listAnh[index + 1])
                        setIndex(index + 1)
                    }
                }}
            >
                <span className='text-3xl'>
                    &gt;
                </span>
            </button>


        </div>
    )
}
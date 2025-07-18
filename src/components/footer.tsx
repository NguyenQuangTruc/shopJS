

export default function () {
    return (
        <footer className="bg-black-121212 text-white pl-45 pr-45 pt-45 pb-45">
            <div>
                <span className="text-4xl font-bold">
                    ABC JOINT STOCK <br /> COMPANY
                </span>
            </div>

            <div className="pt-10 flex w-full justify-between">
                <div className="flex w-6/12 justify-between">
                    <div>
                        <ul className="font-medium text-xl">
                            <li className="mt-1">
                                ĐC: HK Mall, 61 Hendford Hill, Mountblairy, UK
                            </li>
                            <li className="mt-1">
                                Email: abc@example.com
                            </li>
                            <li className="mt-1">
                                SĐT: 124834820396
                            </li>
                            <li className="mt-1">
                                SĐT: 93450296792
                            </li>
                        </ul>
                    </div>
                    <div className="mt-1">
                        <span className="text-xl">HELP</span>
                        <div className="text-xl ml-5">
                            <ul>
                                <li>
                                    <span>
                                        Terms & Conditions
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Payment Methods
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Shipping & Returns
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Privacy Policy
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-4/13">
                    <span className="font-medium text-xl">
                        SIGN UP FOR NEWSLETTER
                    </span>

                    <input className="h-9 w-full bg-white rounded-xl text-black font-medium text-xl pl-3 pr-3" type="text" />

                    <button className="bg-blue-500 h-13 w-25 font-medium text-xl rounded-full mt-1 cursor-pointer">
                        Send
                    </button>
                </div>
            </div>

            <div>
                <div className="w-3/12 font-medium text-gray-400">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

            </div>
        </footer>
    )
}
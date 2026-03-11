import React from 'react'
import loyqol from './assets/loy-qol.png'
import gullar from './assets/gullar.png'
import tonqayagan from './assets/tonqaygan.png'

const QualityStandard = () => {
    return (
        <div>
            <div className=" mx-auto max-w-[85%]  p-1">
                <img
                    src={tonqayagan}
                    alt="top-image"
                    className="w-[1400px] h-[742px] object-cover bg-gray-200"
                />
            </div>
            <section className="max-w-[50%] mx-auto px-6 py-16 flex flex-col gap-10">

                <div className="flex flex-col gap-4 max-w-2xl">
                    <h2 className="text-[50px] font-bold text-[#274C5B]">
                        Organic Store Services
                    </h2>

                    <div className='flex justify-start items-start flex-col gap-6'>
                        <p className="text-gray-500 text-sm">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking a layout. The point of using
                            Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English.
                        </p>

                        <p className="text-gray-400 text-sm">
                            Many desktop publishing packages and web page editors now use Lorem
                            Ipsum as their default model text, and uncover many web sites still
                            in their infancy. Various versions have evolved over the years.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col gap-6">

                    <div className="flex items-center gap-6">
                        <img
                            src={loyqol}
                            alt="service1"
                            className="w-[300px] h-[200px] object-cover rounded-xl"
                        />

                        <div className="bg-gray-100 p-5 py-6 rounded-xl flex flex-col gap-2 flex-1 w-[537px]">
                            <h3 className="font-bold text-[#274C5B] text-[25px]">
                                Why Organic
                            </h3>

                            <p className="text-[18px] text-gray-500">
                                Sed ut perspiciatis unde omnis iste natus error sit  voluptatem.
                                page editors now use Lorem Ipsum as their  default model text,
                                and uncover.
                            </p>
                        </div>
                    </div>


                    <div className="flex items-center gap-6">
                        <div className="bg-gray-100 p-5 py-6 rounded-xl flex flex-col gap-2 flex-1 w-[537px]">
                            <h3 className="font-bold text-[#274C5B] text-[25px]">
                                Speciality Produce
                            </h3>

                            <p className="text-[18px] text-gray-500">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.
                            </p>
                        </div>
                        <img
                            src={gullar}
                            alt="service1"
                            className="w-[300px] h-[200px] object-cover rounded-xl"
                        />

                    </div>

                </div>


                <div className="flex flex-col gap-3 max-w-xl">
                    <h3 className="text-[35px] font-bold text-[#274C5B]">
                        We farm your land
                    </h3>

                    <p className="text-gray-500 text-sm">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking a layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of
                        letters.
                    </p>
                </div>


                <div className="flex gap-6">

                    <div className="flex items-center gap-3 bg-gray-100 pl-2 pr-13 py-2 rounded-full">
                        <span className="bg-[#7EB693] text-white text-[25px] w-[50px] h-[50px] flex items-center justify-center rounded-full">
                            01
                        </span>
                        <p className="text-[15px]  text-[#274C5B] font-medium">
                            Best quality support
                        </p>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-100 pl-2 pr-13 py-2 rounded-full">
                        <span className="bg-[#7EB693] text-white text-[25px] w-[50px] h-[50px] flex items-center justify-center rounded-full">
                            02
                        </span>
                        <p className="text-[15px]  text-[#274C5B] font-medium">
                            Money back guarantee
                        </p>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default QualityStandard

import React from 'react'


const BlogSingle = () => {
    return (
        <div>
            <div className="w-full  bg-gray100 ">

                <div className="max-w-full mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                        alt="header"
                        className="w-full h-[600px] object-cover "
                    />
                </div>

                <div className="max-w-[1200px] h-[250px] mx-auto  bg-white  rounded-2xl shadow-lg p-8 relative -mt-20">
                    <p className="text-sm text-gray-400 mb-2">
                        Posted by Admin • 12 July
                    </p>


                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Research More Organic Food
                    </h1>

                    <p className="text-gray-600 leading-relaxed">
                        A blog dedicated to organic food and natural lifestyle. Here you can
                        learn more about healthy nutrition, vegetables, and sustainable food
                        production.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-10 space-y-10">

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                            Preferred Form of Vitamin D?
                        </h2>

                        <p className="text-gray-600">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.
                        </p>

                        <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                            <li>Packing packages and web page layouts</li>
                            <li>Content here, content here</li>
                            <li>Packages and web page layouts</li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-xl text-center">
                        <p className="text-gray-700 italic">
                            “The first rule of any organic use in a business is that nature
                            applied to an efficient operation will magnify the efficiency.”
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                            Make perfect organic product with us
                        </h2>

                        <p className="text-gray-600">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.
                        </p>

                        <ol className="list-decimal pl-6 mt-4 text-gray-600 space-y-2">
                            <li>Packing packages and web page layouts</li>
                            <li>Content here, content here</li>
                            <li>Packages and web page layouts</li>
                            <li>More readable content</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogSingle

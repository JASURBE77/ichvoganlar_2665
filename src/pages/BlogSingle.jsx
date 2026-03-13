import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogSingle = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    const getBlog = async () => {
        const res = await axios.get(`http://localhost:3003/cards/${id}`);
        setBlog(res.data);
    };

    useEffect(() => {
        getBlog();
    }, [id]);

    if (!blog) return <h1>Loading...</h1>;

    return (
        <div className="w-full bg-white py-20">

            <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-[500px] object-cover"
            />

            <div className="max-w-[800px] mx-auto px-6 py-12">

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>Posted By: <span className="text-gray-500 font-medium">{blog.date}</span></span>
                    <span>|</span>
                    <span>By <span className="text-gray-500 font-medium">{blog.author}</span></span>
                </div>

                <h1 className="text-3xl font-bold text-[#525C60] mb-5 leading-snug">
                    {blog.title}
                </h1>

                <p className="text-gray-500 leading-relaxed mb-4">
                    {blog.fullDescription}
                </p>

                <p className="text-gray-500 leading-relaxed mb-8">
                    {blog.description}
                </p>

                <h2 className="text-2xl font-bold text-[#525C60] mb-3">
                    {blog.preferredTitle}
                </h2>

                <p className="text-gray-500 leading-relaxed mb-4">
                    {blog.preferredDescription}
                </p>

                <ul className="mb-8 space-y-3">
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                        <span className="mt-[6px] text-gray-400 text-xs">•</span>
                        {blog.preferredList[0]}
                    </li>
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                        <span className="mt-[6px] text-gray-400 text-xs">•</span>
                        {blog.preferredList[1]}
                    </li>
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                        <span className="mt-[6px] text-gray-400 text-xs">•</span>
                        {blog.preferredList[2]}
                    </li>
                </ul>

                <div className="rounded-2xl p-8 mb-8 text-center" style={{ background: "#F1EDEA" }}>
                    <p className="text-white italic leading-relaxed text-sm font-medium">
                        "{blog.quote}"
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-[#525C60] mb-3">
                    {blog.makeTitle}
                </h2>

                <p className="text-gray-500 leading-relaxed mb-4">
                    {blog.makeDescription}
                </p>

                <ol className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                        <span className="shrink-0 text-gray-600 font-medium">1.</span>
                        {blog.makeList[0]}
                    </li>
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                        <span className="shrink-0 text-gray-600 font-medium">2.</span>
                        {blog.makeList[1]}
                    </li>
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                        <span className="shrink-0 text-gray-600 font-medium">3.</span>
                        {blog.makeList[2]}
                    </li>
                    <li className="flex items-start gap-3 text-gray-500 text-sm">
                        <span className="shrink-0 text-gray-600 font-medium">4.</span>
                        {blog.makeList[3]}
                    </li>
                </ol>

            </div>
        </div>
    );
};

export default BlogSingle;
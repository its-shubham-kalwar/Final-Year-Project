import { MdDelete } from "react-icons/md";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const CreateBlog = () => {

    const editor = useRef(null);

    const [title,setTitle] = useState("");
    const [thumbnail,setThumbnail] = useState(null);
    const [content,setContent] = useState("");
    const [progress,setProgress] = useState(0);
    const [tags,setTags] = useState([]);
    const [currentTag,setCurrentTag] = useState("");


    const addTag = (tag) => setTags((prev) => [...prev, tag])


    const removeTag = (tag) => setTags((prev) => prev.filter((t)=> t !== tag));

    return (
        <div className="md:w-[60vw] bg-white my-20 mx-auto p-4 rounded-2xl">
            <h3 className="text-2xl text-gray-600 text-center">
                Let's create a blog post
                </h3>
            <form className ="grid grid-cols-1 gap-3 my-6">
                <div className="flex flex-col">
                    <label 
                    htmlFor="title" 
                    className="text-lg font-semibold text-gray-600">
                        Title
                    </label>
                    <input 
                    type="text" 
                    name = "title" 
                    id = "title" 
                    placeholder="Enter the title here..."
                    required
                    className="rounded-2xl px-3 py-1 text-lg outline-name bg-gray-100"
                    />
                </div>
                <div className="flex flex-col">
                    <label 
                    htmlFor="thumbnail" 
                    className="text-lg font-semibold text-gray-600">
                        Thumbnail
                    </label>
                    <input 
                    type="file" 
                    name = "thumbnail" 
                    id = "thumbnail" 
                    required
                    tabIndex={1}
                    className="rounded-2xl px-3 py-1 text-lg outline-name bg-gray-100"
                    />
                </div>
                <div className="flex flex-col">
                    <label 
                    htmlFor="tags" 
                    className="text-lg font-semibold text-gray-600">
                        Tags
                    </label>
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
                    <input 
                    type="text" 
                    name = "tag" 
                    id = "tag" 
                    placeholder="Enter the tags here..."
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    className="rounded-2xl px-3 py-1 text-lg outline-name bg-gray-100 w-full md:w-[85%]"
                    />
                    <button onClick={() => {
                        addTag(currentTag);
                        setCurrentTag("")
                    }} className="py-2 px-8 text-base bg-purple-500 hover:bg-purple-400 rounded-3xl text-white font-semibold w-fit">Add Tag</button>
                    </div>

                    <label htmlFor="tags" className="text-lg font-semibold text-gray-600">
                       Selected Tags 
                    </label>
                    <div className="bg-gray-100 rounded-2xl">
                    {

                        tags.map((tag, i) => (
                        <div key={i} className="flex justify-between items-center px-2 capitalized">
                        <span>{tag}</span>
                        <MdDelete className="text-red-400 hover:text-req-600
                        cursor-pointer"/>
                    </div>
                    ))}                    }




                        <div className="flex justify-between items-center px-2 capitalized">
                            <span>ReactJs</span>
                            <MdDelete className="text-red-400 hover:text-req-600
                            cursor-pointer"/>
                        </div>

                        <div className="flex justify-between items-center px-2 capitalized">
                            <span>Mern Stack</span>
                            <MdDelete className="text-red-400 hover:text-req-600
                            cursor-pointer"/>
                        </div>
                    </div>
                </div>
                <div>
                    <label 
                    htmlFor="editor" 
                    className="text-lg font-semibold text-gray-600">
                        Content
                    </label>
                    <JoditEditor ref = {editor} />
                    <button type="submit" className="py-2 px-8 text-base bg-purple-500
                    hover:bg-purple-400 rounded-3xl text-white font-semibold w-fit mt-2">Create Blog</button>
                </div>
            </form>
        </div>
    )
}

export default CreateBlog;
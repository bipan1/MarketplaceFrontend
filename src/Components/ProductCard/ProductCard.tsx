import { FcLike } from "react-icons/fc";

type Props = {}

const ProductCard = (props: Props) => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div className="relative"><a href="#">
                    <img className="w-full"
                        src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        alt="Sunset in the mountains" />
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="text-lg absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        $1080
                    </div>
                </a>
            </div>
            <div className="px-6 py-4 mb-auto">
                <a href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Treadmill Schwinn 530</a>
                <div className="flex justify-between">
                    <p className="text-gray-500 text-md">Laverton</p>
                    <FcLike size={26}/>
                </div>
            </div>
        </div>
  )
}

export default ProductCard
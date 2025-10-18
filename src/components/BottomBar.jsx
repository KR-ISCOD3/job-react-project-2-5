import { FaHome } from "react-icons/fa";

function BottomBar() {
  return (
    <div className='fixed w-full bottom-0 py-5 border-t border-gray-300'>
        <ul className="flex justify-around">
            <a href="" className="text-lg">
                <li>
                    <FaHome className="m-auto"/>
                    <p>Home</p>
                </li>
            </a>
            <a href="" className="text-lg ">
                <li>
                    <FaHome className="m-auto"/>
                    <p>Home</p>
                </li>
            </a>
             <a href="" className="text-lg ">
                <li>
                    <FaHome className="m-auto"/>
                    <p>Home</p>
                </li>
            </a>
             <a href="" className="text-lg ">
                <li>
                    <FaHome className="m-auto"/>
                    <p>Home</p>
                </li>
            </a>
        </ul>
    </div>
  )
}

export default BottomBar

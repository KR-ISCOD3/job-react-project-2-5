import { AiOutlineSolution } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWorkHistory} from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";

function BottomBar() {
  return (
    <div className='fixed w-full bottom-0 py-4 border-t border-gray-300'>
        <ul className="flex justify-around">
            <a href="" className="text-sm">
                <li>
                    <IoHomeOutline className="m-auto text-xl"/>
                    <p>Home</p>
                </li>
            </a>
            <a href="" className="text-sm">
                <li>
                    <AiOutlineSolution  className="m-auto text-xl"/>
                    <p>Solution</p>
                </li>
            </a>
             <a href="" className="text-sm ">
                <li>
                    <MdOutlineWorkHistory className="m-auto text-xl"/>
                    <p>Job</p>
                </li>
            </a>
             <a href="" className="text-sm ">
                <li>
                    <RiContactsLine className="m-auto text-xl"/>
                    <p>Contact</p>
                </li>
            </a>
        </ul>
    </div>
  )
}

export default BottomBar

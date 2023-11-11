import {useState} from "react";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/outline";

export default function ItemSideBar(props) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className=" space-y-3">
      <div
        onClick={handleToggle}
        className="flex bg-blue-Atech-escuro pl-3 p-1 rounded text-slate-300"
      >
        <props.icon className="mr-2 w-4" />
        <a className="justify-start">{props.children}</a>
        {toggle === true && <ChevronUpIcon className="w-3 ml-auto" />}
        {toggle === false && <ChevronDownIcon className="w-3 ml-auto" />}
      </div>
      {toggle === true && (
        <div name="dashboard_items" className="flex flex-col space-y-3">
          {props.items.map((item, index) => (
            <a key={index} className="pl-10 text-xs text-slate-100 pb-2 hover:text-sm duration-150">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

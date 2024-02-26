import Input from "../common/form-fields/input";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { PiAtThin } from "react-icons/pi";
import { CiPaperplane } from "react-icons/ci";

const Chat = ({ isOpen, onSubmit, onClose }: any) => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/discussion");
  };
  const message=[
    {
      username:"appu",
      type:'other',
      content:'hy',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU"
    },
    {
      username:"Priyansh",
      type:'other',
      content:'hy',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU"
    },
    {
      username:"Priyansh",
      type:'me',
      content:'hy',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU"
    },
    {
      username:"Anand",
      type:'other',
      content:'hello everyone thank you how do you do jjj jjjjjjj jjjjjjj kkkkk',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU"
    },
    {
      username:"nitin",
      type:'me',
      content:'achhe',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU"
    },
  ]
  return (
    <div className="mt-6 overflow-auto">
      {/* upper */}
      <div className="border-b-2 w-full mb-6">
        <div className="pb-6 flex items-center justify-between mx-3">
          <h1 className="text-[#333333] flex-1 justify-center opacity-70 text-center font-semibold text-[18px]">
            Title
          </h1>
          <div>
            <IoCloseOutline onClick={navigateTo} size={30} />
          </div>
        </div>
      </div>
      {/* main */}
      <div className="h-[60vh] ">
        <div className="h-full overflow-auto px-3">
          {message.map((msg,idx)=>{
            return <div key={idx}>
               {msg.type === "other" ? (
        <OtherMessage
          image={msg.image}
          text={msg.content}
          sender={msg.username}
        />
      ) : (
        <MyMessage text={msg.content} />
      )}
            </div>
          })}
        
        </div>
      </div>
      {/* lower */}
      <div className="border-t absolute bottom-4 px-3 w-full left-0">
        <div className="flex w-full pt-4 items-center">
          <div className="">
            <GrEmoji className="flex-1 cursor-pointer justify-start" size={35} />
          </div>
          <div className="w-full mx-1">
            {/* <input className="py-2 " type="text" placeholder="Start Typing" /> */}
            <Input placeholder="Start Typing"/>
          </div>
          <div className="flex flex-1 justify-end gap-3">
            <div className="cursor-pointer">
              <PiAtThin size={35} />
            </div>
            <div className="cursor-pointer">
              <CiPaperplane size={35} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

const OtherMessage = ({
  image,
  text,
  sender,
}: {
  sender: string;
  text: string;
  image: string;
}) => {
  return (
    <div className="flex justify-start items-center mb-3">
      <div className="flex items-start gap-3">
        <div>
          <img
            className="h-[40px] w-[40px] object-cover rounded-full"
            src={image}
            alt=""
          />
        </div>
        <div className="px-3 py-2 bg-gray-500/10 flex flex-col gap-1 rounded-xl rounded-tl-none text-black">
          <div className="font-bold">{sender}</div>
          <div className="">
            <div className="pr-[90px] max-w-[450px]">
              <p>{text}</p>
            </div>
            <div className="flex justify-end items-center">
              <p className="font-light mt-1">00:02 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const MyMessage = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-end items-center mb-3">
      <div className="px-3 py-2 bg-blue-500 flex flex-col gap-1 max-w-[450px] rounded-xl rounded-tr-none text-white">
        <div className="">
          <div className="pr-[90px]">
            <p>{text}</p>
          </div>
          <div className="flex justify-end items-center">
            <p className="font-light mt-1">00:02 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

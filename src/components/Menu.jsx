import { Category } from "@/assets/Category";
import { Instagramm } from "@/assets/Instagramm";
import { Linkedin } from "@/assets/Linkedin";
import { Message } from "@/assets/Message";
import { Square } from "@/assets/Square";
import { TeamIcon } from "@/assets/Team";
import { Twitter } from "@/assets/Twitter";
import { Link } from "react-router-dom";

export default function MenuCustom({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="w-full h-[310px] bg-black  absolute right-0 top-full">
    <div className="text-white border-[10px] border-solid border-[#F0D625] w-full h-[258px] bg-black pt-5 pr-[50px] pb-5 pl-5 ">
      <Link to="/" className="flex gap-3 items-center">
        <Category /> Главная
      </Link>
      <div className="w-full h-[1px] bg-[#FFFFFF1A] mt-4" />
      <Link to="/" className="flex gap-3 items-center pt-3">
        <Square /> О нас
      </Link>
      <div className="w-full h-[1px] bg-[#FFFFFF1A] mt-4" />
      <Link to="/" className="flex gap-3 items-center pt-3">
        <Message /> Курсы
      </Link>
      <div className="w-full h-[1px] bg-[#FFFFFF1A] mt-4" />
      <Link to="/" className="flex gap-3 items-center pt-3">
        <TeamIcon /> Контакты
      </Link>
      <div className="w-full h-[1px] bg-[#FFFFFF1A] mt-4" />
    </div>
    <div className="flex items-center gap-7 pt-[20px] pl-[25px] pb-[26px]">
        <Linkedin />
        <Instagramm />
        <Twitter />
    </div>
    </div>
  );
}

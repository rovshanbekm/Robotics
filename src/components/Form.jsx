import { useState } from "react"
import { Button } from "./ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


function Form () {

    const [pName, setPName] = useState('');
    const [pTel, setTel] = useState('');
    const [pNum, setNum] = useState('');
    const [cat, setCat] = useState('');
    
    const select = (value) => {
      setCat(value);
    };
    
    const NewCards = async (e) => {
      e.preventDefault();
    
      const data = {
        title: pName,
        price: pTel,
        description: pNum,
        category: cat,
      };
    
      console.log("Yuborilayotgan ma'lumotlar:", data);
    
      try {
        const response = await instance.post('/products', data);
        console.log('Server javobi:', response.data);
      } catch (error) {
        toast(error.message);
        console.error("Xatolik:", error);
      }
    };
    
    return (
      <form onSubmit={NewCards} className="flex gap-[15px] relative flex-wrap xl:flex justify-center pt-20">
        <input type="text" onChange={(e) => setPName(e.target.value)} placeholder="Ваше имя" className="bg-white w-full md:w-[230px] h-[62px] rounded-[9px] pl-[29px] lg:hidden"/>
        <input type="tel" onChange={(e) => setTel(e.target.value)} placeholder="Номер телефона" className="bg-white w-full md:w-[230px] h-[62px] rounded-[9px] pl-[29px]"/>
        <input type="text" onChange={(e) => setNum(e.target.value)} placeholder="Возраст" className="bg-white w-full  md:w-[230px] h-[62px] rounded-[9px] pl-[29px]"/>
        <Select onValueChange={select}>
          <SelectTrigger className="w-full md:w-[400px] h-[62px] bg-white text-gray-400">
            <SelectValue className="data-[placeholder]:text-[#00000066]" placeholder="Выберете курс" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem className="cursor-pointer" value="Работотехника">Работотехника</SelectItem>
              <div className="w-full h-[1px] bg-gray-500"></div>
              <SelectItem className="cursor-pointer" value="Живопись для взрослых">Живопись для взрослых</SelectItem>
              <div className="w-full h-[1px] bg-gray-500"></div>
              <SelectItem className="cursor-pointer" value="Живопись для детей">Живопись для детей</SelectItem>
              <div className="w-full h-[1px] bg-gray-500"></div>
              <SelectItem className="cursor-pointer" value="Шахмат">Шахмат</SelectItem>
              <div className="w-full h-[1px] bg-gray-500"></div>
              <SelectItem className="cursor-pointer" value="Английский">Английский</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <input type="text" onChange={(e) => setNum(e.target.value)} placeholder="Возраст" className="bg-white w-full hidden md:w-[230px] h-[62px] rounded-[9px] pl-[29px] lg:block"/>
        <Button className=" w-full md:w-[230px] h-[62px] font-bold text-2xl leading-[100%] uppercase text-black bg-[#FFE000] backdrop-blur-[32.8px] shadow-[0_0_40px_#FFE000] cursor-pointer">
          получить
        </Button>
      </form>
    );
}

export default Form
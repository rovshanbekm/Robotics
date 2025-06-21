import { Button } from "./ui/button"

function CoursesCards({ pic, desc }){
    return(
        <div className="flex flex-col px-[19px] h-[420px] md:w-full md:h-[490px] lg:w-[480px] lg:h-[508px] xl:w-[551px] xl:h-[508px] rounded-[30px] bg-[#F0D625] pt-[43px] sm:px-[51px] pb-[35px] relative">
            <img src={pic} alt="" />
            <p className="font-bold text-[22px pr-[10px] pt-[16px] sm:text-[30px] items-center lg:text-[40px] lg:leading-[42px] lg:pt-[21px] w-[316px]">{desc}</p>
            <Button className='w-[261px] h-[41px] rounded-[650px] right-3.5 bottom-6 font-semibold text-[20.83px] leading-[100%] text-center absolute sm:right-10 sm:bottom-8 cursor-pointer'>Подробнее о кусе {'->'}</Button>
        </div>
    )
}

export default CoursesCards
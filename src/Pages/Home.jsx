import HamburgerIcon from "@/assets/Hamburger"
import { LogoIcon } from "@/assets/Logo"
import { Roboto } from "@/assets/Roboto"
import { AboutCourses } from "@/components/AboutCourses"
import { ButtonDemo } from "@/components/Button"
import MenuCustom from "@/components/Menu"
import { SelectDemo } from "@/components/Select"
import { TabsDemo } from "@/components/Tabs"
import { useState } from "react"
import { Link } from "react-router-dom"
import Cards from "@/components/Cards"
import { CarouselSize } from "@/components/Carousel"
import Form from "@/components/Form"
import MapSwitcher from "@/components/Maps"
import { Telegram } from "@/assets/Telegram"
import { YouTube } from "@/assets/YouTube"
import { InstagramOutlined } from "@/assets/InstagrammOutlined"
import { TwitterOutline } from "@/assets/TwitterOutline"


function HomePage(){
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
    return(
        <div>
            <div className="bg-[#FFE000] w-full h-[14px] sm:w-full"></div>
            <div className="bg-black w-full h-[110px] lg:h-[157px] ">
            <div className="container mx-auto max-w-7xl w-full h-auto py-[23px] px-4 flex items-center justify-between">
                <LogoIcon/>
            <div className="ml-auto flex items-center space-x-6">
            <ul className="hidden lg:flex items-center space-x-10">
                <li><Link to="/home" className="text-white font-normal text-xl xl:text-2xl leading-[100%]">Главная</Link></li>
                <li><Link to="/" className="text-white font-normal text-xl xl:text-2xl leading-[100%]">О нас</Link></li>
                <li><SelectDemo /></li>
                <li><Link to='/' className="text-white font-normal text-xl xl:text-2xl leading-[100%]">Контакты</Link></li>
            </ul>
        <div className="hidden lg:flex"><ButtonDemo /></div>
            </div>
            <div><TabsDemo /></div>
            <div className="lg:hidden"><HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} /></div>
         </div>
         <div className="relative  lg:hidden">
                <MenuCustom isOpen={isOpen} />
           </div>
            </div>  
            <div className="bg-[#FFE000] w-full h-[14px]"></div>
           <div className="bg-[#111111] h-[1020px] sm:h-[1100px] md:h-[1060px] lg:h-[620px] xl:h-[820px]">
           <div className="bg-black h-[460px] mr-2.5 ml-2.5 lg:h-[460px] rounded-br-[30px] rounded-bl-[30px] xl:h-[582px] bg-[url('./assets/mask-group.svg')] bg-cover bg-center ">
                <div className="container mx-auto max-w-6xl lg:container lg:mx-auto lg:max-w-8xl">
                    <div className="flex items-center lg:justify-between">
                    <div className="bg-white mt-8 sm:w-[450px] rounded-[20px] p-6 md:w-[500px] md:mt-0 lg:rounded-[30px] lg:p-10 lg:mt-[2px] lg:ml-[20px] lg:w-[590px] xl:w-[651px]">
                    <h2 className="font-semibold tracking-tight text-[48px] sm:text-[55px] lg:text-[65px] xl:text-[84.35px] leading-[100%] pb-1.5"> JustRobotics</h2>
                    <h4 className="font-medium text-[33px] pb-2 lg:text-[30px] xl:text-[40px] leading-snug xl:pb-8 lg:pb-[46px]">твой проводник в мир <br /> технологий и искусства</h4>
                    <p className=" text-[20px] lg:font-normal lg:text-xl lg:leading-[100%] pb-4">получите бесплатное первое занятие</p>
                    <AboutCourses />
                    </div>
                    <Roboto />
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center relative gap-6 px-4 md:px-10 lg:px-2 xl:justify-between xl:flex ">
                <div className="w-full mt-10  rounded-tr-[30px] rounded-tl-[30px] sm:w-full sm:mt-10  md:mt-10 xl:w-[378px] lg:w-[288px] lg:rounded-tr-[0px] lg:rounded-tl-[0px] bg-[#F0D625] flex items-center flex-col justify-center shadow-[0_0_40px_#FFE000] backdrop-blur-[32.8px] rounded-br-[30px] rounded-bl-[30px] pt-[35px] pr-[30px] pb-[19px] pl-[30px] lg:mt-0 xl:mt-0">
                    <h2 className=" text-[54px] font-bold sm:text-[90px] md:text-[70px] lg:font-extrabold lg:text-[100px] xl:text-[120px] xl:font-extrabold leading-[100%]">300+</h2>
                        <p className="font-semibold text-[24px] md:text-[24px] lg:text-[35px] xl:text-[40px] leading-[1.1] text-center"> Довольных <br /> студентов</p>
                </div>
                <div className="w-full rounded-tr-[30px] rounded-tl-[30px] sm:w-full lg:w-[300px] xl:w-[378px] lg:rounded-tr-[0px] lg:rounded-tl-[0px] bg-[#F0D625] flex items-center flex-col justify-center shadow-[0_0_40px_#FFE000] backdrop-blur-[32.8px] rounded-br-[30px] rounded-bl-[30px] pt-[35px] pr-[30px] pb-[19px] pl-[30px] lg:mt-0 xl:mt-0">
                    <h2 className="text-[54px] font-bold sm:text-[90px] md:text-[70px] lg:font-extrabold xl:font-extrabold lg:text-[100px] xl:text-[120px] leading-[100%]">25+</h2>
                     <p className="text-[24px]  md:text-[24px] lg:font-semibold lg:text-[35px] xl:text-[40px] leading-[1.1] text-center"> Преподавателей </p>
                </div>
                <div className="w-full rounded-tr-[30px] rounded-tl-[30px] sm:w-full lg:w-[308px] xl:w-[378px] lg:rounded-tr-[0px] lg:rounded-tl-[0px] bg-[#F0D625] flex items-center flex-col justify-center shadow-[0_0_40px_#FFE000] backdrop-blur-[32.8px] rounded-br-[30px] rounded-bl-[30px] pt-[35px] pr-[30px] pb-[19px] pl-[30px] lg:mt-0 xl:mt-0">
                    <h2 className="text-[54px] font-bold sm:text-[90px] md:text-[60px] lg:font-extrabold xl:font-extrabold lg:text-[100px] xl:text-[120px] leading-[100%]">60+</h2>
                    <p className="text-[24px]  md:text-[24px] lg:font-semibold lg:text-[35px] xl:text-[40px] leading-[1.1] text-center">групп</p>
                </div>
            </div>
            </div>
           </div>
           <div className="bg-white px-20 py-[100px]">
                <div className="container mx-auto max-w-8xl">
                    <p><span className="font-bold text-2xl leading-[100%]">JustRobotics </span> <span className="font-normal text-[19px] md:text-2xl leading-[100%]">– это современный учебный центр, специализирующийся на технологиях, искусстве и образовании. Мы предоставляем комфортную 
                    и поддерживающую среду для развития талантов и <br /> навыков наших учеников. Команда высококвалифицированны преподавателей использует передовые  <br /> 
                    методики и технологии, делая занятия интерактивными и увлекательными. Мы уделяем большое внимание <br /> индивидуальному подходу, помогая каждому
                     ученику раскрыть свои способности и достичь успеха.</span> <br />
                    <p className="pt-7 sm:pt-7 md:pt-7 lg:pt-0 xl:pt-0"> <span className="font-bold text-2xl leading-[100%] ">JustRobotics</span> <span className="font-normal text-[19px] md:text-2xl leading-[100%]">– это сообщество увлеченных и целеустремленных людей, предлагающее не только <br />
                    учебные курсы, но и мероприятия, мастер-классы и конкурсы. Удобное расположение учебного центра обеспечивает легкий доступ для всех желающих.</span></p></p>
                </div>
            </div>
            <div className="bg-[#111111] bg-[url('./assets/Background-images.svg')] bg-no-repeat bg-cover bg-center min-h-screen">
                <div className="container mx-auto max-w-7xl">
                    <h1 className="text-[#FFE000] font-bold text-[47px] sm:text-7xl md:text-8xl leading-[100px] tracking-[0%] text-center uppercase pt-20">Авторские кусы <br />от JustRobotics</h1>
                    <Cards />
                </div>
               <div className="container mx-auto max-w-7xl">
               <div className="pt-[129px]">
               <h2 className=" font-bold text-[23px] pl-10 leading-8 uppercase text-[#F0D625] ">отзывы</h2>
               <CarouselSize />
               </div>
               </div>
            </div>
            <div className="bg-[#111111] pt-[132px]">
                <div className="container mx-auto max-w-8xl ">
                    <h3 className="text-[#FFE000] font-bold text-5xl sm:text-7xl md:text-8xl leading-[100px] text-center uppercase">получите бесплатный<br /> первый урок</h3>
                    <Form />
                </div>
            </div>
            <MapSwitcher />
            <div className="bg-[#FFE000]">
                <div className="container mx-auto max-w-7xl">
                    <div className="pt-[10px] gap-[40px] pl-[15px] sm:flex sm:flex-wrap md:flex md:gap-[65px] md:px-3 lg:gap-[140px]">
                        <div className="flex gap-4 md:flex-col md:gap-0">
                            <div className="w-[70px] h-[70px] rounded-[50%] bg-[#D9D9D9] font-normal text-xs leading-[100%] flex justify-center items-center text-white">ЛОГО</div>
                            <div>
                            <p className=" font-bold text-sm leading-[22px] pt-[15px]">SLOGAN lLorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                            <div className="flex gap-[10px] pt-2">
                                <Telegram />
                                <YouTube />
                                <InstagramOutlined />
                                <TwitterOutline />
                            </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h2 className="font-bold sm:text-[20px] md:text-[26px] leading-[100%]">Курсы</h2>
                            <ul className="flex flex-col gap-[14px] pt-[15px] font-normal md:text-[16px] lg:text-xl leading-[100%]">
                                <li>Работотехника</li>
                                <li>Английский для взрослых</li>
                                <li>Английский для детей</li>
                                <li>Шахмат</li>
                                <li>Живопись</li>
                            </ul>
                        </div>
                        <div className="pt-6 md:pt-4">
                            <h2 className="font-bold sm:text-[20px] md:text-[26px] leading-[100%]">Контакты</h2>
                           <ul className="flex flex-col gap-[10px] pt-[10px] font-normal md:text-[16px] lg:text-x leading-[100%]  no-underline">
                           <li><Link to='/'>Телеграм</Link></li>
                            <li><Link to='/'>Инстаграм</Link></li>
                            <li><Link to='/'>Ютюб</Link></li>
                           </ul>
                        </div>
                    </div>
                    <p className="font-semibold text-sm leading-[100%] pl-[15px] pt-[30px] md:pt-[79px] ">Ideallux.com © 2000-2024, All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
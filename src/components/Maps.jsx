import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Phone } from "@/assets/Phone";
import { Location } from "@/assets/Location";
import { Time } from "@/assets/Time";

const MapSwitcher = () => {
  const [selectedMap, setSelectedMap] = useState("c4");

  const maps = {
    c4: {
        center: [41.323135, 69.241917],
        zoom: 16,
        placemark: {
          coords: [41.323135, 69.241917],
          caption: "Just Robotics (Ц-4)",
          balloon: "Just Robotics — Ц-4 hududi, Toshkent",
        },
      },
      justRobotics: {
        center: [41.334390, 69.212840],
        zoom: 17,
        placemark: {
          coords: [41.334390, 69.212840],
          caption: "Just Robotics (Beruniy)",
          balloon: "Just Robotics — Beruniy metro yaqinida",
        },
      },
  };

  const currentMap = maps[selectedMap];

  if (!currentMap) {
    return <div>Xarita topilmadi</div>;
  }

  return (
    <div className="pb-20 bg-[#111111]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex gap-4 px-2 pt-20 sm:justify-center lg:justify-start lg:pl-[77px] xl:pl-[40px]">
     <button onClick={() => setSelectedMap("c4")} className={`cursor-pointer font-bold text-2xl leading-[100%] rounded-[8px] uppercase 
      ${selectedMap === "c4" 
        ? "text-black bg-[#FFE000] backdrop-blur-[32.8px] shadow-[0_0_40px_#FFE000] " 
        : "bg-white text-black"} 
         w-[250px]  sm:w-[310px] xl:w-[310px] h-[78px]`} >
          Филиал Ц4
        </button>
        <button onClick={() => setSelectedMap("justRobotics")}  className={`cursor-pointer font-bold text-2xl  rounded-[8px] leading-[100%] uppercase
      ${selectedMap === "justRobotics" 
        ? "text-black bg-[#FFE000]  backdrop-blur-[32.8px] shadow-[0_0_40px_#FFE000] " 
        : "bg-white text-black"} 
          w-[300px] sm:w-[392px] h-[78px] xl:w-[392px] xl:h-[78px] `}>
         Филиал Беруни
        </button>
        </div>
        <div className="flex justify-center gap-[30px] md:gap-[56px] pt-[81px] pb-[80px] ">
            <div className="flex items-center gap-3 md:gap-[23px]">
                <Phone />
                <h3 className="font-normal text-[10px] sm:text-[15px] lg:text-2xl leading-[100%] text-white">Адрес Орьентир</h3>
            </div>
            <div className="flex items-center gap-3 md:gap-[23px]">
                <Location />
                <h3 className="font-normal text-[10px] sm:text-[15px]  lg:text-2xl leading-[100%] text-white">График работы</h3>
            </div>
            <div className="flex items-center gap-3 md:gap-[23px]">
                <Time />
                <h3 className="font-normal text-[10px] sm:text-[15px]  lg:text-2xl leading-[100%] text-white">Номера телефонов</h3>
            </div>
        </div>
      </div>

      <YMaps>
        <Map
          defaultState={{
            center: currentMap.center,
            zoom: currentMap.zoom,
          }}
          key={selectedMap}
          width="100%"
          height="500px"
        >
          <Placemark
            geometry={currentMap.placemark.coords}
            properties={{
              iconCaption: currentMap.placemark.caption,
              balloonContent: currentMap.placemark.balloon,
            }}
            options={{
              preset: "islands#redIcon",
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapSwitcher;

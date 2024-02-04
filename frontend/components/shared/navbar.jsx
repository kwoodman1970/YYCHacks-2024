import React, { useState, useEffect } from 'react';
import { Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from '@/components/ui/select';
export default function Navbar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
      const intervalId = setInterval(() => {
          const newDate = new Date();
          newDate.setSeconds(0);
          setCurrentDate(newDate);
      }, 1000); // Update every minute

      return () => clearInterval(intervalId);
  }, []);

  // Custom formatting function for HH:MM with optional leading zero for hours
  const formatTime = (date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const amOrPm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12; // Convert 24hr format to 12hr format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero if minutes < 10
      return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  };

  const formattedDate = formatTime(currentDate);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageChange = (selectedOption) => {
    // Handle language change logic here
    setSelectedLanguage(selectedOption);
    // Add logic to perform translation based on the selected language
  };

  // const display = () => {
  //   const imageElement = document.getElementById('image');
  //   if (imageElement) {
     

     
    
  //   }
  //};


  return (
    <header className="self-stretch flex flex-col items-center justify-start gap-[31px] max-w-full text-left text-29xl text-crimson font-open-sans mq675:gap-[31px]">
    <div className="w-[998px] flex flex-row items-start justify-between py-0 px-5 box-border gap-[20px] max-w-full">
         <div className="w-[319px] flex flex-row items-center justify-start gap-[9px]">
        <img
          className="h-[117px] w-[107px] relative object-cover"
          loading="eager"
          alt=""
          src="/sunny-day.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <div className="relative whitespace-nowrap z-[1]">{formattedDate}</div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 text-9xl text-dimgray">
              <div className="flex flex-row items-end justify-start gap-[10px]">
                <div className="h-[38px] relative inline-block">15°c</div>
                <div className="h-[27px] relative text-xl font-light text-black inline-block whitespace-nowrap">
                  Fair Conditions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/*speech button  */}
        <div className='speech-button' style={{ marginTop:'20px'}}>
        <img className="speech-img" 
            alt="icon" 
            src="/speechicon.png"/>
      </div>

     {/* translate button */}

      
      <Select
      className="hidden"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        options={[
          { value: 'fr', label: 'French' },
          { value: 'en', label: 'English' },
          { value: 'itl', label: 'Italian' },
        ]}
      >
        <SelectTrigger className="w-[180px] ">
          
        <div className='translate-button' style={{ marginTop:'88px'}}>
        <img className="translate-img" 
            alt="icon" 
            src="/translateicon.png"/>
      </div>
         
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="fr">French</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="itl">Italian</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-45xl">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="h-[87px] relative inline-block">
              <span className="font-extrabold">YYC</span>
              <span className="font-light">-iosk</span>
            </div>
          </div>
          <div className="h-[83px] w-[35px] relative text-29xl font-extrabold inline-block shrink-0 z-[1] ml-[-8px]">
            +
          </div>
        </div>
      </div>
    </div>
    <img
      className="self-stretch h-[8.1px] relative max-w-full overflow-hidden shrink-0 object-contain"
      loading="eager"
      alt=""
      src="/line-1.svg"
    />
  </header>
)
}

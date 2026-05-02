import svgPaths from "./svg-rditlnqlup";
import imgLogo from "./5c64c9c631d05a47e392088ea55bd3cc9bea7913.png";
import imgLogo1 from "./4b0e8b4dac5f4b4efd812c7946e6a44ffed19020.png";
import imgLogo2 from "./26101596d5aa893c17dd2902d04539c61c9db378.png";
import imgLogo3 from "./d3da18df4c010580ce4e112504d87cf3299c639f.png";
import imgLogo4 from "./83faf8fd8d2b291d7ca269bfcc66bc1320fdc2ef.png";
import imgLogo5 from "./245c27076482eb05ea57ac235c0030d2e05d5feb.png";
import imgLogo6 from "./5aa69675d23e54eb737ac10d757550f5029dcce7.png";
import imgLogo7 from "./8f187b8fdecb58c0cb0c0c4e59d6149852866dd0.png";
import imgLogo8 from "./b6622fef901349d7ab872e53beefd7bacf2c0ffc.png";
import imgLogo9 from "./ee6702d5578d52155109e76f5297de96cfdea636.png";
import imgLogo10 from "./47892ad6e123a48c8ace0db3f370f2679f254b4a.png";
import imgLogo11 from "./e657ca27e8be879fbbf01a88a42db75a821a8c1d.png";
import imgLogo12 from "./3ec6890de39c4219f42cf181a86202a5c7375c6b.png";
import imgLogo13 from "./373bf2d1b8b263d028301a018a45be525edce452.png";
import imgLogo14 from "./b713cbf5a4b86b13fe91c3bbb5a9450f48c7542d.png";
import imgLogo15 from "./7c16af0cb2df19105a96db390a7f9a30bcabaa55.png";
import imgRectangle72 from "./ae042a0a2e25b837df7cff7139d46b50353883d3.png";

function Frame() {
  return <div className="absolute bg-black h-[2599px] left-[11px] rounded-[188px] top-[12px] w-[1243px]" />;
}

function Lens() {
  return (
    <div className="absolute left-[300px] size-[40px] top-[35px]" data-name="Lens">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Lens">
          <circle cx="20" cy="20" fill="var(--fill-0, #0E101F)" id="Ellipse 1" r="20" />
          <circle cx="19.9995" cy="20" fill="var(--fill-0, #01031A)" id="Ellipse 2" r="16.3636" />
          <g filter="url(#filter0_f_2_1428)" id="Ellipse 3">
            <ellipse cx="20.0009" cy="10.9091" fill="var(--fill-0, white)" fillOpacity="0.1" rx="9.09091" ry="3.63636" />
          </g>
          <g filter="url(#filter1_f_2_1428)" id="Ellipse 4">
            <ellipse cx="20.0009" cy="27.2727" fill="var(--fill-0, white)" fillOpacity="0.1" rx="9.09091" ry="5.45455" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="9.27273" id="filter0_f_2_1428" width="20.1818" x="9.91003" y="6.27274">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_2_1428" stdDeviation="0.5" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.9091" id="filter1_f_2_1428" width="20.1818" x="9.91003" y="20.8182">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_2_1428" stdDeviation="0.5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function DynamicIsland() {
  return (
    <div className="absolute bg-black h-[109px] left-[440px] overflow-clip rounded-[53px] top-[55px] w-[370px]" data-name="Dynamic Island">
      <Lens />
    </div>
  );
}

function Icon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <p className="col-1 font-['SF_Pro_Display:Medium',sans-serif] leading-[41.407px] ml-0 mt-0 not-italic relative row-1 text-[27.605px] text-center text-white w-[30.365px]">{`\u{1002AB}`}</p>
    </div>
  );
}

function IconAndText() {
  return (
    <div className="content-stretch flex gap-[5.521px] items-start relative shrink-0" data-name="Icon and Text">
      <Icon />
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Search</p>
    </div>
  );
}

function Search() {
  return (
    <div className="backdrop-blur-[110.419px] content-stretch flex h-[82.814px] items-center justify-center overflow-clip px-[30.365px] relative rounded-[110.419px] shrink-0" data-name="Search">
      <div className="absolute backdrop-blur-[110.419px] bg-[rgba(255,255,255,0.3)] inset-[0_0.06px_0_0]" data-name="Background" />
      <IconAndText />
    </div>
  );
}

function PagesAndSearchContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[80.053px] relative shrink-0 w-full" data-name="Pages and Search Container">
      <Search />
    </div>
  );
}

function Logo() {
  return (
    <div className="overflow-clip relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo} />
    </div>
  );
}

function Logo1() {
  return (
    <div className="overflow-clip relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo1} />
    </div>
  );
}

function Logo2() {
  return (
    <div className="overflow-clip relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo2} />
    </div>
  );
}

function Logo3() {
  return (
    <div className="overflow-clip relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo3} />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[56px] items-start px-[55.209px] relative shrink-0" data-name="Row">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="BOTTOM APP ICONS">
        <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="maps">
          <Logo />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 2">
        <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Appletv">
          <Logo1 />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 3">
        <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="music">
          <Logo2 />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 4">
        <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="safari">
          <Logo3 />
        </div>
      </div>
    </div>
  );
}

function Dock() {
  return (
    <div className="backdrop-blur-[110.419px] content-stretch flex h-[292.609px] items-center justify-center overflow-clip relative rounded-[105px] shrink-0 w-full" data-name="Dock">
      <div className="absolute backdrop-blur-[110.419px] bg-[rgba(255,255,255,0.3)] inset-0" data-name="Background" />
      <Row />
    </div>
  );
}

function DockContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Dock Container">
      <div className="content-stretch flex flex-col items-start pb-[38.647px] px-[41.407px] relative size-full">
        <Dock />
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="absolute bottom-[84px] content-stretch flex flex-col items-start left-0 right-0" data-name="Bottom">
      <PagesAndSearchContainer />
      <DockContainer />
    </div>
  );
}

function LeftArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip pb-[35.886px] pt-[49.688px] relative" data-name="Left Area">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="🧩 Status Bar › Time">
        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[175.264px] relative shrink-0 text-[137.16px] text-center text-white tracking-[-1.2146px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          1:47
        </p>
      </div>
    </div>
  );
}

function StatusBarDynamicIsland() {
  return <div className="h-[149.065px] shrink-0 w-[347.819px]" data-name="🧩 Status Bar › Dynamic Island" />;
}

function CellularbarsF() {
  return (
    <div className="absolute inset-[13.04%_9.65%_24.27%_7.41%] overflow-clip" data-name="cellularbars F17">
      <div className="absolute inset-[75.47%_0.05%_0.06%_83.23%]" data-name="Bar Empty">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3342 9.73992">
          <path d={svgPaths.p29d03d00} fill="var(--fill-0, white)" id="Bar Empty" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_0.06%_83.25%]" data-name="Bar #4 Full">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.357 39.7789">
          <path d={svgPaths.p18723b80} fill="var(--fill-0, white)" id="Bar #4 Full" />
        </svg>
      </div>
      <div className="absolute inset-[75.47%_27.78%_0.06%_55.5%]" data-name="Bar Empty">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3342 9.73992">
          <path d={svgPaths.p29d03d00} fill="var(--fill-0, white)" id="Bar Empty" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute inset-[22.74%_27.76%_0.06%_55.52%]" data-name="Bar #3 Full">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3341 30.7278">
          <path d={svgPaths.p35756100} fill="var(--fill-0, white)" id="Bar #3 Full" />
        </svg>
      </div>
      <div className="absolute inset-[75.47%_55.51%_0.06%_27.77%]" data-name="Bar Empty">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3342 9.73992">
          <path d={svgPaths.p29d03d00} fill="var(--fill-0, white)" id="Bar Empty" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute inset-[43.58%_55.52%_0.06%_27.76%]" data-name="Bar #2 Full">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3342 22.4329">
          <path d={svgPaths.p38ae4700} fill="var(--fill-0, white)" id="Bar #2 Full" />
        </svg>
      </div>
      <div className="absolute inset-[75.47%_83.28%_0.06%_0]" data-name="Bar Empty">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3342 9.73992">
          <path d={svgPaths.p29d03d00} fill="var(--fill-0, white)" id="Bar Empty" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute inset-[61.6%_83.28%_0.06%_0]" data-name="Bar #1 Full">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3342 15.2608">
          <path d={svgPaths.p32c27c80} fill="var(--fill-0, white)" id="Bar #1 Full" />
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[63.491px] relative shrink-0 w-[74.533px]" data-name="Icon">
      <CellularbarsF />
    </div>
  );
}

function WifiF() {
  return (
    <div className="absolute h-[38.106px] left-[5.52px] top-[11.04px] w-[52.763px]" data-name="wifi F17">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.7633 38.106">
        <g clipPath="url(#clip0_2_1438)" id="wifi F17">
          <path d={svgPaths.p13763200} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_1438">
            <rect fill="white" height="38.106" width="52.7633" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[63.491px]" data-name="Icon">
      <WifiF />
    </div>
  );
}

function Battery100F22Fina() {
  return (
    <div className="absolute h-[38.522px] left-[8.28px] top-[11.04px] w-[85.154px]" data-name="battery.100 F22 Fina">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.1543 38.5217">
        <g clipPath="url(#clip0_2_1453)" id="battery.100 F22 Fina">
          <path d={svgPaths.p1bf9aa00} fill="var(--fill-0, white)" id="Outside" opacity="0.4" />
          <path d={svgPaths.p6759c00} fill="var(--fill-0, white)" id="Inside" />
        </g>
        <defs>
          <clipPath id="clip0_2_1453">
            <rect fill="white" height="38.5217" width="85.1543" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[63.491px] relative shrink-0 w-[99.377px]" data-name="Icon">
      <Battery100F22Fina />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[8.281px] items-start relative shrink-0" data-name="Icons">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="🧩 Status Bar › Cellular Icon">
        <Icon1 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="🧩 Status Bar › Wi-Fi Icon">
        <Icon2 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="🧩 Status Bar › Battery Icon">
        <Icon3 />
      </div>
    </div>
  );
}

function RightArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip pb-[35.886px] pt-[49.688px] relative" data-name="Right Area">
      <Icons />
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[27.605px] relative shrink-0 w-[1187px]" data-name="Status Bar">
      <LeftArea />
      <StatusBarDynamicIsland />
      <RightArea />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="🧰 Status Bar">
      <StatusBar1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents font-['Wave_Spurs:Clean',sans-serif] leading-[normal] left-[15.05px] not-italic text-[#4e3000] text-[140.244px] top-[12.81px] whitespace-nowrap">
      <p className="absolute left-[15.05px] top-[12.81px]">H-</p>
      <p className="absolute left-[116.96px] top-[12.81px]">A</p>
    </div>
  );
}

function Logo4() {
  return (
    <div className="overflow-clip relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo4} />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#ff9d00] left-[calc(50%+0.16px)] overflow-clip size-[186.992px] top-[calc(50%+0.16px)]" data-name="Logo Asset">
        <Group />
      </div>
    </div>
  );
}

function HasName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Habib App</p>
    </div>
  );
}

function Logo5() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo5} />
    </div>
  );
}

function HasName1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">FaceTime</p>
    </div>
  );
}

function LogoAndText() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo5 />
      <HasName1 />
    </div>
  );
}

function Logo6() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo6} />
    </div>
  );
}

function HasName2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Calendar</p>
    </div>
  );
}

function LogoAndText1() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo6 />
      <HasName2 />
    </div>
  );
}

function Logo7() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo7} />
    </div>
  );
}

function HasName3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Wallet</p>
    </div>
  );
}

function LogoAndText2() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo7 />
      <HasName3 />
    </div>
  );
}

function Logo8() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo8} />
    </div>
  );
}

function HasName4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Shortcuts</p>
    </div>
  );
}

function LogoAndText3() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo8 />
      <HasName4 />
    </div>
  );
}

function Logo9() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo9} />
    </div>
  );
}

function HasName5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Notes</p>
    </div>
  );
}

function LogoAndText4() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo9 />
      <HasName5 />
    </div>
  );
}

function Logo10() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo10} />
    </div>
  );
}

function HasName6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Translate</p>
    </div>
  );
}

function LogoAndText5() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo10 />
      <HasName6 />
    </div>
  );
}

function Logo11() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo11} />
    </div>
  );
}

function HasName7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Reminders</p>
    </div>
  );
}

function LogoAndText6() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo11 />
      <HasName7 />
    </div>
  );
}

function Logo12() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo12} />
    </div>
  );
}

function HasName8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">News</p>
    </div>
  );
}

function LogoAndText7() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo12 />
      <HasName8 />
    </div>
  );
}

function Logo13() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo4} />
    </div>
  );
}

function HasName9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">App Store</p>
    </div>
  );
}

function LogoAndText8() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo13 />
      <HasName9 />
    </div>
  );
}

function Logo14() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo13} />
    </div>
  );
}

function HasName10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Weather</p>
    </div>
  );
}

function LogoAndText9() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo14 />
      <HasName10 />
    </div>
  );
}

function Logo15() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo14} />
    </div>
  );
}

function HasName11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Photos</p>
    </div>
  );
}

function LogoAndText10() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo15 />
      <HasName11 />
    </div>
  );
}

function Logo16() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo15} />
    </div>
  );
}

function HasName12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Health</p>
    </div>
  );
}

function LogoAndText11() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo16 />
      <HasName12 />
    </div>
  );
}

function Logo17() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo5} />
    </div>
  );
}

function HasName13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">FaceTime</p>
    </div>
  );
}

function LogoAndText12() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo17 />
      <HasName13 />
    </div>
  );
}

function Logo18() {
  return (
    <div className="relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo6} />
    </div>
  );
}

function HasName14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Calendar</p>
    </div>
  );
}

function LogoAndText13() {
  return (
    <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
      <Logo18 />
      <HasName14 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents font-['Wave_Spurs:Clean',sans-serif] leading-[normal] left-[15.05px] not-italic text-[#00d9ff] text-[140.244px] top-[12.81px] whitespace-nowrap">
      <p className="absolute left-[15.05px] top-[12.81px]">H-</p>
      <p className="absolute left-[116.96px] top-[12.81px]">A</p>
    </div>
  );
}

function Logo19() {
  return (
    <div className="overflow-clip relative rounded-[38.647px] shrink-0 size-[176.67px]" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[38.647px] size-full" src={imgLogo4} />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#230a6e] left-[calc(50%+0.16px)] overflow-clip size-[186.992px] top-[calc(50%+0.16px)]" data-name="Logo Asset">
        <Group1 />
      </div>
    </div>
  );
}

function HasName15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Has Name">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[44.167px] not-italic relative shrink-0 text-[33.126px] text-center text-white whitespace-nowrap">Habib App</p>
    </div>
  );
}

function MainHomescreen() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[112px_93px] items-center left-[97px] top-[260px] w-[985.679px]" data-name="Main Homescreen">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
          <Logo4 />
          <HasName />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText1 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText2 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText3 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText4 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText5 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText6 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText7 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText8 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText9 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText10 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText11 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText12 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <LogoAndText13 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Home Screen App">
        <div className="content-stretch flex flex-col gap-[11.042px] items-center relative shrink-0 size-[176.67px]" data-name="Logo and Text">
          <Logo19 />
          <HasName15 />
        </div>
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="absolute h-[2572.753px] left-[28px] overflow-clip top-[12px] w-[1187px]" data-name="📱 Home Screen">
      <Bottom />
      <StatusBar />
      <MainHomescreen />
    </div>
  );
}

function Component4BorderPrimary() {
  return (
    <div className="absolute inset-[14px_9px_11px_11px] rounded-[199px]" data-name="4-border-primary">
      <div aria-hidden="true" className="absolute border-8 border-[#363135] border-solid inset-[-8px] pointer-events-none rounded-[207px]" />
      <DynamicIsland />
      <HomeScreen />
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute h-[645px] left-[-20px] top-[576px] w-[1320px]" data-name="buttons">
      <div className="absolute flex h-[314px] items-center justify-center left-[1292px] top-[260px] w-[10px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[314px] overflow-clip relative rounded-bl-[2px] rounded-tl-[2px] w-[10px]" data-name="button">
            <div className="absolute blur-[0.5px] inset-[1px_-1px_1px_1px] pointer-events-none rounded-[1px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[1px] size-full" src={imgRectangle72} />
              <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] rounded-[2px]" />
            </div>
            <div className="absolute blur-[0.5px] inset-[2px_0_2px_2px] rounded-[0.2px]">
              <div aria-hidden="true" className="absolute border border-[#4f5c92] border-solid inset-[-1px] pointer-events-none rounded-[1.2px]" />
            </div>
            <div className="absolute bg-gradient-to-b blur-[0.5px] from-[#464f79] h-[22px] left-[2px] rounded-[0.5px] to-[#a1a9ca] to-[83%] top-[2px] w-[9px]" />
            <div className="absolute bottom-[2px] flex h-[22px] items-center justify-center left-[2px] w-[9px]">
              <div className="-scale-y-100 flex-none">
                <div className="bg-gradient-to-b blur-[0.5px] from-[#464f79] h-[22px] rounded-[0.5px] to-[#a1a9ca] to-[76.003%] w-[9px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[97px] left-0 overflow-clip rounded-bl-[2px] rounded-tl-[2px] top-0 w-[10px]" data-name="button">
        <div className="absolute bg-[#6f7cb0] blur-[0.5px] inset-[1px_-1px_1px_1px] rounded-[1px]">
          <div aria-hidden="true" className="absolute border border-[#242737] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
        </div>
        <div className="absolute blur-[0.5px] inset-[2px_0_2px_2px] rounded-[0.2px]">
          <div aria-hidden="true" className="absolute border border-[#fafaf8] border-solid inset-[-1px] pointer-events-none rounded-[1.2px]" />
        </div>
        <div className="absolute bg-gradient-to-b blur-[0.5px] from-[#3c4467] h-[11px] left-[2px] rounded-[0.5px] to-[#bdcee5] to-[76.003%] top-[2px] w-[9px]" />
        <div className="absolute bottom-[2px] flex h-[11px] items-center justify-center left-[2px] w-[9px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-gradient-to-b blur-[0.5px] from-[#2e3653] h-[11px] rounded-[0.5px] to-[#5b689d] to-[76.003%] w-[9px]" />
          </div>
        </div>
      </div>
      <div className="absolute h-[202px] left-0 overflow-clip rounded-bl-[2px] rounded-tl-[2px] top-[189px] w-[10px]" data-name="button">
        <div className="absolute bg-[#7886c0] blur-[0.5px] inset-[1px_-1px_1px_1px] rounded-[1px]">
          <div aria-hidden="true" className="absolute border border-[#242737] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
        </div>
        <div className="absolute blur-[0.5px] inset-[2px_0_2px_2px] rounded-[0.2px]">
          <div aria-hidden="true" className="absolute border border-[#fafaf8] border-solid inset-[-1px] pointer-events-none rounded-[1.2px]" />
        </div>
        <div className="absolute bg-gradient-to-b blur-[0.5px] from-[#616fab] h-[22px] left-[2px] rounded-[0.5px] to-[#8a8fa7] to-[76.003%] top-[2px] w-[9px]" />
        <div className="absolute bottom-[2px] flex h-[22px] items-center justify-center left-[2px] w-[9px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-gradient-to-b blur-[0.5px] from-[#616fab] h-[22px] rounded-[0.5px] to-[#8a8fa7] to-[76.003%] w-[9px]" />
          </div>
        </div>
      </div>
      <div className="absolute h-[202px] left-0 overflow-clip rounded-bl-[2px] rounded-tl-[2px] top-[443px] w-[10px]" data-name="button">
        <div className="absolute bg-[#7886c0] blur-[0.5px] inset-[1px_-1px_1px_1px] rounded-[1px]">
          <div aria-hidden="true" className="absolute border border-[#242737] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
        </div>
        <div className="absolute blur-[0.5px] inset-[2px_0_2px_2px] rounded-[0.2px]">
          <div aria-hidden="true" className="absolute border border-[#fafaf8] border-solid inset-[-1px] pointer-events-none rounded-[1.2px]" />
        </div>
        <div className="absolute bg-gradient-to-b blur-[0.5px] from-[#616fab] h-[22px] left-[2px] rounded-[0.5px] to-[#8a8fa7] to-[75.993%] top-[2px] w-[9px]" />
        <div className="absolute bottom-[2px] flex h-[22px] items-center justify-center left-[2px] w-[9px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-gradient-to-b blur-[0.5px] from-[#616fab] h-[22px] rounded-[0.5px] to-[#8a8fa7] to-[76.003%] w-[9px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Iphone() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[0.504px] h-[2622px] left-[calc(50%-400.5px)] rounded-[203px] top-[calc(50%-497px)] w-[1263px]" data-name="Iphone 18">
      <div aria-hidden="true" className="absolute border-18 border-[#5465a5] border-solid inset-[-9px] pointer-events-none rounded-[212px]" />
      <Frame />
      <Component4BorderPrimary />
      <Buttons />
    </div>
  );
}

export default function IphoneTopLeft() {
  return (
    <div className="bg-white relative size-full" data-name="Iphone top left">
      <Iphone />
    </div>
  );
}
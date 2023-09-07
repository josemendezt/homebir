import React, { useEffect, useRef, useState } from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@/components/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion';

import {
  ArrowLeft,
  Focus,
  Inspect,
  Link,
  MenuIcon,
} from 'lucide-react';
import {
  kitchenCabinets,
  kitchenCountertop,
  bathTiles,
  floors,
} from '../constants/materials';
import Image from 'next/image';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/button';
import {
  useBathroomFloor,
  useBathroomWalls,
  useFloors,
  // useCameraPosition,
  useKitchenCabinets,
  useKitchenCounterTops,
} from '@/store/demoHooks';
import TooltipWrapper from '../../components/tooltipWrapper';
import { CamerasData } from '../constants/cameras';
import { ContactForm } from '@/components/contactForm';

const SideMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // const { setCameraPosition } = useCameraPosition();
  const { selectMaterial } = useKitchenCabinets();
  const { selectMaterial: selectCountertop } =
    useKitchenCounterTops();

  const { selectMaterial: selectBathWall } = useBathroomWalls();
  const { selectMaterial: selectBathFloor } = useBathroomFloor();
  const { selectMaterial: selectFloors } = useFloors();

  const cabId = useRef(kitchenCabinets[0].id);
  const contId = useRef(kitchenCountertop[0].id);
  const bathWallId = useRef(bathTiles[0].id);
  const bathFloorId = useRef(bathTiles[0].id);
  const floorId = useRef(floors[0].id);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // const selectCameraPosition = (val: string) => {
  //   setCameraPosition(CamerasData[val]);
  // };

  useEffect(() => {
    //Avoid next js rendered error
    setOpenMenu(true);
  }, []);

  return (
    <Sheet open={openMenu}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="fixed top-0 right-0 z-10 bg-white p-2 m-2"
          onClick={handleMenu}
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="text-black">
        <SheetPrimitive.Close
          onClick={handleMenu}
          className="absolute right-4 top-4 rounded-sm opacity-90 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-white"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
        <SheetHeader>
          <SheetTitle className="flex ">
            Hombir Demo
            {/* {CamerasData.home && (
              <TooltipWrapper message="Reset Camera">
                <Focus
                  onClick={() => selectCameraPosition('home')}
                  className="ml-2 cursor-pointer"
                />
              </TooltipWrapper>
            )} */}
          </SheetTitle>

          <SheetDescription>
            Customize this model, pick any cabinet, countertops, or
            floors you like
          </SheetDescription>
        </SheetHeader>
        <hr className="mt-2 bg-primary h-1" />
        <div>
          <div className="p-4">
            <div className="font-bold mb-4 flex">
              Kitchen
              {/* {CamerasData.kitchen && (
                <TooltipWrapper message="Move To Kitchen">
                  <Inspect
                    onClick={() => selectCameraPosition('kitchen')}
                    className="ml-2 cursor-pointer"
                  />
                </TooltipWrapper>
              )} */}
            </div>
            <hr />
            <div className="pl-4 mb-4">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Cabinets</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-row flex-wrap justify-around text-center">
                      {kitchenCabinets.map((cab) => (
                        <div
                          className={`hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-secondary duration-300 cursor-pointer p-2 hover:pt-3 rounded-md mt-4 ${
                            cab.id === cabId.current &&
                            'bg-primary text-secondary'
                          }`}
                          key={cab.id}
                          onClick={() => {
                            cabId.current = cab.id;
                            selectMaterial(cab);
                          }}
                        >
                          <Image
                            width={100}
                            height={100}
                            loading={
                              kitchenCabinets.length > 12
                                ? 'lazy'
                                : 'eager'
                            }
                            alt={cab.name}
                            src={cab.map}
                          />
                          {cab.name}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Countertops</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-row flex-wrap justify-around text-center">
                      {kitchenCountertop.map((cab) => (
                        <div
                          className={`hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-secondary duration-300 cursor-pointer p-2 hover:pt-3 rounded-md mt-4 ${
                            cab.id === contId.current &&
                            'bg-primary text-secondary'
                          }`}
                          key={cab.id}
                          onClick={() => {
                            contId.current = cab.id;
                            selectCountertop(cab);
                          }}
                        >
                          <Image
                            width={100}
                            height={100}
                            loading={
                              kitchenCabinets.length > 12
                                ? 'lazy'
                                : 'eager'
                            }
                            alt={cab.name}
                            src={cab.map}
                          />
                          {cab.name}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <hr className="mb-4 bg-primary h-1" />
            <div className="font-bold mb-4 flex">
              Bathroom
              {/* {CamerasData.bathroom && (
                <TooltipWrapper message="Move to this bathroom">
                  <Inspect
                    onClick={() => selectCameraPosition('bathroom')}
                    className="ml-2 cursor-pointer"
                  />
                </TooltipWrapper>
              )} */}
            </div>
            <hr />
            <div className="pl-4">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Bath Walls</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-row flex-wrap justify-around text-center">
                      {bathTiles.map((cab) => (
                        <div
                          className={`hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-secondary duration-300 cursor-pointer p-2 hover:pt-3 rounded-md mt-4 ${
                            cab.id === bathWallId.current &&
                            'bg-primary text-secondary'
                          }`}
                          key={cab.id}
                          onClick={() => {
                            bathWallId.current = cab.id;
                            selectBathWall(cab);
                          }}
                        >
                          <Image
                            width={100}
                            height={100}
                            alt={cab.name}
                            src={cab.map}
                          />
                          {cab.name}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Bath Floor</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-row flex-wrap justify-around text-center">
                      {bathTiles.map((cab) => (
                        <div
                          className={`hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-secondary duration-300 cursor-pointer p-2 hover:pt-3 rounded-md mt-4 ${
                            cab.id === bathFloorId.current &&
                            'bg-primary text-secondary'
                          }`}
                          key={cab.id}
                          onClick={() => {
                            bathFloorId.current = cab.id;
                            selectBathFloor(cab);
                          }}
                        >
                          <Image
                            width={100}
                            height={100}
                            alt={cab.name}
                            src={cab.map}
                          />
                          {cab.name}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <hr className="mb-4 bg-primary h-1" />
              <div className="font-bold mb-4 flex">House</div>
              <hr />
              <div className="pl-4">
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Floors</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-row flex-wrap justify-around text-center">
                        {floors.map((cab) => (
                          <div
                            className={`hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-secondary duration-300 cursor-pointer p-2 hover:pt-3 rounded-md mt-4  ${
                              cab.id === floorId.current &&
                              'bg-primary text-secondary'
                            }`}
                            key={cab.id}
                            onClick={() => {
                              floorId.current = cab.id;
                              selectFloors(cab);
                            }}
                          >
                            <Image
                              width={100}
                              className="mx-auto"
                              height={100}
                              alt={cab.name}
                              src={cab.map}
                            />
                            {cab.name}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <hr />
              <div className="mt-20 flex justify-between">
                <ContactForm />
                <Button
                  className=" text-lg h-12 bg-background text-secondary"
                  onClick={() => setOpenMenu(false)}
                >
                  Close Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;

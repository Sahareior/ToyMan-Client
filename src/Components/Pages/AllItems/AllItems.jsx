import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ElictricToy from "../SubCategorys/Home/Home";
import CarToy from "../SubCategorys/CarToy";
import ElictronicToy from "../SubCategorys/ElictronicToy";
import Dolls from "../SubCategorys/Dolls";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AllItems = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="w-full  text-center ml-6 mt-12"
    >
      <h1 className="text-5xl font-bold ">Our Products</h1>
      <p className="font-bole text-cyan-400 text-xl mt-4">
        Choose your best product
      </p>
      <div className="mt-6">
        <Tabs>
          <TabList>
            <Tab>All Toys</Tab>
            <Tab>Cars</Tab>
            <Tab>Electronic</Tab>
            <Tab>Dolls</Tab>
          </TabList>

          <TabPanel>
            <div>
              <ElictricToy></ElictricToy>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <CarToy></CarToy>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <ElictronicToy></ElictronicToy>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Dolls></Dolls>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AllItems;

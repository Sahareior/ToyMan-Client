import  { useContext, useEffect, useState } from 'react';
import { addTodb } from '../../Tools/Tools';
import { AuthContext } from '../../Provider/AuthProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ElictricToy from '../SubCategorys/Home';
import CarToy from '../SubCategorys/CarToy';
import ElictronicToy from '../SubCategorys/ElictronicToy';
import Dolls from '../SubCategorys/Dolls';

const AllItems = () => {
    
    const {setCart,cart} = useContext(AuthContext)

    console.log(cart)
    return (
      
        <div className='w-full text-center mt-12'>
         
            <h1 className='text-5xl font-bold '>Our Products</h1>
            <p className='font-bole text-cyan-400 text-xl mt-4'>Choose your best product</p>
            <Tabs>
    <TabList>
      <Tab>All Toys</Tab>
      <Tab>Puzzels</Tab>
      <Tab>Electronic</Tab>
      <Tab>Dolls</Tab>
    </TabList>

    <TabPanel>
      <div>
      <ElictricToy></ElictricToy>
      </div>
    </TabPanel>
    <TabPanel>
      <div><CarToy></CarToy></div>
    </TabPanel>
    <TabPanel>
      <div><ElictronicToy></ElictronicToy></div>
    </TabPanel>
    <TabPanel>
      <div><Dolls></Dolls></div>
    </TabPanel>
  </Tabs>
  
        </div>
    );
};

export default AllItems;
import Cover from "../Home/Shared/Cover/Cover";
import img from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseManu from "../../Component/Hooks/UseManu";


import OrderTab from "../Home/Shared/OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories=['salad','drinks','soup','pizza','dessert']
    const {category}=useParams()
    console.log(category)
    const initialIndex=categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [manu]=UseManu()
    
   
    const salad=manu.filter(item => item.category ==='salad')
    const drinks=manu.filter(item => item.category ==='drinks')
    const soup=manu.filter(item => item.category ==='soup')
    const pizza=manu.filter(item => item.category ==='pizza')
    const dessert=manu.filter(item => item.category ==='dessert')
    return (
        <div>
            <Cover img={img} title='Oder Now'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>salad</Tab>
        <Tab>drinks</Tab>
        <Tab>soup</Tab>
        <Tab>pizza</Tab>
        <Tab>dessert</Tab>
        
      </TabList>
      <TabPanel>
        <OrderTab item={salad}></OrderTab>
        </TabPanel>
     
       
      <TabPanel>
      <OrderTab item={drinks}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab item={soup}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab item={pizza}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab item={dessert}></OrderTab>
      </TabPanel>
      
      
    </Tabs>
        </div>
    );
};

export default Order;
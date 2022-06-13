
import React, { useEffect } from "react";
import { Box ,Stack} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action";
import {Center,useColorModeValue,Heading,Text,Image,Flex } from '@chakra-ui/react';

import { useSearchParams } from "react-router-dom";
  
export const CompanyPage=()=>{

    const company = useSelector((store)=> store.ecommerceData.company)
    const dispatch = useDispatch()

    const [searchParams] = useSearchParams()

   useEffect(()=>{
       if(company?.length === 0){

        let params ={
            category:searchParams.getAll("category")                // new page bhi whi data k liye
        }
           dispatch(fetchData(params));

       }
   }, [dispatch,products?.length,searchParams])     //new page bhi whi data k liye

   //console.log(products)
  
    return (
        <Box>
        <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>

          
            



            <Box> 
                <Heading as="h3"> Company Page</Heading>
         <Flex flexWrap="wrap" justifyContent="space-around"  gap="3"> 
         {company.map((item)=>{
          return(
            <Box key={item.id}>

            <Box>{item.company}</Box>
            </Box>
          )

         })
         }

         </Flex>
             </Box>                                                  {/*products card */ };

            </Stack>
        </Box>
    )


}
import React from "react"
import { Link } from "react-router-dom"
import {Box, Button, Stack, VStack} from "@chakra-ui/react"

export const Home=()=>{
    return(
        <div> 
        Welcome To Home Page

        <Box marginTop={"30px"}>
        
        <VStack gap={"20px"}>

               
            <Button> <Link to="/company">COMPANIES</Link></Button>  
           <Button> <Link to="/employee">EMPLOYESS</Link></Button>  
      </VStack>

        
        </Box>


        
        
        
        </div>
    )
}
import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Heading,
    HStack,
    Text,
    VStack,
    SimpleGrid,
    Stack,
    List,
    ListItem,
    ListIcon
} from "@chakra-ui/react";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { CheckCircleIcon } from "@chakra-ui/icons";
import Gurantee from 'public/gurantee.png'
import Middle from 'public/middle.png'
import Reverse from 'public/Reverse.png'


const Pricing = () => {
    return (
        <>
            <Box className={styles.pricingUIBox} bg="#6B46C1" color={"white"} display={"flex"} justifyContent={"center"} flexDir="column" alignItems={"center"}>
                <Heading>Simple pricing for your business</Heading>
                <Text className={styles.normText}>Plans that are carefully crafted to suit your business.</Text>
            </Box>
            <Box display="flex" flexDirection={{ base: "column", md: "row" }} className={styles.setRegion} >
                <Box width={{ base: "100%", md: "30%" }} className={styles.Premium} bg="purple.100" p={"2rem"}>
                    <VStack spacing={5} >
                        {/* <Box > */}
                        <Text fontWeight={"bold"} fontSize={"2xl"}>Premium Pro</Text>
                        <Heading>329$</Heading>
                        <Text>billed just once</Text>
                        <Button colorScheme={"purple"} w="75%" mb="1rem !important">Get Started</Button>
                        {/* </Box> */}
                    </VStack>
                </Box>
                <Box width={{ base: "100%", md: "70%" }} p={"2rem"}>

                    <Text>Access these features when you get this pricing package for your business.</Text>
                    <List>
                        <ListItem pt={"1rem"}>
                            <ListIcon ><CheckCircleIcon w={8} h={8} color="purple.500" /></ListIcon>
                            International calling and messaging API
                        </ListItem>
                        <ListItem pt={"1rem"}>
                            <ListIcon ><CheckCircleIcon w={8} h={8} color="purple.500" /></ListIcon>
                            Additional phone numbers
                        </ListItem ><ListItem pt={"1rem"}>
                            <ListIcon ><CheckCircleIcon w={8} h={8} color="purple.500" /></ListIcon>
                            Automated messages via Zapier
                        </ListItem ><ListItem pt={"1rem"}>
                            <ListIcon ><CheckCircleIcon w={8} h={8} color="purple.500" /></ListIcon>
                            24/7 support and consulting
                        </ListItem>
                    </List>
                </Box>
            </Box>

               <Box className={styles.setBelowItems}>
               <List  display="flex" flexDirection={{ base: "column", md: "row" }}>
                    <ListItem  className={styles.listItems}>
                
                            <Image src={Gurantee} alt="gurantee" width={50} height={50} />
                            <Text pl={"1rem"}>
                        30 days money back Guarantee</Text>
                    </ListItem>
                    <ListItem className={styles.listItems}>
                    <Image src={Middle} alt="Middle" width={50} height={50} />
                        
                    <Text pl={"1rem"}>
                        No setup fees
                        100% hassle-free</Text>
                    </ListItem>
                    <ListItem className={styles.listItems}>
                    <Image src={Reverse} alt="Reverse" width={50} height={50} />

                    <Text pl={"1rem"}>
                        No monthly subscription
                        Pay once and for all</Text>
                    </ListItem>
                </List>
               </Box>

        </>
    );
}
export default Pricing;
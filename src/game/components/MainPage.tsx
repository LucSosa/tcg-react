import { Card, Container, Flex, Text } from "@radix-ui/themes"
import { MainHeader } from "../../core/components/MainHeader"
import { Header } from "@radix-ui/themes/dist/cjs/components/table"
import { MessagePanel } from "../../core/components/MessagePanel"
import { Footer } from "../../core/components/Footer"

export const MainPage = () => {
    return <Container size='3'>
        <Flex direction={'column'}>
            <MainHeader />
            <Text size="6" align={"center"} style={{ margin: '15px'}}>
                Welcome to the TCG made in react, create an account and start to battle
            </Text>
            <Flex gap="1.5">
                <Flex direction='column' flexGrow='2'>
                    <MessagePanel 
                        imageUrl="./images/message-image.png" 
                        messageHeader="Important" 
                        messageText="Welcome to the page, login to start"
                    />
                </Flex>
                <Flex direction='column' flexGrow='1'>
                    <Card>Login</Card>
                </Flex>
            </Flex>
        </Flex>
        <Footer />
    </Container>
}
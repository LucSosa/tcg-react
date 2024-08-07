import { Flex, Text } from "@radix-ui/themes"
import { MessagePanel } from "../../core/components/MessagePanel"
import { LoginContainer } from "../../player/components/LoginContainer"
import { Page } from "../../core/components/Page"

export const MainPage = () => {
    return (
        <Page>
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
                    <LoginContainer />
                </Flex>
            </Flex>
        </Page>
    )
}
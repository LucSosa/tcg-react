import { Button, Card, Container, Flex, Text, TextField } from "@radix-ui/themes"
import { Page } from "../../core/components/Page"

export const UserRegisterPage = () => {
    return (
        <Page>
            <Text size="6" align={"center"} style={{ margin: '15px'}}>
                Please fill up the form for the registration.
            </Text>
            <Flex gap="1.5">
                <Flex direction={'column'} flexGrow={'1'}>
                    <Card>
                        <Container size={'1'} maxWidth={'400px'}>
                            <Flex direction={'column'} gap={'2'}>
                                <Text size="3">Register</Text>
                                <div>
                                    <Text size="1">Email</Text>
                                    <TextField.Root placeholder="Enter your e-mail">
                                        <TextField.Slot />
                                    </TextField.Root>
                                </div>
                                <div>
                                    <Text size="1">Username</Text>
                                    <TextField.Root placeholder="Enter your username">
                                        <TextField.Slot />
                                    </TextField.Root>
                                </div>
                                <div>
                                    <Text size="1">Password</Text>
                                    <TextField.Root placeholder="Enter your password" type="password">
                                        <TextField.Slot />
                                    </TextField.Root>
                                </div>
                                <div>
                                    <Text size="1">Repeat Password</Text>
                                    <TextField.Root placeholder="Enter your password again" type="password">
                                        <TextField.Slot />
                                    </TextField.Root>
                                </div>

                                <Button>Submit</Button>
                            </Flex>
                        </Container>
                    </Card>
                </Flex>
            </Flex>
        </Page>
    )
}
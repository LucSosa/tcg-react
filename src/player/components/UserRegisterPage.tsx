import { Button, Card, Container, Flex, Text, TextField } from "@radix-ui/themes"
import { Page } from "../../core/components/Page"
import { useState } from "react"

export const UserRegisterPage = () => {
    const [email, setEmail] = useState<string>();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [rePassword, setRePassword] = useState<string>();

    const onSubmit = () => {
        console.log(email, username, password, rePassword);   
    }

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
                                    <TextField.Root placeholder="Enter your e-mail" value={email} onChange={(e) => setEmail(e.target.value)}>
                                        <TextField.Slot />
                                    </TextField.Root>
                                </div>
                                <div>
                                    <Text size="1">Username</Text>
                                    <TextField.Root placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)}>
                                        <TextField.Slot />
                                    </TextField.Root>
                                </div>
                                <div>
                                    <Text size="1">Password</Text>
                                    <TextField.Root placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}>
                                        <TextField.Slot />
                                    </TextField.Root>
                                </div>
                                <div>
                                    <Text size="1">Repeat Password</Text>
                                    <TextField.Root placeholder="Enter your password again" type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)}>
                                        <TextField.Slot />
                                    </TextField.Root>
                                </div>

                                <Button onClick={onSubmit}>Submit</Button>
                            </Flex>
                        </Container>
                    </Card>
                </Flex>
            </Flex>
        </Page>
    )
}
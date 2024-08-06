import { Card, Flex, Text } from "@radix-ui/themes"

type MessageProps = {
    messageText?: string;
    messageHeader?: string;
    imageUrl?: string; 
}

export const MessagePanel = ({messageText, messageHeader, imageUrl}: MessageProps) => {
    return <Card>
        <Flex direction={'column'}>
            {imageUrl && <img src={imageUrl} alt="Message" style={{maxHeight: '300px', maxWidth: 'auto'}}/>}
            <Text size='4'>{messageHeader}</Text>
            <Text size='1'>{messageText}</Text>
        </Flex>
    </Card>
}
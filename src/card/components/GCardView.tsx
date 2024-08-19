import { PropsWithChildren } from "react";
import { GCard, GCardColor } from "../model/gcard";
import { Card, Flex, Text } from "@radix-ui/themes";

type GCardViewProps = PropsWithChildren & {
    gcard: GCard;
}

const colorMap: Record<GCardColor, string> = {
    blue: '#0065bc',
    red: 'red',
    green: 'green',
    yellow: 'yellow',
};

export const GCardView: React.FC<GCardViewProps> =  ({children, gcard}) => {
    return (
        <Card style={{width: '300px', backgroundImage: colorMap[gcard.color[0]]}}>
            <Card>
                <Flex justify={"between"}>
                    <Text size={"4"} weight={"bold"}>
                        {gcard.name}
                    </Text>
                    <Text size={"1"}>
                        {gcard.rarity}
                    </Text>
                </Flex>
                <Flex align={'center'} justify={"center"}>
                    <img 
                        src={`http://localhost:5000/${gcard.image}`} 
                        alt="" 
                        style={{maxWidth: '200px', maxHeight: 'auto', border: "1px solid #000", margin: '20px'}}
                    />
                </Flex>
            </Card>
            {children}
        </Card>
    );
}
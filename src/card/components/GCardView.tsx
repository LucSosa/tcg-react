import { PropsWithChildren } from "react";
import { GCard, GCardColor, GCardEquipament, GCardMonster, GCardSpell } from "../model/gcard";
import { Card, Flex, Text } from "@radix-ui/themes";
import { HeartFilledIcon, LightningBoltIcon } from "@radix-ui/react-icons";

export type GCardViewBaseProps = PropsWithChildren & {
    gcard: GCard;
}

export const colorMap: Record<GCardColor, string> = {
    blue: "#0065bc",
    red: "red",
    green: "green",
    yellow: "yellow",
  };
  
export const getBackgroundCard = (colors: GCardColor[]) => {
    if (colors.length === 2) {
      return `linear-gradient(90deg, ${colorMap[colors[0]]} 0%, ${
        colorMap[colors[1]]
      } 100%`;
    }
  
    if (colors.length === 3) {
      return `linear-gradient(90deg, ${colorMap[colors[0]]} 0%, ${
        colorMap[colors[1]]
      } 50% , ${colorMap[colors[2]]} 100%`;
    }
  
    if (colors.length === 4) {
      return `linear-gradient(90deg, ${colorMap[colors[0]]} 0%, ${
        colorMap[colors[1]]
      } 33% , ${colorMap[colors[2]]} 66%, ${colorMap[colors[3]]} 100%`;
    }
  
    return colorMap[colors[0]];
};
  
export const GCardViewBase: React.FC<GCardViewBaseProps> = ({
    children,
    gcard,
}) => {
    const color = getBackgroundCard(gcard.color);

    return (
        <Card style={{ width: "300px", background: color }}>
            <Card>
                <Flex justify={"between"}>
                    <Text size={"4"} weight={"bold"}>
                        {gcard.name}
                    </Text>
                    <Text size={"1"}>
                        {gcard.rarity}
                    </Text>
                </Flex>
                <Flex align={'center'} justify={"center"} style={{background: color}}>
                    <img 
                        src={`http://localhost:5000/${gcard.image}`} 
                        alt="" 
                        style={{
                            maxWidth: '200px', 
                            maxHeight: 'auto', 
                            border: "1px solid #000", 
                            margin: '20px'
                        }}
                    />
                </Flex>
            </Card>
            {children}
        </Card>
    );
};

export type GCardViewProps = {
    gcard: GCard;
  };
  
export type GCardMonsterViewProps = {
    gcard: GCardMonster;
};
  
export type GCardSpellViewProps = {
    gcard: GCardSpell;
};
  
export type GCardEquipamentViewProps = {
    gcard: GCardEquipament;
};
  
export const GCardMonsterView: React.FC<GCardMonsterViewProps> = ({
    gcard,
}) => {
    return (
      <GCardViewBase gcard={gcard}>
        <Card>
          <Flex justify={"between"}>
            <Text size={'6'}><LightningBoltIcon/> {gcard.power}</Text>
            <Text size={'6'}><HeartFilledIcon/> {gcard.life}</Text>
          </Flex>
        </Card>
      </GCardViewBase>
    );
};
  
export const GCardSpellView: React.FC<GCardSpellViewProps> = ({ gcard }) => {
    return (
      <GCardViewBase gcard={gcard}>
        <span>Effect: {gcard.spell}</span>
      </GCardViewBase>
    );
};
  
export const GCardEquipamentView: React.FC<GCardEquipamentViewProps> = ({
    gcard,
}) => {
    return (
      <GCardViewBase gcard={gcard}>
        <Flex justify={"between"}>
          {gcard.power && <span>A: {gcard.power}</span>}
          {gcard.life && <span>L: {gcard.life}</span>}
        </Flex>
      </GCardViewBase>
    );
};
  
export const GCardView: React.FC<GCardViewProps> = ({ gcard }) => {
    if (gcard.type === "monster") {
      return <GCardMonsterView gcard={gcard as GCardMonster}></GCardMonsterView>;
    }
  
    if (gcard.type === "equipament") {
      return (
        <GCardEquipamentView
          gcard={gcard as GCardEquipament}
        ></GCardEquipamentView>
      );
    }
  
    if (gcard.type === "spell") {
      return <GCardSpellView gcard={gcard as GCardSpell}></GCardSpellView>;
    }
  
    return null;
};
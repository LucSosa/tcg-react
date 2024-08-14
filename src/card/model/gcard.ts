const rarity = ['common', 'rare', 'epic', 'legendary'] as const;
const gcardType = ['monster', 'spell', 'equipament'] as const;
const gcardColor = ['blue', 'red', 'yellow', 'green'] as const;
const gcardSpells = ['destroy', 'absorb', 'cancel', 'redirect'] as const;

export type Rarity = typeof rarity[number];
export type GCardType = typeof gcardType[number];
export type GCardColor = typeof gcardColor[number];
export type GCardSpellType = typeof gcardSpells[number];

export interface GCard {
    name: string;
    rarity: Rarity;
    type: GCardType;
    color: GCardColor[];
    image: string;
    id: string;
}

export interface GCardMonster extends GCard {
    power: number;
    life: number;
}

export interface GCardSpell extends GCard {
    spell: GCardSpellType;
}

export interface GCardEquipament extends GCard {
    power?: number;
    life?: number;
}
export interface Sprites {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface Ability {
  name: string;
  url: string;
}

export interface Abilities {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Type {
  name: string;
  url: string;
}

export interface Types {
  slot: number;
  type: Type;
}

export interface Pokemon {
  sprites: Sprites;
  id: number;
  price: number;
  name: string;
  abilities: Abilities[];
  types: Types[];
}

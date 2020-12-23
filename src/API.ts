/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateHeroInput = {
  id?: string | null,
  image: string,
  active: boolean,
  _version?: number | null,
};

export type ModelHeroConditionInput = {
  image?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  and?: Array< ModelHeroConditionInput | null > | null,
  or?: Array< ModelHeroConditionInput | null > | null,
  not?: ModelHeroConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateHeroInput = {
  id: string,
  image?: string | null,
  active?: boolean | null,
  _version?: number | null,
};

export type DeleteHeroInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelHeroFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  and?: Array< ModelHeroFilterInput | null > | null,
  or?: Array< ModelHeroFilterInput | null > | null,
  not?: ModelHeroFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateHeroMutationVariables = {
  input: CreateHeroInput,
  condition?: ModelHeroConditionInput | null,
};

export type CreateHeroMutation = {
  createHero:  {
    __typename: "Hero",
    id: string,
    image: string,
    active: boolean,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHeroMutationVariables = {
  input: UpdateHeroInput,
  condition?: ModelHeroConditionInput | null,
};

export type UpdateHeroMutation = {
  updateHero:  {
    __typename: "Hero",
    id: string,
    image: string,
    active: boolean,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHeroMutationVariables = {
  input: DeleteHeroInput,
  condition?: ModelHeroConditionInput | null,
};

export type DeleteHeroMutation = {
  deleteHero:  {
    __typename: "Hero",
    id: string,
    image: string,
    active: boolean,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetHeroQueryVariables = {
  id: string,
};

export type GetHeroQuery = {
  getHero:  {
    __typename: "Hero",
    id: string,
    image: string,
    active: boolean,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHerosQueryVariables = {
  filter?: ModelHeroFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHerosQuery = {
  listHeros:  {
    __typename: "ModelHeroConnection",
    items:  Array< {
      __typename: "Hero",
      id: string,
      image: string,
      active: boolean,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncHeroesQueryVariables = {
  filter?: ModelHeroFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHeroesQuery = {
  syncHeroes:  {
    __typename: "ModelHeroConnection",
    items:  Array< {
      __typename: "Hero",
      id: string,
      image: string,
      active: boolean,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateHeroSubscription = {
  onCreateHero:  {
    __typename: "Hero",
    id: string,
    image: string,
    active: boolean,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHeroSubscription = {
  onUpdateHero:  {
    __typename: "Hero",
    id: string,
    image: string,
    active: boolean,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHeroSubscription = {
  onDeleteHero:  {
    __typename: "Hero",
    id: string,
    image: string,
    active: boolean,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

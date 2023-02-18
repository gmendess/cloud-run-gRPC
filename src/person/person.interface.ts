export interface Person {
    id: number;
    name: string;
}

export interface PersonList {
    persons: Person[];
}

export const EmptyPerson = {} as Person;

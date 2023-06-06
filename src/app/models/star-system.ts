import { SpaceObject } from "./space-object"

export interface StarSystem {
    id: number
    name: string
    age: number
    massCenterId?: number
    spaceObjects: SpaceObject[]
    massCenter?: SpaceObject
}


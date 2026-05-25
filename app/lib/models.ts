import modelsData from "../data/models.json"
import type { Model } from "../types"

export async function getAllModels(): Promise<Model[]> {
    return modelsData
}

export async function getModelsByCategory(category: string): Promise<Model[]> {
    return modelsData.filter((model: Model) => model.category.toLowerCase() === category.toLowerCase())
}

export async function getModelById(id: string | number): Promise<Model> {
    const foundModel = modelsData.find(
        (model: Model) => model.id.toString() === id.toString()
    )
    
    if (!foundModel) {
        throw new Error(`Model with id ${id} not found`)
    }

    return foundModel
}
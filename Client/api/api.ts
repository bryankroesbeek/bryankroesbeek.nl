import { Project, TableColumns } from "./types";

export function getResources<T>(url: string) {
    return fetch(url)
        .then(r => r.json())
        .then(res => res as T)
}

export function getProjects(): Promise<Project[]> {
    return getResources<Project[]>('/api/projectapi/all')
}
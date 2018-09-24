import { Project, TableColumns } from "./types";

export function getResources<T>(url: string) {
    return fetch(url)
        .then(r => r.json())
        .then(res => res as T)
}

export function postResources<T>(url: string, body: T) {
    let headers = new Headers()
    headers.append('content-type', 'application/json')
    return fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })
}

export function putResources<T>(id: number, body: T) {

}

export function deleteResources(url: string, id: number) {
    let headers = new Headers()
    headers.append('content-type', 'application/json')
    return fetch(url, {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(id)
    })
}

export async function getProjects(): Promise<Project[]> {
    let res = await fetch('/api/project/repos')
    let json = await res.json()

    return json
}

export function getTables(): Promise<string[]> {
    return fetch("/api/database/tables")
        .then(res => res.json())
        .then(json => json as string[])
}

export async function getColumns(table: string): Promise<TableColumns> {
    let res = await fetch(`/api/database/${table}/columns`)
    return await res.json()
}
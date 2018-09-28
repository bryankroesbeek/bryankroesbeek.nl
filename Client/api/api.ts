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
    let res = await fetch('/api/projectapi/all')
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

export async function createRow(table: string): Promise<any> {
    return await fetch(`/api/${table}api/create`, {
        method: "POST"
    })
}

export async function updateRow(table: string, data: any): Promise<any> {
    let headers = new Headers()
    headers.append('content-type', 'application/json')

    return await fetch(`/api/${table}api/update`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(data)
    })
}

export async function deleteRow(table: string, id: number): Promise<any> {
    return await fetch(`/api/${table}api/${id}`, {
        method: "DELETE"
    })
}
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
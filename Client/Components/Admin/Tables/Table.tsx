import * as React from 'react'
import * as lodash from 'lodash'

import * as Api from '../../../api/api'
import { TableColumns } from '../../../api/types'

type TableProps = {
    data: any
    columns: TableColumns
    delete: (id: number) => void
}

type TableState = {
    data: any
    pushData: any
    expand: boolean
    executingRequest: boolean
}

export class Table extends React.Component<TableProps, TableState>{
    constructor(props: TableProps) {
        super(props)

        this.state = {
            data: { ...props.data },
            pushData: { ...props.data },
            expand: false,
            executingRequest: false
        }
    }

    componentDidMount() {
        setInterval((count: number) => {
            if (this.state.executingRequest) return
            if (JSON.stringify(this.state.data) === JSON.stringify(this.state.pushData)) return

            this.setState({ executingRequest: true }, async () => {
                let table = lodash.snakeCase(this.props.columns.name)
                await Api.updateRow(table, this.state.pushData)
                this.setState({ executingRequest: false, data: this.state.pushData })
            })
        }, 1000)
    }

    render() {
        return <div className="table-item">
            <div className="table-item-contents">{this.renderColumnItem()}</div>
            <button className="table-expand-icon" onClick={() => this.setState({ expand: !this.state.expand })}>{this.state.expand ? '-' : '+'}</button>
            <button className="table-delete-icon" onClick={() => this.deleteItem(this.state.data)}>×</button>
        </div>
    }

    renderColumnItem() {
        if (this.state.expand)
            return this.props.columns.columns.map((c, count) => {
                if (lodash.snakeCase(c.name) === "id") return null
                return <div key={`column-item-${count}`} className="column-item">
                    <label className="column-item-name">{c.name}</label>
                    {this.input(c.type, this.state.pushData[lodash.snakeCase(c.name)], c.name)}
                </div>
            })

        return this.props.columns.columns.filter(i => lodash.snakeCase(i.name) === "name").map((c, count) =>
            <div key={`column-item-${count}`} className="column-item">
                <label className="column-item-name">{c.name}</label>
                {this.input(c.type, this.state.pushData[lodash.snakeCase(c.name)], c.name)}
            </div>
        )
    }

    input(type: string, value: any, name: string): JSX.Element {
        if (type.includes('varchar')) return <input className="column-item-value" type="text" value={value} onChange={(d) => this.changeAndPush(name, { ...this.state.pushData }, d.target.value)} />
        if (type.includes('text')) return <textarea className="column-item-value large" value={value} onChange={(d) => this.changeAndPush(name, { ...this.state.pushData }, d.target.value)} />
        if (type.includes('int')) return <input className="column-item-value" type="number" value={value} onChange={(d) => this.changeAndPush(name, { ...this.state.pushData }, Number(d.target.value))} />
        if (type.includes('bit')) return <button className="column-item-button" onClick={() => this.changeAndPush(name, { ...this.state.pushData }, !value)}>{value ? "✓" : ""}</button>
        return null
    }

    changeAndPush<T>(column: string, data: any, value: T) {
        data[lodash.snakeCase(column)] = value
        this.setState({ pushData: { ...data } })
    }

    async deleteItem(data: any) {
        let res = await Api.deleteRow(this.props.columns.name, data.id)
        this.props.delete(this.state.data.id)
    }
}
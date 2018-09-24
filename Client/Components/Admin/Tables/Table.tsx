import * as React from 'react'
import * as lodash from 'lodash'

import * as Api from '../../../api/api'
import { TableColumns } from '../../../api/types'

type TableProps = {
    data: any
    columns: TableColumns
}

type TableState = {
    data: any
    expand: boolean
}

export class Table extends React.Component<TableProps, TableState>{
    constructor(props: TableProps) {
        super(props)

        this.state = {
            data: { ...props.data },
            expand: false
        }
    }

    render() {
        return <div className="table-item">
            <div className="table-item-contents">{this.renderColumnItem()}</div>
            <button className="table-expand-icon" onClick={() => this.setState({ expand: !this.state.expand })}>{this.state.expand ? '-' : '+'}</button>
        </div>
    }

    renderColumnItem() {
        if (this.state.expand)
            return this.props.columns.columns.map((c, count) => {
                if (lodash.snakeCase(c.name) === "id") return null
                return <div key={`column-item-${count}`} className="column-item">
                    <label className="column-item-name">{c.name}</label>
                    {this.input(c.type, this.state.data[lodash.snakeCase(c.name)], c.name)}
                </div>
            })

        return this.props.columns.columns.filter(i => lodash.snakeCase(i.name) === "name").map((c, count) =>
            <div key={`column-item-${count}`} className="column-item">
                <label className="column-item-name">{c.name}</label>
                {this.input(c.type, this.state.data[lodash.snakeCase(c.name)], c.name)}
            </div>
        )
    }

    input(type: string, value: any, name: string): JSX.Element {
        if (type.includes('varchar')) return <input className="column-item-value" type="text" value={value} onChange={(d) => this.changeAndPush(name, { ...this.state.data }, d.target.value)} />
        if (type.includes('text')) return <textarea className="column-item-value large" value={value} onChange={(d) => this.changeAndPush(name, { ...this.state.data }, d.target.value)} />
        if (type.includes('int')) return <input className="column-item-value" type="number" value={value} onChange={(d) => this.changeAndPush(name, { ...this.state.data }, d.target.value)} />
        if (type.includes('bit')) return <input className="column-item-value" type="checkbox" checked={value} onChange={(d) => this.changeAndPush(name, { ...this.state.data }, d.target.value)} />
        return null
    }

    changeAndPush<T>(column: string, data: any, value: T) {
        data[lodash.snakeCase(column)] = value

        this.setState({ data: { ...data } })
    }
}
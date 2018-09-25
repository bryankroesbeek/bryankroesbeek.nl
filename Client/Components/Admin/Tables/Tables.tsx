import * as React from 'react'
import * as lodash from 'lodash'

import * as Api from '../../../api/api'
import { TableColumns } from '../../../api/types'

import { Table } from './Table'

type TableProps = {
    table: string
}

type TableState = {
    columns: TableColumns | "loading"
    data: any[] | "loading"
}

export class Tables extends React.Component<TableProps, TableState>{
    constructor(props: TableProps) {
        super(props)

        this.state = {
            columns: "loading",
            data: "loading"
        }
    }

    async componentDidMount() {
        if (this.state.columns !== "loading") return
        if (this.state.data !== "loading") return


        let columns = await Api.getColumns(this.props.table)
        let data = await Api.getResources<any[]>(`/api/${this.props.table}api/all`)

        this.setState({ columns: columns, data: data })
    }

    async deleteItem(id: number) {
        if (this.state.data === "loading") return
        let newData = [...this.state.data]
        let filteredData = newData.filter((d: any) => d.id !== id)
        this.setState({ data: filteredData })
    }

    render() {
        if (this.state.columns === "loading") return null
        if (this.state.data === "loading") return null

        return <div className="table-data">
            <div className="table-columns">
                {
                    this.state.data.map(data =>
                        <Table key={data.id} delete={(id: number) => this.deleteItem(id)} data={data} columns={this.state.columns === "loading" ? null : this.state.columns} />
                    )
                }
            </div>
            <button className="tables-create-new" onClick={async () => {
                if (this.state.data === "loading") return
                let obj = await Api.createRow(lodash.snakeCase(this.props.table))
                let newData = [...this.state.data]
                newData.push(await obj.json())
                this.setState({ data: newData })
            }}>Create new</button>
        </div>
    }
}
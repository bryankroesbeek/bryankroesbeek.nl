import * as React from 'react'

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
    
    render() {
        if (this.state.columns === "loading") return null
        if (this.state.data === "loading") return null

        return <div className="table-data">
            <div className="table-columns">
                {
                    this.state.data.map((data, count) => <Table key={`item_${count}`} data={data} columns={this.state.columns === "loading" ? null : this.state.columns} />)
                }
            </div>
            <button className="tables-create-new">Create new</button>
        </div>
    }
}
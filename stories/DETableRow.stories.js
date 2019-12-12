import React, { Component } from "react";

import DETableRow from "../src/util/table/DETableRow";

import { Table, TableBody, TableCell } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import DECheckbox from "../src/util/table/DECheckbox";

export class DETableRowTest extends Component {
    render() {
        return (
            <Table>
                <TableBody>
                    <DETableRow hover>
                        <TableCell>
                            <DECheckbox checked={false} />
                        </TableCell>
                        <TableCell>Cell1</TableCell>
                        <TableCell>Cell2</TableCell>
                        <TableCell>Cell3</TableCell>
                    </DETableRow>
                    <DETableRow hover selected={true}>
                        <TableCell>
                            <DECheckbox checked={true} />
                        </TableCell>
                        <TableCell>This</TableCell>
                        <TableCell>row's</TableCell>
                        <TableCell>selected</TableCell>
                    </DETableRow>
                    <DETableRow hover>
                        <TableCell>
                            <DECheckbox checked={false} />
                        </TableCell>
                        <TableCell>Cell1</TableCell>
                        <TableCell>Cell2</TableCell>
                        <TableCell>Cell3</TableCell>
                    </DETableRow>
                </TableBody>
            </Table>
        );
    }
}

storiesOf("DETableRow", module).add("with sample data", () => (
    <DETableRowTest />
));

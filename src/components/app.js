import React, {Component} from "react";
import {Button, Checkbox, SuccessIcon, Table} from "lucid-ui";
import '../../node_modules/lucid-ui/dist/index.css'; //add webpack loader
//add code that includes the selector and table components.
//Make sure the selector determines the presence of the table
const {Thead, Tbody, Tr, Th, Td} = Table;

export default class App extends Component {
    render() {
        return (
            <Table>
				<Thead>
					<Tr>
						<Th rowSpan={2}>RS</Th>
						<Th rowSpan={2}>
							<Checkbox />
						</Th>
						<Th rowSpan={2} isSortable>Lorem.</Th>
						<Th rowSpan={2}><SuccessIcon /></Th>
						<Th rowSpan={2}>Button</Th>
						<Th rowSpan={2} isSorted sortDirection="up">Sorted Column</Th>
						<Th colSpan={3} align="center">Alignments</Th>
					</Tr>
					<Tr>
						<Th align="left">align left</Th>
						<Th align="center">align center</Th>
						<Th align="right" isSortable isSorted>align right</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td rowSpan={14} hasBorderRight>RS</Td>
						<Td><Checkbox /></Td>
						<Td>Text</Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small">button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isDisabled>
						<Td><Checkbox /></Td>
						<Td>isDisabled</Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small" isDisabled={true}>button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isActionable>
						<Td><Checkbox /></Td>
						<Td>Text && isActionable</Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small">button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isDisabled isActionable>
						<Td><Checkbox /></Td>
						<Td>isDisabled && isActionable</Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small" isDisabled={true}>button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr>
						<Td><Checkbox /></Td>
						<Td><a href="#">Link</a></Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small">button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isDisabled>
						<Td><Checkbox /></Td>
						<Td><a href="#">isDisabled Link</a></Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small" isDisabled={true}>button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isActionable>
						<Td><Checkbox /></Td>
						<Td><a href="#">Link && isActionable</a></Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small">button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isActionable isDisabled>
						<Td><Checkbox /></Td>
						<Td><a href="#">isDisabled Link && isActionable</a></Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small" isDisabled={true}>button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isSelected>
						<Td><Checkbox isSelected={true} /></Td>
						<Td>isSelected</Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small">button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isSelected isDisabled>
						<Td><Checkbox isSelected={true} /></Td>
						<Td>isSelected && isDisabled</Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small" isDisabled={true}>button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isSelected isActionable>
						<Td><Checkbox isSelected={true} /></Td>
						<Td>isSelected && isActionable</Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small">button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isSelected isDisabled isActionable>
						<Td><Checkbox isSelected={true} /></Td>
						<Td>isSelected && isDisabled && isActionable</Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small" isDisabled={true}>button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isActionable isActive>
						<Td><Checkbox /></Td>
						<Td>isActive</Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small">button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
					<Tr isActionable isActive isDisabled>
						<Td><Checkbox /></Td>
						<Td>isActive && isDisabled</Td>
						<Td hasBorderLeft hasBorderRight><SuccessIcon /></Td>
						<Td><Button size="small" isDisabled={true}>button</Button></Td>
						<Td>Sorted Column</Td>
						<Td align="left" hasBorderLeft>align left</Td>
						<Td align="center">align center</Td>
						<Td align="right">align right</Td>
					</Tr>
				</Tbody>
			</Table>
        );
    }
}

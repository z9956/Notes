import styles from './table.module.css';

const TableComponent = () => {
	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>TYPE</th>
						<th>SERVICE</th>
						<th>CPCODE</th>
						<th>D1</th>
						<th>D2</th>
						<th>D3</th>
						<th>D4</th>
						<th>D5</th>
						<th>D6</th>
						<th>D7</th>
						<th colSpan={3}>TOTAL</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowSpan={4}>CARGO</td>
						<td rowSpan={2}>EXPRESS</td>
						<td>AMS</td>
						<td>cargoExpAmsD1</td>
						<td>cargoExpAmsD2</td>
						<td>cargoExpAmsD3</td>
						<td>cargoExpAmsD4</td>
						<td>cargoExpAmsD5</td>
						<td>cargoExpAmsD6</td>
						<td>cargoExpAmsD7</td>
						<td>cargoExpAmsTotal</td>
						<td rowSpan={2}>cargoExpSpainTotal</td>
						<td rowSpan={4}>cargoTotal</td>
					</tr>
					<tr>
						<td>SPAIN</td>
						<td>cargoExpSpainD</td>
						<td>cargoExpSpainD</td>
						<td>cargoExpSpainD</td>
						<td>cargoExpSpainD</td>
						<td>cargoExpSpainD</td>
						<td>cargoExpSpainD</td>
						<td>cargoExpSpainD</td>
					</tr>
					<tr>
						<td rowSpan={2}>DEFFRRED</td>
						<td>AMS</td>
						<td>35.1 m³</td>
						<td>55.5 m³</td>
						<td>75.5 m³</td>
						<td>31.3 m³</td>
						<td>10 m³</td>
						<td>15.5 m³</td>
						<td>13.5 m³</td>
						<td>202.4 m³</td>
						<td rowSpan={2}>202.4 m³</td>
					</tr>
					<tr>
						<td>DEFFRRED</td>
						<td>SPAIN</td>
						<td>35.1 m³</td>
						<td>55.5 m³</td>
						<td>75.5 m³</td>
						<td>31.3 m³</td>
						<td>/</td>
						<td>15.5 m³</td>
						<td>28.5 m³</td>
					</tr>
					<tr>
						<td rowSpan={3}>ALLOTMENT</td>
						<td colSpan={2}>CHARTER</td>
						<td>5Y 30T</td>
						<td>KE 30T</td>
						<td>7L 30T</td>
						<td>MU 10T</td>
						<td>KE 30T</td>
						<td>DSV 10T</td>
						<td>MU 10T</td>
						<td>KE 30T</td>
						<td rowSpan={3}>123 T</td>
						<td rowSpan={4}>90 T</td>
					</tr>
					<tr>
						<td colSpan={2}>AIRLINE</td>
						<td>7L 30T *</td>
						<td>7L 30T *</td>
						<td>MU 10T</td>
						<td>7L 30T *</td>
						<td>MU 10T</td>
						<td>7L 30T *</td>
						<td>7L 30T *</td>
						<td>130 T</td>
					</tr>
					<tr>
						<td colSpan={2}>FWD</td>
						<td>DSV 20T</td>
						<td>DSV 30T</td>
						<td>DSV 30T</td>
						<td>DSV 20T</td>
						<td>DSV 20T</td>
						<td>DSV 20T</td>
						<td>DSV 20T</td>
						<td>DSV 20T</td>
					</tr>
					<tr>
						<td colSpan={3}>DATE NOT CONFIRMED</td>
						<td colSpan={7}>80 T</td>
						<td colSpan={2}>80 T</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TableComponent;

import React, { useState, useEffect, useMemo, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	Polyline,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const locations = {
	shanghai: [31.2304, 121.4737],
	tokyo: [35.6762, 139.6503],
	seoul: [37.5665, 126.978],
	hongkong: [22.3193, 114.1694],
	taipei: [25.032, 121.5654],
	sydney: [-33.8688, 151.2093],
	auckland: [-36.8485, 174.7633],
	kualaLumpur: [3.139, 101.6869],
	singapore: [1.3521, 103.8198],
};

const keyToText = {
	shanghai: '上海',
	tokyo: '东京',
	seoul: '首尔',
	hongkong: '香港',
	taipei: '台北',
	sydney: '悉尼',
	auckland: '奥克兰',
	kualaLumpur: '吉隆坡',
	singapore: '新加坡',
};

function calcCoorArr(point_start, point_end, num) {
	const p_start = {
		x: parseFloat(point_start.split(',')[0]),
		y: parseFloat(point_start.split(',')[1]),
	};
	const p_end = {
		x: parseFloat(point_end.split(',')[0]),
		y: parseFloat(point_end.split(',')[1]),
	};

	// 计算控制点
	let x3 =
		(p_start.x * 2.14 + p_end.x * 2.14 - p_start.y + p_end.y) / (2 * 2.14);
	let y3 =
		(p_start.y * 2.14 + p_end.y * 2.14 - p_end.x + p_start.x) / (2 * 2.14);
	var p_crt1 = { x: x3, y: y3 };
	var p_crt2 = { x: x3, y: y3 };

	// 计算贝塞尔曲线的坐标点
	let paths = [];
	for (let i = 0; i <= num; i++) {
		let t = i / num;
		var _matrix1 = [1, t, t * t, t * t * t];
		var _matrix2 = [
			[1, 0, 0, 0],
			[-3, 3, 0, 0],
			[3, -6, 3, 0],
			[-1, 3, -3, 1],
		];
		var _matrix3 = [
			[p_start.x, p_start.y],
			[p_crt1.x, p_crt1.y],
			[p_crt2.x, p_crt2.y],
			[p_end.x, p_end.y],
		];
		var _matrix_tmp = [
			_matrix1[0] * _matrix2[0][0] +
				_matrix1[1] * _matrix2[1][0] +
				_matrix1[2] * _matrix2[2][0] +
				_matrix1[3] * _matrix2[3][0],
			_matrix1[0] * _matrix2[0][1] +
				_matrix1[1] * _matrix2[1][1] +
				_matrix1[2] * _matrix2[2][1] +
				_matrix1[3] * _matrix2[3][1],
			_matrix1[0] * _matrix2[0][2] +
				_matrix1[1] * _matrix2[1][2] +
				_matrix1[2] * _matrix2[2][2] +
				_matrix1[3] * _matrix2[3][2],
			_matrix1[0] * _matrix2[0][3] +
				_matrix1[1] * _matrix2[1][3] +
				_matrix1[2] * _matrix2[2][3] +
				_matrix1[3] * _matrix2[3][3],
		];
		var _matrix_final = [
			_matrix_tmp[0] * _matrix3[0][0] +
				_matrix_tmp[1] * _matrix3[1][0] +
				_matrix_tmp[2] * _matrix3[2][0] +
				_matrix_tmp[3] * _matrix3[3][0],
			_matrix_tmp[0] * _matrix3[0][1] +
				_matrix_tmp[1] * _matrix3[1][1] +
				_matrix_tmp[2] * _matrix3[2][1] +
				_matrix_tmp[3] * _matrix3[3][1],
		];

		// 返回经纬度坐标
		var _res_point = [_matrix_final[0], _matrix_final[1]];
		paths.push(_res_point);
	}
	return paths;
}

const FlightAnimation = () => {
	const [startLocation, setStartLocation] = useState('shanghai');
	const [endLocation, setEndLocation] = useState('tokyo');
	const [flightPath, setFlightPath] = useState([]); // 保存飞行路径段
	const [dashedLine, setDashedLine] = useState([]); // 保存飞行路径段
	const [flightPosition, setFlightPosition] = useState(
		locations[startLocation],
	);
	const flightInterval = useRef(null);

	const startCoords = locations[startLocation];
	const endCoords = locations[endLocation];

	// 飞机图标
	const airplaneIcon = L.icon({
		iconUrl: '/img/航班.png', // 请确保你有这张图片
		iconSize: [42, 42], // 图标大小
		iconAnchor: [21, 21], // 图标的锚点（位置）
	});

	const updateDashedLine = () => {
		let pathSegments = calcCoorArr(
			startCoords.join(','),
			endCoords.join(','),
			50,
		);

		setDashedLine(pathSegments);
		updateFlightPath(pathSegments);
	};

	// 更新飞行路径
	const updateFlightPath = (nextPath = []) => {
		setFlightPosition(startCoords);
		let pathSegments = [];
		let currentStep = 0;
		const totalSteps = 100;

		if (flightInterval.current) {
			clearInterval(flightInterval.current);
			flightInterval.current = null;
		}

		flightInterval.current = setInterval(() => {
			if (!nextPath[currentStep]) return;
			const path = nextPath[currentStep];
			setFlightPosition(path);

			// 更新路径段
			pathSegments.push(path);
			setFlightPath([...pathSegments]); // 保存路径段

			// 更新路径：已飞行部分变为实线
			const updatedPath = pathSegments.map((segment) => ({
				positions: segment,
			}));

			setFlightPath(updatedPath);

			if (currentStep >= totalSteps) {
				clearInterval(flightInterval.current);
				flightInterval.current = null;
			}

			currentStep++;
		}, 70);
	};

	useEffect(() => {
		updateDashedLine();
		// updateFlightPath();
	}, [startLocation, endLocation]);

	const handleStartLocationChange = (e) => {
		setStartLocation(e.target.value);
	};

	const handleEndLocationChange = (e) => {
		setEndLocation(e.target.value);
	};

	const flightPathSegments = useMemo(() => {
		const nextFlightPath = [];
		flightPath.map((segment) => {
			if (segment.positions) {
				nextFlightPath.push(segment.positions);
			}
		});
		return nextFlightPath;
	}, [flightPath]);

	return (
		<div style={{ margin: '20px' }}>
			<label htmlFor="start-location">选择A地点：</label>
			<select
				id="start-location"
				value={startLocation}
				onChange={handleStartLocationChange}
			>
				{Object.keys(locations).map((location) => (
					<option key={location} value={location}>
						{keyToText[location]}
					</option>
				))}
			</select>

			<label htmlFor="end-location" style={{ marginLeft: '20px' }}>
				选择B地点：
			</label>
			<select
				id="end-location"
				value={endLocation}
				onChange={handleEndLocationChange}
			>
				{Object.keys(locations).map((location) => (
					<option key={location} value={location}>
						{keyToText[location]}
					</option>
				))}
			</select>
			<BrowserOnly>
				{() => (
					<MapContainer
						center={startCoords}
						zoom={4}
						style={{ width: '100%', height: '500px' }}
					>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

						<Marker position={startCoords}>
							<Popup>{keyToText[startLocation]}</Popup>
						</Marker>

						<Marker position={endCoords}>
							<Popup>{keyToText[endLocation]}</Popup>
						</Marker>

						{/* 初始虚线路径 */}
						{dashedLine.length !== flightPath.length && (
							<Polyline
								positions={dashedLine}
								color="blue"
								weight={2}
								opacity={0.7}
								dashArray="10, 10"
							/>
						)}

						{/* 更新飞行路径，逐步变为实线 */}
						{flightPath.length > 0 && (
							<Polyline
								positions={flightPathSegments}
								color="blue"
								weight={2}
								opacity={0.7}
							/>
						)}

						<Marker position={flightPosition} icon={airplaneIcon}>
							<Popup>飞机</Popup>
						</Marker>
					</MapContainer>
				)}
			</BrowserOnly>
		</div>
	);
};

export default FlightAnimation;

import React, { useState, useEffect, useMemo, useRef } from 'react';
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
		let pathSegments = [];
		let currentStep = 0;
		const totalSteps = 100;

		while (currentStep <= totalSteps) {
			const progress = currentStep / totalSteps;
			const lat = startCoords[0] + (endCoords[0] - startCoords[0]) * progress;
			const lng = startCoords[1] + (endCoords[1] - startCoords[1]) * progress;

			// 更新路径段
			pathSegments.push([lat, lng]);

			currentStep++;
		}
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
			const progress = currentStep / totalSteps;
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
		return flightPath.map((segment) => segment.positions);
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
				{flightPath.length <= 100 && (
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
		</div>
	);
};

export default FlightAnimation;

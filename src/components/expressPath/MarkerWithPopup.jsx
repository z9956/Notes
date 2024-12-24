import React, { useEffect, useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';

const MarkerWithPopup = ({ position, openPopup = false, children }) => {
  // 创建 Marker 的引用
  const markerRef = useRef(null);

  useEffect(() => {
    // 组件加载时自动打开 Popup
    if (markerRef && markerRef.current && openPopup) {
      markerRef.current.leafletElement.openPopup();
    }
  }, []); // 当位置发生变化时重新触发

  return (
    <Marker position={position} ref={markerRef}>
      <Popup>{children}</Popup>
    </Marker>
  );
};

export default MarkerWithPopup;

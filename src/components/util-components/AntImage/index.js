import React from "react";
import "./index.css";
import {
	DownloadOutlined,
	RotateLeftOutlined,
	RotateRightOutlined,
	SwapOutlined,
	ZoomInOutlined,
	ZoomOutOutlined,
} from "@ant-design/icons";

import { Image, Space } from "antd";
const src = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";
const App = (props) => {
	const onDownload = () => {
		fetch(src)
			.then((response) => response.blob())
			.then((blob) => {
				const url = URL.createObjectURL(new Blob([blob]));
				const link = document.createElement("a");
				link.href = url;
				link.download = "image.png";
				document.body.appendChild(link);
				link.click();
				URL.revokeObjectURL(url);
				link.remove();
			});
	};
	return (
		<Image
			src={src}
			preview={{
				toolbarRender: (
					_,
					{
						transform: { scale },
						actions: {
							onFlipY,
							onFlipX,
							onRotateLeft,
							onRotateRight,
							onZoomOut,
							onZoomIn,
						},
					}
				) => (
					<Space size={12} className="toolbar-wrapper">
						<DownloadOutlined onClick={onDownload} />
						<SwapOutlined rotate={90} onClick={onFlipY} />
						<SwapOutlined onClick={onFlipX} />
						<RotateLeftOutlined onClick={onRotateLeft} />
						<RotateRightOutlined onClick={onRotateRight} />
						<ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
						<ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
					</Space>
				),
			}}
			width={props.width}
		/>
	);
};
export default App;

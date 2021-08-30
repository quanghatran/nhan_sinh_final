import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { Tree } from "react-organizational-chart";
import TreeRecursion from "./TreeRecursion";

const TreeNodeChild = (props) => {
	const { listTree, userInfo } = props;

	return (
		<React.Fragment>
			<div className='header'>
				<Typography
					variant='h5'
					style={{ margin: "3rem 0 1rem", textAlign: "center" }}>
					Sơ đồ thành viên cấp dưới
				</Typography>
			</div>
			<Card className='h-100'>
				<CardContent className='pt-0'>
					<Tree
						label={
							<div>
								{userInfo.name}
								<br /> ({userInfo.phone})
							</div>
						}
						lineBorderRadius='10px'
						lineColor='green'
						lineHeight='30px'
						lineWidth='3px'
						nodePadding='5px'>
						{listTree.map((node) => (
							<TreeRecursion key={node._id} child={node}></TreeRecursion>
						))}
					</Tree>
				</CardContent>
			</Card>
		</React.Fragment>
		// <React.Fragment>
		// 	<div className='header'>
		// 		<Typography
		// 			variant='h5'
		// 			style={{ margin: "2rem 0 1rem", textAlign: "center" }}>
		// 			Sơ đồ các cấp users
		// 		</Typography>
		// 	</div>
		// 	<Card small className='h-100'>
		// 		<CardHeader className='border-bottom'>
		// 			<h6 className='m-0'>Sơ đồ các cấp users</h6>
		// 		</CardHeader>
		// 		<CardBody className='pt-0'>
		// 			<Tree
		// 				label='ROOT'
		// 				lineBorderRadius='10px'
		// 				lineColor='green'
		// 				lineHeight='30px'
		// 				lineWidth='3px'
		// 				nodePadding='5px'>

		// 				{listTree.map((node) => (
		// 					<TreeRecursion key={node._id} child={node}>

		// 					</TreeRecursion>
		// 				))}
		// 			</Tree>
		// 		</CardBody>
		// 	</Card>
		// </React.Fragment>
	);
};

export default TreeNodeChild;

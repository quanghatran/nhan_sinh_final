import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Controls from "../../../components/controls/Controls";
import { Form, useForm } from "../../components/useForm";
import { makeStyles } from "@material-ui/core/styles";

// const initialFValues = {
// 	name: "",
// 	email: "",
// 	birthDay: "01/01/1900",
// 	phoneNumber: "",
// 	address: "",
// };

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: "8px 0",
		},
	},

	mtBtn: {
		marginTop: "8px",
	},
}));

export default function EmployeeForm(props) {
	const classes = useStyles();

	// let url = process.env.REACT_APP_API_URL;
	let urlDemoService = process.env.REACT_APP_API_URL_LOCAL;

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [birthDay, setBirthDay] = useState("01/01/1900");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");

	const [href, setHref] = useState(null);

	const validate = (fieldValues = values) => {
		let temp = { ...errors };
		if ("name" in fieldValues)
			temp.name = fieldValues.name ? "" : "Bạn cần nhập đầy đủ họ tên.";

		if ("email" in fieldValues)
			temp.email = /$^|.+@.+..+/.test(fieldValues.email)
				? ""
				: "Email không hợp lệ.";

		if ("email" in fieldValues)
			temp.email = fieldValues.email ? "" : "Bạn cần nhập địa chỉ Email.";

		if ("phoneNumber" in fieldValues)
			temp.phoneNumber = fieldValues.phoneNumber
				? ""
				: "Bạn cần nhập đúng số điện thoại.";

		if ("birthDay" in fieldValues)
			temp.birthDay = fieldValues.birthDay
				? ""
				: "Bạn cần điền đúng ngày tháng năm sinh.";

		if ("address" in fieldValues)
			temp.address = fieldValues.address ? "" : "Bạn cần nhập địa chỉ.";

		setErrors({
			...temp,
		});

		if (fieldValues === values)
			return Object.values(temp).every((x) => x == "");
	};

	function handleBtnClick() {
		console.log("ahro");
		setHref("tra-cuu");
	}

	const dataFormCheck = {
		name: name,
		email: email,
		birthDay: birthDay,
		phoneNumber: phoneNumber,
		address: address,
	};

	const { values, setValues, errors, setErrors, handleInputChange } = useForm(
		dataFormCheck,
		true,
		validate
	);

	const handleSubmit = (e) => {
		console.log("submitted");
		e.preventDefault();

		if (validate()) {
			fetch(`${urlDemoService}/checks`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(dataFormCheck),
			})
				.then((res) => {
					if (!res.ok) {
						throw Error("could not fetch the data for that resource");
					}
					return res.json();
				})
				.then(() => {
					setName("");
					setEmail("");
					setBirthDay("");
					setPhoneNumber("");
					setAddress("");
				});
		}
	};

	// useEffect(() => {
	// 	if (recordForEdit != null)
	// 		setValues({
	// 			...recordForEdit,
	// 		});
	// }, [recordForEdit]);

	return (
		<Form className={classes.root} onSubmit={handleSubmit}>
			<Grid container item spacing={2}>
				<Grid item xs={6}>
					<Controls.Input
						value={name}
						onChange={(e) => setName(e.target.value)}
						error={errors.name}
						name='name'
						label='Họ tên'
					/>
				</Grid>
				<Grid item xs={6}>
					<Controls.Input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						error={errors.email}
						name='email'
						type='email'
						label='Email'
					/>
				</Grid>

				<Grid item xs={12}>
					<Controls.DatePicker
						name='birthDay'
						label='Ngày sinh'
						value={birthDay}
						error={errors.birthDay}
						onChange={(e) => setBirthDay(e.target.value)}
						fullWidth
					/>
				</Grid>

				<Grid item xs={6}>
					<Controls.Input
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						error={errors.phoneNumber}
						name='phoneNumber'
						label='Số điện thoại'
					/>
				</Grid>

				<Grid item xs={6}>
					<Controls.Input
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						error={errors.address}
						name='address'
						label='Địa chỉ'
					/>
				</Grid>

				<Grid item xs={12}>
					<div>
						<Controls.Button type='submit' text='Tra cứu miễn phí' />
					</div>
				</Grid>
			</Grid>
		</Form>
	);
}

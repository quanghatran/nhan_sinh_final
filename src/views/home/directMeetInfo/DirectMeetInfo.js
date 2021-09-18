import { Container, Grid, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./DirectMeetInfo.scss";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "1.5rem",
  },
}));

const DirectMeetInfo = ({ data, bankingData }) => {
  const listValue = data.details;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <div id="directMeetInfoBlock" className="block directMeetInfoBlock">
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.heading}>
              Lợi ích khi gặp trực tiếp
            </Typography>
          </Grid>
          <div className="directMeetInfoContent">
            <ul className="listValueDirectMeet">
              {listValue.map((value, index) => (
                <li key={index}>
                  <p>
                    <CheckIcon
                      style={{
                        paddingTop: "5px",
                        marginRight: "10px",
                        color: "#f69320",
                      }}
                    />{" "}
                    {value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="infoTransfer">
            <Typography
              variant="h3"
              component="h3"
              className="infoTransferTitle"
            >
              Thông tin chuyển khoản thanh toán
            </Typography>
            <div className="infoAccount">
              <p>Ngân hàng {bankingData[0]?.bank}</p>
              <p>Số tài khoản: {bankingData[0]?.number}</p>
              <p>Chủ tài khoản: {bankingData[0]?.name}</p>
              <p
                style={{
                  color: "#f69320",
                  fontWeight: "bold",
                }}
              >
                Nội dung chuyển khoản: GAP TRUC TIEP - SĐT (Trong đó: SĐT là số
                điện thoại liên hệ của bạn)
              </p>
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                Sau khi nhận được tiền, chúng tôi sẽ liên hệ trong vòng 30 phút
                (từ 8h30 sáng đến 18h chiều)
              </p>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default DirectMeetInfo;

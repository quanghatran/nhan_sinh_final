import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import bankingInfoApi from '../../api/bankingInfoApi';

function PaperComponent(props) {
  return <Paper {...props} />;
}

export default function ModalDepositMoney(props) {
  const { isOpen, onClose } = props;
  const [bankingInfo, setBankingInfo] = useState([]);
  useEffect(() => {
    const fetchBankingInfo = async () => {
      const res = await bankingInfoApi.getBankingInfo();
      console.log(res);
      setBankingInfo(res.data);
    };
    fetchBankingInfo();
  }, []);
  console.log(bankingInfo);
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      PaperComponent={PaperComponent}
      aria-labelledby='draggable-dialog-title'
    >
      <DialogTitle
        style={{
          cursor: 'move',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
        id='draggable-dialog-title'
      >
        Thông tin chuyển khoản
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className='infoAccount'>
            <p>Ngân hàng: {bankingInfo[0] && <b>{bankingInfo[0].bank}</b>}</p>
            <p>
              Số tài khoản: {bankingInfo[0] && <b>{bankingInfo[0].number}</b>}
            </p>
            <p>
              Chủ tài khoản: {bankingInfo[0] && <b>{bankingInfo[0].name}</b>}
            </p>
            <p>
              Nội dung chuyển khoản:{' '}
              <span
                style={{
                  color: '#f50057',
                  fontWeight: 'bold',
                }}
              >
                NAP TIEN - Ten - SĐT - Email
              </span>{' '}
              ( Trong đó: Ten là tên người dùng, SĐT là số điện thoại đăng nhập,
              Email là email của tài khoản )
            </p>
            <p
              style={{
                fontWeight: 'bold',
              }}
            >
              Sau khi nhận được thông tin chuyển khoản, chúng tôi sẽ kiểm tra và
              nạp tiền vào tài khoản trong vòng tối đa 2 tiếng (từ 8h30 sáng đến
              18h chiều)
            </p>
          </div>
        </DialogContentText>
      </DialogContent>

      <DialogActions style={{ justifyContent: 'space-around' }}>
        <Button onClick={onClose} color='secondary' variant='contained'>
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
}

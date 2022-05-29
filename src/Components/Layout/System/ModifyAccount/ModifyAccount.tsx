import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../Button/Button';
import Select from '../../../Select/Select';
import Textbox from '../../../Textbox/Textbox';
import './modifyaccount.scss';

const typeofDevice = ['Kiosk', 'Display counter'];
const ModifyAccount: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='app__layout-system__modify-account'>
      <div className='app__layout-system__modify-account__title'>Quản lý tài khoản</div>
      <div className='app__layout-system__modify-account__container'>
        <div className='row form-label'>Thông tin tài khoản</div>
        <div className='row'>
          <Textbox label='Họ tên *' />
          <Textbox label='Tên đăng nhập *' />
        </div>
        <div className='row'>
          <Textbox label='Số điện thoại *' />
          <Textbox label='Mật khẩu *' />
        </div>
        <div className='row'>
          <Textbox label='Email *' />
          <Textbox label='Nhập lại mật khẩu *' />
        </div>
        <div className='row'>
          <Select label='Vai trò *' options={typeofDevice} />
          <Select label='Tình trạng *' options={typeofDevice} />
        </div>
        <div className='row note'>* Là trường thông tin bắt buộc</div>
      </div>
      <div className='app__layout-system__modify-account__btn__bottom'>
        <Button
          text='Hủy bỏ'
          isOutlined
          onClick={() => navigate('/dashboard/system/accounts')}
        />
        <Button
          text='Thêm thiết bị'
          onClick={() => navigate('/dashboard/system/accounts')}
        />
      </div>
    </div>
  );
};

export default ModifyAccount;

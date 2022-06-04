import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../Button/Button';
import Select from '../../../Select/Select';
import Textbox, { InputType } from '../../../Textbox/Textbox';
import './newaccount.scss';

const typeofDevice = ['Kiosk', 'Display counter'];
const NewAccount: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='app__layout-system__new-account'>
      <div className='app__layout-system__new-account__title'>Quản lý tài khoản</div>
      <div className='app__layout-system__new-account__container'>
        <div className='row form-label'>Thông tin tài khoản</div>
        <div className='row'>
          <Textbox label='Họ tên *' type={InputType.fullName}/>
          <Textbox label='Tên đăng nhập *' type={InputType.userName}/>
        </div>
        <div className='row'>
          <Textbox label='Số điện thoại *' type={InputType.phoneNumber} />
          <Textbox label='Mật khẩu *' type={InputType.password}/>
        </div>
        <div className='row'>
          <Textbox label='Email *' type={InputType.email} />
          <Textbox label='Nhập lại mật khẩu *' type={InputType.password} />
        </div>
        <div className='row'>
          <Select label='Vai trò *' options={typeofDevice} />
          <Select label='Tình trạng *' options={typeofDevice} />
        </div>
        <div className='row note'>* Là trường thông tin bắt buộc</div>
      </div>
      <div className='app__layout-system__new-account__btn__bottom'>
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

export default NewAccount;

import React from 'react'
import "./device.scss"
import { FaChevronRight, FaPlusSquare, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Textbox from '../../Textbox/Textbox'

const Device = () => {
  return (
    <div className='app__layout-device'>
      <div className="app__layout-device__top">
        <div className="device__top-first">Thiết bị</div>
        <div className="device__top-icon">
          <FaChevronRight />
        </div>
        <div className="device__top-second">Danh sách thiết bị</div>
      </div>

      <div className="app__layout-device__container">
        <div className="device__container-header">Danh sách thiết bị</div>
        <div className="device__container-drop-down">
          <form action="form">
            <div className="status__form-text">Trạng thái hoạt động</div>
            <select className="status__form-first" name="languages" id="lang">
              <option value="tatca">Tất cả</option>
              <option value="hoatdong">Hoạt động</option>
              <option value="ngunghoatdong">Ngưng hoạt động</option>
            </select>
          </form>
          <form action="form">
            <div className="status__form-text">Trạng thái kết nối</div>
            <select className="status__form-item-second" name="languages" id="lang">
              <option value="tatca">Tất cả</option>
              <option value="hoatdong">Hoạt động</option>
              <option value="ngunghoatdong">Ngưng hoạt động</option>
            </select>
          </form>
        </div>
        

        <div className='device_container-box'>
          <div className="device__container-table">
            <table>
              <thead>
                <tr>
                  <th>Mã thiết bị</th>
                  <th>Tên thiết bị</th>
                  <th>Địa chỉ IP</th>
                  <th>Trạng thái hoạt động</th>
                  <th>Trạng thái kết nối</th>
                  <th>Dịch vụ sử dụng</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className='device__container-table__white'>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>Khám tim mạch, Khám mắt... <a href="">Xem thêm</a></td>
                  <td><a href="">Chi tiết</a></td>
                  <td><a href="">Cập nhật</a></td>
                </tr>

                <tr className='device__container-table__orange'>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>Khám tim mạch, Khám mắt... <a href="">Xem thêm</a></td>
                  <td><a href="">Chi tiết</a></td>
                  <td><a href="">Cập nhật</a></td>
                </tr>

                <tr className='device__container-table__white'>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>Khám tim mạch, Khám mắt... <a href="">Xem thêm</a></td>
                  <td><a href="">Chi tiết</a></td>
                  <td><a href="">Cập nhật</a></td>
                </tr>

                <tr className='device__container-table__orange'>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>Khám tim mạch, Khám mắt... <a href="">Xem thêm</a></td>
                  <td><a href="">Chi tiết</a></td>
                  <td><a href="">Cập nhật</a></td>
                </tr>

                <tr className='device__container-table__white'>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>Khám tim mạch, Khám mắt... <a href="">Xem thêm</a></td>
                  <td><a href="">Chi tiết</a></td>
                  <td><a href="">Cập nhật</a></td>
                </tr>

                <tr className='device__container-table__orange'>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>Khám tim mạch, Khám mắt... <a href="">Xem thêm</a></td>
                  <td><a href="">Chi tiết</a></td>
                  <td><a href="">Cập nhật</a></td>
                </tr>

                <tr className='device__container-table__white'>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>Khám tim mạch, Khám mắt... <a href="">Xem thêm</a></td>
                  <td><a href="">Chi tiết</a></td>
                  <td><a href="">Cập nhật</a></td>
                </tr>

                <tr className='device__container-table__orange'>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>Khám tim mạch, Khám mắt... <a href="">Xem thêm</a></td>
                  <td><a href="">Chi tiết</a></td>
                  <td><a href="">Cập nhật</a></td>
                </tr>

                <tr className='device__container-table__white'>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>Khám tim mạch, Khám mắt... <a href="">Xem thêm</a></td>
                  <td><a href="">Chi tiết</a></td>
                  <td><a href="">Cập nhật</a></td>
                </tr>

                <tr className='device__container-table__orange'>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>Khám tim mạch, Khám mắt... <a href="">Xem thêm</a></td>
                  <td><a href="">Chi tiết</a></td>
                  <td><a href="">Cập nhật</a></td>
                </tr>

                <tr className='device__container-table__white'>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>Khám tim mạch, Khám mắt... <a href="">Xem thêm</a></td>
                  <td><a href="">Chi tiết</a></td>
                  <td><a href="">Cập nhật</a></td>
                </tr>

              </tbody>
            </table>
          </div>

          <button className="device__container-btn">
            <div className='device__container-btn__icon'>
              <FaPlusSquare></FaPlusSquare>
            </div>
            Thêm thiết bị
          </button>
        </div>
      </div>

      <div className="app__layout-device__footer">
        <div className="device__footer-icon"><FaCaretLeft></FaCaretLeft></div>
        <button className="device__footer-btn">1</button>
        <button className="device__footer-btn">2</button>
        <button className="device__footer-btn">3</button>
        <button className="device__footer-btn">4</button>
        <button className="device__footer-btn">5</button>
        <button className="device__footer-btn">...</button>
        <button className="device__footer-btn">10</button>
        <div className="device__footer-icon"><FaCaretRight></FaCaretRight></div>
      </div>

    </div>
  )
}

export default Device
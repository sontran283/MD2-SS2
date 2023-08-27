import React, { Component } from 'react';
import FormEditStudent from './FormEditStudent';
import FormAddStudent from './FormAddStudent';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    userId: 1,
                    userName: "Nguyễn Mai A",
                    dateOfBirth: "01/01/1990",
                    address: "Hà Nội",
                    email: "a@gmail.com",
                    pass: 12345678,
                },
                {
                    userId: 2,
                    userName: "Nguyễn Mai B",
                    dateOfBirth: "02/02/1991",
                    address: "Hồ Chí Minh",
                    email: "b@gmail.com",
                    pass: 23456789,
                },
                {
                    userId: 3,
                    userName: "Nguyễn Mai C",
                    dateOfBirth: "03/03/1992",
                    address: "Đà Nẵng",
                    email: "c@gmail.com",
                    pass: 34567890,
                },
                {
                    userId: 4,
                    userName: "Nguyễn Mai D",
                    dateOfBirth: "04/04/1993",
                    address: "Hải Phòng",
                    email: "d@gmail.com",
                    pass: 45678901,
                },
                {
                    userId: 5,
                    userName: "Nguyễn Mai E",
                    dateOfBirth: "05/05/1994",
                    address: "Nha Trang",
                    email: "e@gmail.com",
                    pass: 56789012,
                },
                {
                    userId: 6,
                    userName: "Nguyễn Mai F",
                    dateOfBirth: "06/06/1995",
                    address: "Cần Thơ",
                    email: "f@gmail.com",
                    pass: 67890123,
                },
                {
                    userId: 7,
                    userName: "Nguyễn Mai G",
                    dateOfBirth: "07/07/1996",
                    address: "Vũng Tàu",
                    email: "g@gmail.com",
                    pass: 78901234,
                },
                {
                    userId: 8,
                    userName: "Nguyễn Mai H",
                    dateOfBirth: "08/08/1997",
                    address: "Quy Nhơn",
                    email: "h@gmail.com",
                    pass: 89012345,
                },
                {
                    userId: 9,
                    userName: "Nguyễn Mai I",
                    dateOfBirth: "09/09/1998",
                    address: "Đà Lạt",
                    email: "i@gmail.com",
                    pass: 90123456,
                },
                {
                    userId: 10,
                    userName: "Nguyễn Mai J",
                    dateOfBirth: "10/10/1999",
                    address: "Huế",
                    email: "j@gmail.com",
                    pass: 12344427,
                },

            ],
            showE: false,
            showDe: false,
        }
    }

    // edit
    handleShowEdit = () => {
        this.setState({
            showE: true,
        })
    }

    handleCloseEdit = (statue) => {
        this.setState({
            showE: statue,
        });
    }

    // delete
    handleShowDelete = () => {
        this.setState({
            showDe: true,
        })
    }

    handleCloseDelete = (statue) => {
        this.setState({
            showDe: statue,
        })
    }


    render() {
        return (
            <div>
                {this.state.showE === true ? (<FormEditStudent handleCloseEdit={this.handleCloseEdit} />) : <> </>}

                {this.state.showDe === true ? (<FormAddStudent handleCloseDelete={this.handleCloseDelete} />) : <> </>}

                <div className="m-5">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Mã</th>
                                <th scope="col">Tên sinh viên</th>
                                <th scope="col">Ngày sinh</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mật khẩu</th>
                                <th className="text-center" colSpan={2} scope="col">
                                    Hành động
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map((user, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.dateOfBirth}</td>
                                        <td>{user.address}</td>
                                        <td>{user.email}</td>
                                        <td>{user.pass}</td>
                                        <td>
                                            <i
                                                data-bs-toggle="modal"
                                                data-bs-target="#updateStudent"
                                                className="fa-solid fa-pen-to-square text-warning"
                                                onClick={this.handleShowEdit}
                                            />
                                        </td>
                                        <td>
                                            <i
                                                data-bs-toggle="modal"
                                                data-bs-target="#confirmDelete"
                                                className="fa-solid fa-trash text-danger"
                                                onClick={this.handleShowDelete}
                                            />
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default Table;
import React, { Component } from 'react';

class FormDelete extends Component {
    //  khoi tao contrucstor
    constructor(props) {
        super(props);
        this.state = {
            userCode: "",
            userName: "",
            dateOfBirth: "",
            address: "",
            email: "",
            password: "",
        }
    }

    closeForm = () => {
        this.props.handleClose(false)
    }

    // ham lang nghe su thay doi cua cac o input
    handleChangeInput = (e) => {
        this.setState({
            userCode: e.target.value,
            userName: e.target.value,
            dateOfBirth: e.target.value,
            address: e.target.value,
            email: e.target.value,
            password: e.target.value,
        })
    }

    //  ham xu li su kien
    handleSubmit = (even) => {
        even.preventDefault();
        console.log('form duoc gui di');
        const newUser = {
            userCode: this.state.userCode,
            userName: this.state.userName,
            dateOfBirth: this.state.dateOfBirth,
            address: this.state.address,
            email: this.state.email,
            password: this.state.password,
        }
        console.log('userName', newUser);
    }


    render() {
        return (
            <div>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Thêm mới sinh viên
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={this.closeForm}
                                    onChange={(e) => handleChangeInput(e)}
                                />
                            </div>
                            <div className="modal-body">
                                {/* su kien submit form */}
                                <form onSubmit={this.handleSubmit}>
                                    <div className="mb-2">
                                        <label htmlFor="studentCode" className="form-label">
                                            Mã sinh viên
                                        </label>
                                        <input type="text" className="form-control" id="studentCode"
                                            name="userCode"  /////// viet them o duoi
                                            value={this.userCode}
                                            onChange={(e) => handleChangeInput(e)} />
                                        <div className="text-danger">Mã sinh viên không được để trống.</div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="studentName" className="form-label">
                                            Tên sinh viên
                                        </label>
                                        <input type="text" className="form-control" id="studentName"
                                            value={this.userName}
                                            onChange={(e) => handleChangeInput(e)} />
                                        <div className="text-danger">Mã sinh viên không được để trống.</div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="dateOfBirth" className="form-label">
                                            Ngày sinh
                                        </label>
                                        <input type="date" className="form-control" id="dateOfBirth"
                                            value={this.dateOfBirth}
                                            onChange={(e) => handleChangeInput(e)} />
                                        <div className="text-danger">Ngày sinh không được để trống.</div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="address" className="form-label">
                                            Địa chỉ
                                        </label>
                                        <input type="text" className="form-control" id="address"
                                            value={this.address}
                                            onChange={(e) => handleChangeInput(e)} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input type="email" className="form-control" id="email"
                                            value={this.email}
                                            onChange={(e) => handleChangeInput(e)} />
                                        <div className="text-danger">Email được để trống.</div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="password" className="form-label">
                                            Mật khẩu
                                        </label>
                                        <input type="password" className="form-control" id="password"
                                            value={this.password}
                                            onChange={(e) => handleChangeInput(e)} />
                                        <div className="text-danger">Mật khẩu được để trống.</div>
                                    </div>
                                    <div className="d-flex justify-content-end gap-3">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                            onClick={this.closeForm}
                                        >
                                            Hủy
                                        </button>
                                        <button type="submit" className="btn btn-primary">
                                            Lưu
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default FormDelete;
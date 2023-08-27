import React, { Component } from 'react';

class FormEditStudent extends Component {
    constructor(props) {
        super(props)
    }
    closeForm = () => {
        this.props.handleCloseEdit(false)
    }


    render() {
        return (
            <div>
                <div
                    class="modal fade"
                    id="updateStudent"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                    Cập nhật thông tin
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={this.closeForm}
                                ></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-2">
                                        <label for="studentCode" class="form-label">Mã sinh viên</label>
                                        <input type="email" class="form-control" id="studentCode" />
                                        <div class="text-danger">Mã sinh viên không được để trống.</div>
                                    </div>
                                    <div class="mb-2">
                                        <label for="studentName" class="form-label"
                                        >Tên sinh viên</label
                                        >
                                        <input type="text" class="form-control" id="studentName" />
                                        <div class="text-danger">Mã sinh viên không được để trống.</div>
                                    </div>
                                    <div class="mb-2">
                                        <label for="dateOfBirth" class="form-label">Ngày sinh</label>
                                        <input type="date" class="form-control" id="dateOfBirth" />
                                        <div class="text-danger">Ngày sinh không được để trống.</div>
                                    </div>
                                    <div class="mb-2">
                                        <label for="address" class="form-label">Địa chỉ</label>
                                        <input type="text" class="form-control" id="address" />
                                    </div>
                                    <div class="mb-2">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" />
                                        <div class="text-danger">Email được để trống.</div>
                                    </div>
                                    <div class="mb-2">
                                        <label for="password" class="form-label">Mật khẩu</label>
                                        <input type="password" class="form-control" id="password" />
                                        <div class="text-danger">Mật khẩu được để trống.</div>
                                    </div>
                                    <div class="d-flex justify-content-end gap-3">
                                        <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                            onClick={this.closeForm}
                                        >
                                            Hủy
                                        </button>
                                        <button type="button" class="btn btn-primary">Cập nhật</button>
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

export default FormEditStudent;
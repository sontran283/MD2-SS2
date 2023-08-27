import React, { Component } from 'react';
import FormDelete from './FormDelete';


class Toolbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            userName: "",
        }
    }

    handleShow = () => {
        this.setState({
            show: true,
        });
    }

    handleClose = (statue) => {
        this.setState({
            show: statue,
        });
    }

    // ham lang nghe su thay doi trong o input
    handeleChange = (event) => {
        console.log("event", event.target.value);
        //  set lai state
        this.setState({
            userName: event.target.value
        })
    }

    render() {
        return (
            < div >
                {this.state.show === true ? (<FormDelete handleClose={this.handleClose} />) : <></>}

                <div className="d-flex m-5 justify-content-between">
                    <div className="d-flex align-items-center gap-4">
                        <div style={{ width: 263, fontWeight: 600, fontSize: 20 }}>
                            Quản lý sinh viên
                        </div>
                        <select className="form-select">
                            <option value="">-- Sắp xếp theo tên --</option>
                            <option value="">Tăng dần</option>
                            <option value="">Giảm dần</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <input
                            style={{ minWidth: 300 }}
                            type="text"
                            className="form-control"
                            placeholder="Tìm kiếm sinh viên theo tên..."
                            value={this.state.userName}
                            onChange={(e) => this.handeleChange(e)}

                        />
                        <button
                            style={{ minWidth: 170 }}
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={this.handleShow}
                        >
                            Thêm mới sinh viên
                        </button>
                    </div>
                </div>

            </div >
        );
    }
}

export default Toolbar;
import React, { Component } from 'react';
import Children_Class_Comp from './Children_Class_Comp';


class Class_Comp extends Component {
    // khai bao comstructor => ham khoi tao hay la ban thiet ke cua mot doi tuong
    constructor(props) {
        super(props) // super duoc su dung de ke thua lai tat ca cac phuong thuc va thuoc tinh cua lop cha
        //  khai bao state
        this.state = {
            //  danh sach cac state muon khai bao
            company: "rikkei academy",
            status: false,
            userName: "messi",
        }
    }

    //  ham handleClick
    handleClick = () => {
        // cap nhat lai state
        // setState  thay doi trang thai ban dau
        this.setState({
            company: "rikkei soft",
        })
    }

    //  ham handleStatus
    handleStatus = () => {
        this.setState({
            status: !this.state.status,
        })
    }

    //  hàm cập nhật lại state userName
    handleChangeName = (name) => {
        console.log("da nhan", name);
        this.setState({
            userName: name,
        })
    }


    render() {
        return (
            <>
                <div>ten cong ty : {this.state.company}</div>
                <button onClick={(e) => this.handleClick(e)}>change state</button>
                <button onClick={this.handleStatus}>{this.state.status ? "hiện" : "ẩn"}</button>

                {/* gọi đến component con */}
                {/*  ten companent_ ten prop_ gia tri chuyen vao */}
                <h1>username ben trong class_comp : {this.state.userName}</h1>
                <Children_Class_Comp
                    userName={this.state.userName}
                    handleChangeName={this.handleChangeName}>
                </Children_Class_Comp>
            </>
        );
    }
}
export default Class_Comp;

//  co mot nut button co title la show, khi click vao thi hiem thi la ẩn, khi click lần nữa thì hiển thị là hiện
// tạo ra một state có tên title có giá trị la hiện
//  viết một hàm để set lại state


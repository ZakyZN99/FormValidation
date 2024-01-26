import React from "react";
import { Card, CardGroup } from "react-bootstrap";

export class FormRegis extends React.Component {
  state = {
    name: "",
    password:"",
    jurusan: "",
    gender: "",
    member: false,
    errors: []
  };

  handleDaftar = (e) => {
    const {name, password, jurusan, gender } = this.state
    let msg = [];

    if (name.length == 0 || password.length == 0 || jurusan.length == 0 || gender.length == 0 ){
        msg = [...msg, 'Data tidak boleh kosong']
    }else{
        alert(`
        nama: ${this.state.name}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        password: ${this.state.password}
        member: ${this.state.member ? "YES" : "NO"}
        `);
    }

    if (msg.length > 0){
        this.setState({
            errors:msg
        }, ()=> alert(this.state.errors));
    }

  };
  render() {
    return (
      <div className="form-regis">
        <Card className="card">
          <form className="form-group" onSubmit={this.handleDaftar}>
            <label>
              Nama:
              <input
                type="text"
                name="name"
                onChange={(e) => this.setState({ name: e.target.value })}/>
            </label>
            <br />
            <label>
              Password:
              <input
                type="text"
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Harus berisi 1 angka, 1 huruf besar dan huruf kecil, dan minimal 8 karakter atau lebih."
                
                onChange={(e) => this.setState({ password: e.target.value })}/>
            </label>
            <br/>

            <label>
              Jurusan:
              <select
                name="jurusan"
                onChange ={(e) => this.setState({ jurusan: e.target.value })}>
                <option value={""}>Pilih Jurusan</option>
                <option value={"Teknik Elektro"}>Teknik Elektro</option>
                <option value={"Teknik Sipil"}>Teknik Sipil</option>
                <option value={"Teknik Mesin"}>Teknik Mesin</option>
              </select>
            </label>
            <br />
            <label>
              Jenis Kelamin:
              <input type="radio" value={"Laki-Laki"} name="gender" 
                onChange ={(e) => this.setState({ gender: e.target.value })} /> Laki-laki
              <input type="radio" value={"Perempuan"} name="gender" 
                onChange ={(e) => this.setState({ gender: e.target.value })}/> Perempuan
            </label>
            <br />
            <label>
              Member:
              <input type="checkbox" value={false} name="member" checked={this.state.member} 
                onChange ={(e) => this.setState({ member: e.target.value })}/>

            </label>
            <br />
            <button type="submit" className="button" >
              Daftar
            </button>
          </form>
        </Card>
      </div>
    );
  }
}

import { Component } from "react";

class Record extends Component{

    constructor(props){
        super();
        this.state = {
            alluser : props.userlist
        }
    }
    render(){
        return(
            <div align="center">
                <h2 style={{marginTop:"20px",marginBottom:"22px",width:"640px",textAlign:"center",borderBottom:"2px solid black"}}>* table show record by class Components *</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Grid</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gmail</th>
                            <th scope="col">Password</th>
                            <th scope="col">Course</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                       {
                        this.state.alluser.map((item) =>{
                            return(
                                <tr key={item.grid}> 
                                    <th scope="row">{item.grid}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.course}</td>
                                    <td>{item.city}</td>
                                </tr>
                            )
                        })
                       }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Record;
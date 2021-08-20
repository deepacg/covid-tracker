import react, {Component} from 'react'
import axios from 'axios'

class World extends Component{
    constructor(){
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/v2/countries').then(response=>{
            console.log(response.data)
            this.setState({data: response.data})
        })
    }

    render(){
        return(
            <>
                <h2>World Covid details</h2>
                <div className='row'>
                    <div className="col-md-12">
                        <table className='table table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Total cases</th>
                                    <th>Active cases</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((itm, k)=>{
                                    return(
                                        <tr>
                                            <td>{itm.country}
                                            <img src={itm.countryInfo.flag} style={{width:'25px', marginLeft: '10px'}}alt="" />
                                            </td>
                                            <td>{itm.cases}</td>
                                            <td>{itm.active}</td>
                                            <td>{itm.recovered}</td>
                                            <td>{itm.deaths}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default World
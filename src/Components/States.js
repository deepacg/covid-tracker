import react, {Component} from 'react'
import axios from 'axios'
import {Accordion} from 'react-bootstrap'

class States extends Component{
    constructor(){
        super()
        this.state = {
            stateData : {}
        }
    }

    componentDidMount(){
        axios.get('https://data.covid19india.org/state_district_wise.json').then(response=>{
            // console.log(response.data)
            this.setState({stateData:response.data})
        })
    }

    render(){
        let keys = Object.keys(this.state.stateData)
        return(
            <>
            <h2>State wise Covid details</h2>
            <div className='row'>
                <div className="col-md-12">
                <Accordion>
                    {
                        keys.map((key, k)=>{
                            let districts = this.state.stateData[key].districtData
                            let district_keys = Object.keys(districts)
                            let total_active = 0
                            let total_confirmed = 0
                            let total_recovered = 0
                            let total_deaths = 0

                            let district_list = []
                            for(let x in districts){
                                total_active += districts[x].active
                                total_confirmed += districts[x].confirmed 
                                total_recovered += districts[x].recovered 
                                total_deaths += districts[x].deceased
                                let ob = districts[x]
                                ob['district_name'] = x
                                district_list.push(ob)
                            }
                            // console.log(district_list)

                            return(
                                <Accordion.Item eventKey={k}>
                                    <Accordion.Header><span className='btn-info p-1 mr-2'> {key}</span> - <span className='btn-dark p-1 mr-2'> Total cases: {total_confirmed}</span> - <span className='btn-dark p-1 mr-2'> Active: {total_active}</span> - <span className='btn-dark p-1 mr-2'> Recovered: {total_recovered}</span> - <span className='btn-dark p-1 mr-2'> Deaths: {total_deaths}</span></Accordion.Header>
                                    <Accordion.Body>
                                        <table className='table table-bordered table-striped'>
                                            <thead>
                                                <tr>
                                                    <th>District</th>
                                                    <th>Confirmed cases</th>
                                                    <th>Active cases</th>
                                                    <th>Recovered</th>
                                                    <th>Deaths</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {district_list.map((itm, k)=>{
                                                    return(
                                                        <tr>
                                                            <td>{itm.district_name}</td>
                                                            <td>{itm.confirmed}</td>
                                                            <td>{itm.active}</td>
                                                            <td>{itm.recovered}</td>
                                                            <td>{itm.deceased}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
                </div>
            </div>
        </>
        )
        
    }
}

export default States
import react, {Component} from 'react'
import {Card} from 'react-bootstrap'
import States from './States'
import axios from 'axios'

class India extends Component{
    constructor(){
        super()
        this.state = {
            data : {}
        }
    }

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/v2/countries/india').then(response=>{
            console.log(response.data)
            this.setState({data: response.data})
        })
        
    }

    render(){
        return(
            <>     
            <div className='row'>
                <div className="col-md-12">
                    <img src="https://www.countryflags.io/in/shiny/64.png" alt="" />
                    {/* <img src={this.state.data.countryInfo.flag} alt="" /> */}
                    <h2>India Covid details</h2>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                        <Card className='bg-primary text-white' style={{ width: '18rem' }}>
                        <Card.Body className='text-center'>
                            <Card.Title>Total cases</Card.Title>
                            <h2>{this.state.data.cases}</h2>
                            <Card.Text>
                            [Today: {this.state.data.todayCases}]
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className='bg-warning ' style={{ width: '18rem' }}>
                        <Card.Body className='text-center'>
                            <Card.Title>Active cases</Card.Title>
                            <h2>{this.state.data.active}</h2>
                            <Card.Text>
                            [Today: {this.state.data.todayCases}]
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className='bg-success text-white' style={{ width: '18rem' }}>
                        <Card.Body className='text-center'>
                            <Card.Title>Recovered</Card.Title>
                            <h2>{this.state.data.recovered}</h2>
                            <Card.Text>
                            [Today: {this.state.data.todayRecovered}]
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className='bg-danger text-white' style={{ width: '18rem' }}>
                        <Card.Body className='text-center'>
                            <Card.Title>Deaths</Card.Title>
                            <h2>{this.state.data.deaths}</h2>
                            <Card.Text>
                            [Today: {this.state.data.todayDeaths}]
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <States/>
                </div>
            </div>

            </>
        )
    }
}

export default India
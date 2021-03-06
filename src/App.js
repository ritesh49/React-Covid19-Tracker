import React from 'react';
import { Cards,Chart,CountryPicker } from './components';
import styles from './app.module.css'
import { fetchData } from './api';

import coronaImage from './images/image.png'

class App extends React.Component {
    // State Declaration like this directly declares a constructor while compiling
    state = {
        data :{},
        country: '',
    }

    handleCountryChange = async (country) => {
        const fethchedData = await fetchData(country);
        this.setState({ data: fethchedData, country: country })        
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({data: fetchedData})
    }

    render(){
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className = {styles.image} src = {coronaImage} alt = "COVID-19"/>
                <Cards data ={data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange} />
                <Chart data = {data} country = {country}/>
            </div>
        )
    }
}

export default App;
import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaimg from './Images/image.png';

class App extends React.Component{
    state={
        data: {},
        country: '',
    }
    async componentDidMount(){
        const fetchedData=await fetchData();
        this.setState({data: fetchedData});
    }
    handleCountryChange=async(country)=>{
        const fetchedData=await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }
    render(){
        const {data, country}=this.state;
        return(
            <div className={styles.container}>
            <img src={coronaimg} className={styles.image} alt="COVID-19"/>
            <h5>Made By Sitanshu Yadav</h5>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
            </div>
            
        )
    }
}
export default App;

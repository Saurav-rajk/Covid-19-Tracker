import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19';

export const fetchData = async (country) => {
    let changeUrl = `${url}/all`;
    if(country && country !== 'global'){
        changeUrl = `${url}/countries/${country}`
    }
   try {
    
    const { data } = await axios.get( changeUrl );
     const modifiedData = {
          cases:data.cases,
          recovered:data.recovered,
          deaths:data.deaths
        
     }
    
    return modifiedData;
  } catch (error) {
    console.error('Error fetching global data:', error);
    return null;
  }
};

const ur = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all'

export const fetchDailyData = async () =>{
    try{
        const { data } = await axios.get(ur);

        const modifiedData = {
           cases: data.cases,
           deaths: data.deaths,
        }
        return modifiedData
    }catch (error){
      console.error('Error fetching global data:', error);
       return null;
    }
}

const u = 'https://disease.sh/v3/covid-19/countries'

export const countries = async () => {
    try{
        const { data } = await axios.get(u);
        const modifiedData = data.map((country) => country.country);
         return modifiedData
    }catch (error){
        console.log(error);
        
    }
}
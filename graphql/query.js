import { gql } from '@apollo/client';

export const query = gql`
  query getWeather($lat: Float!, $lon: Float!) {
    GetWeather(lat: $lat, lon: $lon) {
      timezone
      lat
      lon
      current {
        temp
        pressure
        humidity
        visibility
        wind_speed
        clouds
        weather {
          main
          description
          icon
        }
      }
      daily {
        dt
        sunrise
        temp {
          day
          min
          max
          night
          eve
          morn
        }
        pressure
        humidity
        wind_speed
        wind_deg
        weather {
          main
          description
          icon
        }
        clouds
        rain
      }
      alerts {
        sender_name
        event
        description
      }
    }
  }
`;

import axios from "axios";
const BASE_URL =
  "https://api.spaceXdata.com/v3/launches?limit=100";

// super admin end points
class ApiService {
  filterAllData(data) {
    let url = `${BASE_URL}&${data}`;
    return axios.get(url);
  }

  fetchAllData() {
    return axios.get(BASE_URL);
  }
}

export default new ApiService();

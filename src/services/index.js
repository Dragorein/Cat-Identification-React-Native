import axios from 'axios';

const Get = path => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'GET',
      baseURL: 'http://192.168.100.155:3000',
      url: path,
    };
    axios(config)
      .then(async feed => {
        // console.log(feed.data);
        resolve(feed.data);
      })
      .catch(err => {
        // console.log(err);
        reject(err);
      });
  });
};

const Post = (path, requestData) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'POST',
      baseURL: 'http://192.168.100.155:3000',
      timeout: 20000,
      url: path,
      data: requestData,
    };
    axios(config)
      .then(async feed => {
        // console.log(feed.data);
        resolve(feed.data);
      })
      .catch(err => {
        // console.log(err);
        reject(err);
      });
  });
};

const Services = {
  Get,
  Post,
};

export default Services;

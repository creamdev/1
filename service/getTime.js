const getTime = (timezone) => {
    const date = new Date();
    date.setUTCHours(date.getUTCHours() + timezone);
    return date.toUTCString();
  };

  module.exports= {getTime};
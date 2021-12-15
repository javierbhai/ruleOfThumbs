import moment from "moment";

export const dateDiff = lastUpdated => {
  const lastDate = moment(lastUpdated);
  const currentDate = moment();;
  return currentDate.diff(lastDate, 'days')
};

export const shortString = (string, limit) => {
  if (string.length > limit) {
    return string.substring(0, limit) + "..."
  } else {
    return string
  }
}

export const votesPercentage = (positiveVotes, negativeVotes) => {
  const totalVotes = positiveVotes + negativeVotes;

  const getIntPercentage = num =>{
    const porcentage = (num / totalVotes)*100;
    const intNum = Math.round(porcentage)
    return intNum
  }
  let positivePercentage = getIntPercentage(positiveVotes)
  let negativePercentage = getIntPercentage(negativeVotes)

  const votesPercentage = {
    positivePercentage,
    negativePercentage
  }

  return votesPercentage
}

export const importAll = (r) => {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}
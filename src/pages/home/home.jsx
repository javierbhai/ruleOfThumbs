import React, { useEffect, useState } from "react";
import { dateDiff, shortString, votesPercentage, importAll } from "../../lib/setting"
//Redux
import { connect } from 'react-redux';
import { loadThumbsAsyncAction } from '../../store/rootReducer';

import data from "../../assets/data.json";
import { Title, Selector, Nav, Header, Aside, Footer } from "../../ui-kit/atoms";
import { Card, Card__VoteAgain, Card__TextCont, Card__ButtonCont, RateComp } from "../../ui-kit/molecules";

import "./home.scss";

export const Home = ({ thumbsData, fetchThumbsData }) => {
  // Initial State
  const newData = data.data
  let initialState = newData;
  const [state, setstate] = useState(initialState);
  
  // Redux Action
  useEffect(() => {
    fetchThumbsData();
  }, []);

  // Importing Images WebPack
  const images = importAll(require.context('../../assets/img/peopleToThumb', false, /\.(png|jpe?g|svg)$/));

  // VoteNow
  let NewArray = [...state]
  const handleVote = id => {
    NewArray[id].vote.status = true
    setstate(NewArray)
  }
  const handleVoteAgain = id => {
    NewArray[id].vote.status = false
    setstate(NewArray)
  }


  return (
    <div className="home">
      <Nav />
      <Header/>
      <div className="max-centered">
          <Aside />
          <main role="main">
            {/* Start: Implementation */}
            
            <Title>Previous Rulings</Title>
            <Selector />

            <section className="section">
              {state.map(( thumb, index ) =>{
                const { name, description, lastUpdated, category, picture, vote, votes } = thumb;
                const days = dateDiff(lastUpdated);
                const shotName = shortString(name, 21)
                const shotDescription = shortString(description, 62)
                const imgSrc = images[picture].default
                const img2xSrc = images["2x"+picture].default
                const totalVotes = votesPercentage(votes.positive, votes.negative)

                return (
                <Card key={index}>
                  <img
                    className="card__background"
                    srcSet={`${imgSrc} 750w, ${img2xSrc} 1440w`}
                    sizes="(min-width: 750px) 1440px, 100vw"
                    src={imgSrc}
                    alt="Pope Francis" />
                  <Card__TextCont name={shotName} description={shotDescription}/>
                  {vote.status
                    ? <Card__VoteAgain voteAgainAction={handleVoteAgain} id={index}/>
                    : <Card__ButtonCont days={days} category={category} voteAction={handleVote} id={index} />}
                  <RateComp totalVotes={totalVotes} />
                </Card>)
              })}
            </section>
            {/* End: Implementation */}
          </main>
          <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  thumbsData: state.thumbs.thumbs
})

const mapDispatchToProps = (dispatch) => ({
  fetchThumbsData: () => dispatch(loadThumbsAsyncAction())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
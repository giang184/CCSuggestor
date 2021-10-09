import customAdd from './../img/custom-add.JPG'
import templateAdd from './../img/add-template.JPG'
import rank from './../img/rank.JPG'

const Home = () => {
  return (  
    <div className="home">
      <h1>Welcome!</h1>
      <p>CCSuggestor is a free web-app that will allow you to organize and sort your credit cards according to their cash back rewards categories.</p>

      <h1>How Do I Use CCSuggestor?</h1>
      <ul>
        <li><a href="/signup">Sign up</a> for an account. Or <a href="/signup">login</a> if you already have one.</li>
        <li><a href="/create">Add cards</a> to your wallet using one of <strong>two options</strong>:
          <ol>
            <li>Manually add a custom card by providing a card name and selecting a card image. Then add the card's reward categories. This will populate in a fieldset that will allow you to set the category's cash back percentage.<br/><br/><img src={customAdd} alt="add card template" style={{width:'323px',height:'183px'}}/><br/><br/></li>
            <li>Click to select cards from a selected list. <br/><br/><img src={templateAdd} alt="add card custom" style={{width:'324px',height:'165px'}}/><br/><br/></li>
          </ol>
        </li>
        <li><a href="/suggest">Rank cards</a> in your wallet according to a selected cash back reward category.<br/><br/><img src={rank} alt="rank" style={{width:'309',height:'107px'}}/>
        </li>
      </ul>
    </div>
  );
}

export default Home;
import customAdd from './../img/custom-add.JPG'
import templateAdd from './../img/add-template.JPG'
import rank from './../img/rank.JPG'

const Home = () => {
  return (  
    <div className="home">
      <h1>Welcome!</h1>
      <p>CCSuggestor is a free web-app that will allow you to organize and sort your credit cards according to their cash back rewards categories.</p>

      <h1>How Do I Use CCSuggestor?</h1>
      <ol>
        <li><strong>Sign up</strong> for an account. Or <strong>login</strong> if you already have one.</li><br/>
        <li><strong>Add cards</strong> to your wallet using either of two options:
          <ul>
            <li>Manually add a custom card by providing a card name and selecting a card image.<br/><br/><img src={customAdd} alt="add card template" style={{width:'323px',height:'183px'}}/><br/></li>
            <li>Click to select cards from a selected list. <br/><br/><img src={templateAdd} alt="add card custom" style={{width:'324px',height:'165px'}}/><br/><br/></li>
          </ul>
        </li>
        <li><strong>Rank cards</strong> according to a selected cash back reward category.<br/><br/><img src={rank} alt="rank" style={{width:'309',height:'107px'}}/>
        </li>
      </ol>
    </div>
  );
}

export default Home;
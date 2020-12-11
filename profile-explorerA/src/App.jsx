import React, { Component } from 'react'
import {Fragment} from 'react';
import profiles from './data/profiles.json';
import Profile from './components/Profile'
import './App.css';

class App extends Component {
    state = {
        search:null,
        casual:false,
        comp:false,
        action:false,
        adventure:false,
        shooter:false,
        sports:false,
        strat:false,
        xbone:false,
        switch:false,
        ps4: false,
        ps5: false,
        pc: false,
        data: []
    }
    searchProfile=(event)=>{
        const key = event.target.value;
        this.setState({search:key})
    }
    searchCasual=()=>{
        this.setState({casual:!this.state.casual})
    }
    searchComp=()=>{
        this.setState({comp:!this.state.comp})
    }
    searchAction=()=>{
        this.setState({action:!this.state.action})
    }
    searchAdventure=()=>{
        this.setState({adventure:!this.state.adventure})
    }
    searchShooter=()=>{
        this.setState({shooter:!this.state.shooter})
    }
    searchSports=()=>{
        this.setState({sports:!this.state.sports})
    }
    searchStrat=()=>{
        this.setState({strat:!this.state.strat})
    }
    searchXbox=()=>{
        this.setState({xbone:!this.state.xbone})
    }
    searchSwitch=()=>{
        this.setState({switch:!this.state.switch})
    }
    searchPs4=()=>{
        this.setState({ps4:!this.state.ps4})
    }
    searchPs5=()=>{
        this.setState({ps5:!this.state.ps5})
    }
    searchPc=()=>{
        this.setState({pc:!this.state.pc})
    }
    
    render(){
        return(
            <div className="App">
                <div className="search-form">
                    <input type="text" className="search-bar" placeholder="Enter the user you want to search for" onChange={(e)=>this.searchProfile(e)}/>
                </div>
                <div className="selections">
                    <h1>Filter options</h1>
                    <p>Preferred difficulty:</p>
                    <input onClick={()=>this.searchCasual()} type="checkbox" id="Casual" name="dif2" value="Casual"/>
                    <label for="Casual">Casual</label><br/>
                    <input onClick={()=>this.searchComp()} type="checkbox" id="Competitive" name="dif3" value="Competitive"/>
                    <label for="Competitive">Competitive</label>

                    <p>Favorite Genres:</p>
                    <input onClick={()=>this.searchAction()} type="checkbox" id="genre1" name="genre1" value="Action"/>
                    <label for="genre1">Action</label><br/>
                    <input onClick={()=>this.searchAdventure()} type="checkbox" id="genre2" name="genre2" value="Adventure"/>
                    <label for="genre2">Adventure</label><br/>
                    <input onClick={()=>this.searchShooter()} type="checkbox" id="genre3" name="genre3" value="Shooter"/>
                    <label for="genre3">Shooter</label><br/>
                    <input onClick={()=>this.searchSports()} type="checkbox" id="genre4" name="genre4" value="Sports"/>
                    <label for="genre4">Sports</label><br/>
                    <input onClick={()=>this.searchStrat()} type="checkbox" id="genre5" name="genre5" value="Strategy"/>
                    <label for="genre5">Strategy</label><br/>

                    <p>Gaming Systems:</p>
                    <input onClick={()=>this.searchXbox()} type="checkbox" id="gamesystem1" name="gamesystem1" value="XBOX ONE"/>
                    <label for="gamesystem1">XBOX ONE</label><br/>
                    <input onClick={()=>this.searchSwitch()} type="checkbox" id="gamesystem2" name="gamesystem2" value="Nintendo Switch"/>
                    <label for="gamesystem2">Nintendo Switch</label><br/>
                    <input onClick={()=>this.searchPs4()} type="checkbox" id="gamesystem3" name="gamesystem3" value="PS4"/>
                    <label for="gamesystem3">PS4</label><br/>
                    <input onClick={()=>this.searchPs5()} type="checkbox" id="gamesystem4" name="gamesystem4" value="PS5"/>
                    <label for="gamesystem4">PS5</label><br/>
                    <input onClick={()=>this.searchPc()} type="checkbox" id="gamesystem5" name="gamesystem5" value="PC"/>
                    <label for="gamesystem5">PC</label><br/>

                </div>
                <div className="profile-container">
                    {profiles.sort(function (a, b) {return Math.random() - 0.5;}).filter((data)=>{
                        if(this.state.search == null){
                            if((!this.state.casual || data.difficulty.includes("Casual"))&&(!this.state.comp || data.difficulty.includes("Competitive"))){
                                if((!this.state.adventure || data.categories.includes("Adventure"))&&
                                (!this.state.action || data.categories.includes("Action"))&&
                                (!this.state.sports || data.categories.includes("Sports"))&&
                                (!this.state.shooter || data.categories.includes("Shooter"))&&
                                (!this.state.strat || data.categories.includes("Strategy"))&&
                                (!this.state.xbone || data.platforms.includes("XBOXONE"))&&
                                (!this.state.switch || data.platforms.includes("Switch"))&&
                                (!this.state.ps4 || data.platforms.includes("PS4"))&&
                                (!this.state.ps5 || data.platforms.includes("PS5"))&&
                                (!this.state.pc || data.platforms.includes("PC"))){
                                    return data
                                }
                            }
                        }
                        else if(data.username.toLowerCase().includes(this.state.search.toLowerCase())){
                            if((!this.state.casual || data.difficulty.includes("Casual"))&&(!this.state.comp || data.difficulty.includes("Competitive"))){
                                if((!this.state.xbone || data.categories.includes("Adventure"))&&
                                (!this.state.action || data.categories.includes("Action"))&&
                                (!this.state.sports || data.categories.includes("Sports"))&&
                                (!this.state.shooter || data.categories.includes("Shooter"))&&
                                (!this.state.strat || data.categories.includes("Strategy"))&&
                                (!this.state.xbone || data.platforms.includes("XBOXONE"))&&
                                (!this.state.switch || data.platforms.includes("Switch"))&&
                                (!this.state.ps4 || data.platforms.includes("PS4"))&&
                                (!this.state.ps5 || data.platforms.includes("PS5"))&&
                                (!this.state.pc || data.platforms.includes("PC"))){
                                    return data
                                }
                            }
                        }
                        }).map(profile=>(
                        <Profile 
                        pic={profile.picture}
                        user={profile.username}
                        key={profile.username}
                        name={profile.name}
                        bio={profile.bio}
                        diff={profile.difficultyList}
                        cat={profile.categoriesList}
                        plat={profile.platformsList2}
                        played={profile.gamesplayed}
                        similar={profiles.filter((data)=>{
                            if((profile.difficulty.includes("Casual") && data.difficulty.includes("Casual")) || (profile.difficulty.includes("Competitive") && data.difficulty.includes("Competitive"))){
                                if((profile.categories.includes("Adventure") && data.categories.includes("Adventure"))||
                                (profile.categories.includes("Sports") && data.categories.includes("Sports"))||
                                (profile.categories.includes("Shooter") && data.categories.includes("Shooter"))||
                                (profile.categories.includes("Strategy") && data.categories.includes("Strategy"))){
                                    return data
                                }
                            }
                        })}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default App;
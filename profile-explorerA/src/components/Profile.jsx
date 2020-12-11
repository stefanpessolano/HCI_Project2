import React, { useState } from 'react'
import Modal from 'react-modal'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import styles from './Profile.module.css'
import ContentEditable from "react-contenteditable";
import 'react-dropdown-tree-select/dist/styles.css'

Modal.setAppElement('#root')

const Profile = ({pic,user,name,bio,diff,cat,plat,played,similar}) => {
    const [tempName, setName] = useState(name);
    const [tempBio, setBio] = useState(bio);
    const [tempDiff, setDiff] = useState(diff);
    const [tempCat, setCat] = useState(cat);
    const [tempPlat, setPlat] = useState(plat);


    const [modalOpen, setModalOpen] = useState(false);
    const [edit, setEdit] = useState(true);
    const [bg,setBG] = useState("")
    
    const customStyles = {
        content : {
          left                  : '30vw',
          right                 : 'auto',
          width                 : '40vw',
          background      : '#e2ebf0'
        }
    };
    
    const toggleEditable = () => {
        setEdit(!edit);
        edit ? setBG("white") : setBG("")
    };
    
    const onChangeDif = (currentNode,selectedNodes) => {
        tempDiff.find(x => x.label === currentNode.label).checked = !tempDiff.find(x => x.label === currentNode.label).checked;
    }
    const onChangeCat = (currentNode,selectedNodes) => {
        tempCat.find(x => x.label === currentNode.label).checked = !tempCat.find(x => x.label === currentNode.label).checked;
    }
    const onChangePlat = (currentNode,selectedNodes) => {
        tempPlat.find(x => x.label === currentNode.label).checked = !tempPlat.find(x => x.label === currentNode.label).checked;
    }
    
    return (
        <div>
            <div onClick={()=>setModalOpen(true)} className={styles.profile}>
                <div>
                    
                    <img width="100px" src={pic}/>
                    <h2 className={styles.name}>{user}</h2>
                </div>
            </div>
            <Modal isOpen = {modalOpen} style={customStyles}>
                    <div className={styles.header} >
                        <button className={styles.ebutton} onClick={()=>toggleEditable()}>
                            {edit ? "Edit Profile": "Save Changes"}
                        </button>
                        <div className={styles.close}>
                            <button onClick={()=>setModalOpen(false)}>X</button>
                        </div>
                    </div>
                    <img className={styles.pic} src={pic}/>
                    <h3 className={styles.user}>{user}</h3>
                    <div style={{background:bg}}>
                        <ContentEditable html={tempName} className={styles.realname} disabled={edit} onChange={(e)=>{
                            setName(e.target.value);
                        }}/>
                    </div>
                    <p className={styles.title}>Bio:</p>
                    <div style={{background:bg}}>
                        <ContentEditable html={tempBio} disabled={edit} onChange={(e)=>{
                            setBio(e.target.value);
                        }}/>
                    </div>
                    <p className={styles.title}>Preferred Difficulty:</p>
                    <div style={{background:bg}}>
                        <DropdownTreeSelect data={tempDiff} disabled={edit} onChange={onChangeDif}/>
                    </div>
                    <p className={styles.title}>Favorite Genres:</p>
                    <div style={{background:bg}}>
                        <DropdownTreeSelect data={tempCat} disabled={edit} onChange={onChangeCat}/>
                    </div>
                    <p className={styles.title}>Platforms Owned:</p>
                    <div style={{background:bg}}>
                        <DropdownTreeSelect data={tempPlat} disabled={edit} onChange={onChangePlat}/>
                    </div>
                    <p className={styles.title}>Games Played:</p>
                    {played.map(game=>(
                        <div className={styles.games}>
                            <p>{game.name}</p>
                            <p className={styles.rating}>Rating: {game.rating} / 5.0</p>
                        </div>
                    )
                    )}
                    <p className={styles.title}>Similar Users:</p>
                    {similar.map(profile=>(
                        <div className={styles.similar}>
                            <img className={styles.similarimage} src={profile.picture}/>
                            <p className={styles.similaruser}>{profile.username}</p>
                        </div>
                    )
                    )}
            </Modal>
        </div>
    );  
};
 
export default Profile;
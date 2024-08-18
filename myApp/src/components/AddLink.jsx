import Select, { components } from 'react-select';
import { useState } from 'react';
import drogAndDrop from "../assets/images/icon-drag-and-drop.svg"
import github from "../assets/images/icon-github-gray.svg"
import youtube from "../assets/images/icon-youtube-gray.svg"
import facebook from "../assets/images/icon-facebook-gray.svg"
import linkedin from "../assets/images/icon-drag-and-drop.svg"
import stackOverFlow from "../assets/images/icon-stack-overflow-gray.svg"
import twitter from '../assets/images/icon-twitter-gray.svg'
import twitch from "../assets/images/icon-twitch-gray.svg"
import gitlab from "../assets/images/icon-gitlab-gray.svg"
import link from "../assets/images/icon-link.svg"
const social = [
    { value: "facebook", label: "Facebook", icon: facebook },
    { value: "twitter", label: "Twitter", icon: twitter },
    { value: "twitch", label: "Twitch", icon: twitch },
    { value: "youtube", label: "YouTube", icon: youtube },
    { value: "github", label: "GitHub", icon: github },
    { value: "gitlab", label: "GitLab", icon: gitlab },
    { value: "stack", label: "Slack", icon: stackOverFlow },
    { value: "linkedin", label: "LinkedIn", icon: linkedin },
];



const customValue = ({data}) => (
    <div>
        <img src={data.icon} alt={data.label}/>
        {data.label}
    </div>
)
const customOption = (props) => (
    <components.Option {...props}>
        <img src={props.data.icon} alt={props.data.label}/>
        {  props.data.label}
    </components.Option>
)

const customStyles = {
    menuPortal: base => ({
        ...base,
        transform: 'translateZ(0)',
        // color: 'black',

    }),
    menu: (provided) => ({
        // color: 'black',
        ...provided,
        // zIndex: 1000, 
        // position: 'relative',
    }),
    control: (provided) => ({
        ...provided,
        // color: 'black',

        zIndex: 1, 
    }),
    container: (provided) => ({
        ...provided,
        // color: 'black',
        zIndex: 1, 
    }),
    option: (provided, state) => ({
        ...provided,
        // padding: '140px',
        color: 'black',
    }),
 singleValue: (provided) => ({
    ...provided,
    // const opacity = state.isDisabled ? 0.5 : 1;
    // const transition = 'opacity 300ms';
    color: 'black',
    display: "flex",
    alignItems: "center"

}),
};

export default function AddLink({number,removeClick}) {
    return (
        <div className="link brd-rds">
            <div className='lnk-info'>
            <div className="no-link">
                <img src={drogAndDrop} alt="Drag and Drop Icon" />
                link {number}
            </div>
            <button className='btn-rmv btn-center' onClick={removeClick}>
            Remove
            </button>
            </div>
            <div className='data-field'>
            <div className='input-field'>
            <label htmlFor="platform">Platform</label>
            {/* <Select 
                className='input-platform'
                options={social}
                components={{ Option: customOption, SingleValue: customValue }}
                // singleValue 
                styles={customStyles}
            /> */}
            {/* <select className='input-platform'>
            {social.map((social) => (
            
                <option key={social.value} value={social.value}>
                <img src={social.icon} alt={social.icon}/>
                {social.label}
                </option>
            
                ))}
          </select> */}
          <select name='state' style={{height: '45px ', fontFamily:"Arial Font Awesome"}}>
            <option value='xx'>&#xf039; &nbsp; All States</option>
            <option value='enabled' >&#xf09a; &nbsp; Enabled</option>
            <option value='paused'>&#xf04c; &nbsp; Paused</option>
            <option value='archived'>&#xf023; &nbsp; Archived</option>
        </select>
            </div>
            <div className='input-field'>
            <label htmlFor="platform-link">Link</label>
            <div className='link-input'>
            {/* <span> */}
            
            <img src={link} alt='link'/>
            {/* </span> */}
            <input type="text" id="platform-link" className='input-platform' placeholder="Enter link" />
            </div>
            </div>
            </div>


        </div>
    );
}
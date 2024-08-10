import Select, { components } from 'react-select';
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
        {props.data.label}
    </components.Option>
)

export default function AddLink() {
    return (
        <div className="link">
            <div className="">
                <img src={drogAndDrop} alt="Drag and Drop Icon" />
                link {}
            </div>
            <label htmlFor="platform">Platform</label>
            <Select
                options={social}
                components={{ Option: customOption, SingleValue: customValue }}
            />
            <label htmlFor="linkIn">Link</label>
            <img src={link} alt='link'/>
            <input type="text" id="linkIn" placeholder="Enter link" />

        </div>
    );
}
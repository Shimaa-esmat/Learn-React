import drogAndDrop from "../assets/images/icon-drag-and-drop.svg"
import github from "../assets/images/icon-github-gray.svg"
import youtube from "../assets/images/icon-youtube-gray.svg"
import facebook from "../assets/images/icon-facebook-gray.svg"
import linkedin from "../assets/images/icon-drag-and-drop.svg"
import Slack from "../assets/images/icon-drag-and-drop.svg"
import twitter from '../assets/images/icon-twitter-gray.svg'
import twitch from "../assets/images/icon-twitch-gray.svg"
import gitlap from "../assets/images/icon-gitlab-gray.svg"
import link from "../assets/images/icon-link.svg"

const linkIcon = <img src={link} alt="link"/>

export default function AddLink(){
    <div className="link">
        <div className="">
            <img src={drogAndDrop} alt=""/>
            link {}
        </div>
        <label htmlFor="platform">Platform</label> 
        <select name="platform" id="platform">
            <option value="GitHub">
            <img src={github} alt="github"/>
            GitHub
            </option>
            <option value="YouTube">
            <img src={youtube} alt="youtube"/>
            YouTube
            </option>
            <option value="FaceBook">
            <img src={facebook} alt="facebook"/>
            FaceBook
            </option>
            <option value="LinkedIn">
            <img src={linkedin} alt="linkedin"/>
            LinkedIn</option>
            <option value="Slack">
            <img src={Slack} alt="slack"/>
            Slack
            </option>
            <option value="twitter">
            <img src={twitter} alt="twitter"/>
            twitter
            </option>
            <option value="twitch">
            <img src={twitch} alt="twitch"/>
            twitch
            </option>
            <option value="gitlap">
            <img src={gitlap} alt="gitlap"/>
            gitlap
            </option>
        </select>
        <label htmlFor="linkIn">Link</label>
        <input type="text" id="linkIn" placeholder={linkIcon} /> 

    </div>
}
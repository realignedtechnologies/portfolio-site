import React from 'react';
import styles from './whatsnew.module.css';
import Status from "../../docs/components/Status";
import CustomCard from '../../static/img/CustomFields.png';

export default function WhatsNew() {

    return (
        <div style={{padding:10,backgroundColor:'white'}}>
            <small>July 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Pro Version improvements 07/21</h3>
                <span><Status text="Pro" /> </span></div>
            <p>
                <ul>
                    <li>Like the free version, the Pro version now fully integrates Epic Links</li>
                    <li>Additionally, the Pro version can make use of Jira issue links, syncing existing relationships into the story map</li>
                    <li>Totals for story point estimates are displayed for each swimlane</li>
                </ul>
            </p>
            <small>June 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Free Version Improvements 06/21</h3>
                <span><Status text="Free" isFree /> </span></div>
            <p>
                <ul>
                    <li>The app now takes full advantage of epics, syncing changes from the story map with Jira epics and vice versa</li>
                    <li>Fixed a bug with whitespaces in search terms</li>
                    <li>Small visual improvements</li>
                </ul>
                If you like Story Mapping App,<br /> please rate us on the <a href="https://marketplace.atlassian.com/1224357" target="_blank">Atlassian Marketplace!</a> ❤️
            </p>
            <small>May 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Improvement Release 05/21</h3>
                <span><Status text="Pro" /> </span></div>
            <p>
                <ul>
                    <li>Improved create functionality for both epics and issues</li>
                    <li>Improved scrolling behaviour on Server & DC</li>
                    <li>Epic colors can now be used for the entire column</li>
                    <li>Fixed a bug that prevented issue linking when a custom link type is used</li>
                </ul>
            </p>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Free Version Improvements 05/21</h3>
                <span><Status text="Free" isFree /> </span></div>
            <p>
                <ul>
                    <li>Improved create functionality for both epics and issues</li>
                    <li>Minimize release, sprint or custom swimlanes</li>
                    <li>Fixed display issues with long issue summaries</li>
                </ul>
                If you like Story Mapping App,<br /> please rate us on the <a href="https://marketplace.atlassian.com/1224357" target="_blank">Atlassian Marketplace!</a> ❤️
            </p>
            <small>April 2021</small>
            <div style={{display:'flex',gap:8, alignItems:'center',marginBottom:10}}>
                <h3 style={{marginBottom:1}}>Major Release 04/21 (1.4 DC)</h3>
                <span><Status text="Pro" /> </span></div>
            <p>
                <ul>
                    <li>You can now use a custom link type to connect issues to epics</li>
                    <li>Minimize release, sprint or custom swimlanes</li>
                    <li>View issues with any status in the backlog</li>
                </ul>
            </p>



        </div>
    )
}
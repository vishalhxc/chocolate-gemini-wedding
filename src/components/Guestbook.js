import React from "react";
var accessToken = "823605f98ef84b8f2bdffe90f3297360";

class Guestbook extends React.Component {
    async getVimeoInfo() {
        const response = await fetch('https://api.vimeo.com/tutorial', {
            method: 'get',
            headers: { 'Authorization': 'Bearer 823605f98ef84b8f2bdffe90f3297360' }
        })
    }

    render() {
        return "blah"
    }
}
export default Guestbook;
import React from "react";

class Navigation extends React.Component {
    render() {
        return (
            <nav class="navbar is-fixed-top is-transparent">
                <div class="navbar-brand">
                    <a class="navbar-item brand" href="/">
                        <h1>Vishal + DeYandré</h1>
                    </a>
                </div>

                <div id="nav-links" class="navbar-menu">
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <a class="button is-white is-outlined" href="">
                                <span class="icon"><i class="fas fa-pen"></i></span>
                                <span>rsvp</span>
                            </a>
                        </div>
                    </div>
                    <div class="navbar-end">
                        <a class="navbar-item our-story" href="">
                            <span class="icon"><i class="fas fa-heart"></i></span>
                            <span>our&nbsp;story</span>
                        </a>
                        <a class="navbar-item besties" href="">
                            <span class="icon"><i class="fas fa-user-friends"></i></span>
                            <span>besties</span>
                        </a>
                        <a class="navbar-item guestbook" href="">
                            <span class="icon"><i class="fas fa-video"></i></span>
                            <span>guestbook</span>
                        </a>
                        <a class="navbar-item registry" href="">
                            <span class="icon"><i class="fas fa-gift"></i></span>
                            <span>registry</span>
                        </a>
                    </div>
                </div>
            </nav >
        )
    };
}

export default Navigation;
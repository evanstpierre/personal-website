import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div class="headerBox">
            <div>
                <span class="name">Evan St. Pierre</span>
            </div>
            <div class="sections">
                <span class="section">About Me</span>
                <span class="section">Blog</span>
                <span class="section">Projects</span>
                <span class="section">Hobbies</span>
            </div>
        </div>
    )
}

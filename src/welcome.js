import './App.css';
import {useState} from 'react';
import {AiOutlineBell} from "react-icons/ai";
import {RiArrowDropDownLine} from 'react-icons/ri'


function Welcome() {

    const [searchInput, setSearchInput] = useState("");

    const search = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      }

    return ( 
        <div className = "Welcome" >
            <div>
            <div class="logo"></div>
            <input
                type="text"
                placeholder="Search quantity control, regulators..."
                onChange={search}
                value={searchInput} />
                <AiOutlineBell width='40' active={true} animate={true} />
                <image src="" />
                <RiArrowDropDownLine />
            </div>
            <div class="content"></div>
        </div>
    );
}

export default Welcome;
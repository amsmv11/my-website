import React from 'react';
import { ReactComponent as RightArrowIcon } from './icons/right-arrow.svg';
import { ReactComponent as TasksIcon } from './icons/tasks.svg';
import { ReactComponent as CrowIcon } from './icons/crow.svg';
import { ReactComponent as SwitchIcon } from './icons/switch.svg';
import { ReactComponent as FeatherIcon } from './icons/feather.svg';
import { ReactComponent as PersonalCardIcon } from './icons/personal-card.svg';

function App() {
  return (
    <div className="App">
      <NavBar>
        
        <RightArrowIcon></RightArrowIcon>
        
        
        <NavItem>
          <PersonalCardIcon></PersonalCardIcon>
  
          <NavLink href="#" text="valor1"></NavLink>
        </NavItem>
        

        <NavItem>
          <TasksIcon></TasksIcon>

          <NavLink href="#" text="valor2"></NavLink>
        </NavItem>
        
        
        <NavItem>
          <CrowIcon></CrowIcon>
        
          <NavLink href="#" text="valor3"></NavLink>
        </NavItem>
      

        <NavItem>
          <FeatherIcon></FeatherIcon>
        
          <NavLink href="#" text="valor4"></NavLink>
        </NavItem>

      
      </NavBar>
      
      <MainContent></MainContent>
    </div>
  );
}

function NavBar(props){
  return(
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  );
}

function NavItem(props){
  return(
    <li className="navitem">
      {props.children}
    </li>
  );
}

function NavLink(props){
  return(
    <a className="navlink" href={props.href}>
      <span className="linktext">
        {props.text}
      </span>
    </a> 
  );
}

function MainContent(){
  return(
    <div className="maincontent">
      <h1>Ainda sem Conteudo</h1>

      <p>Apesar disso, ter frases ajuda a perceber como vai ficar o site. Claro que podia "encher" o resto do website com Lorem Ipsum, no entanto isso seria altamente Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis nunc sed augue lacus viverra vitae congue. Amet mattis vulputate enim nulla aliquet. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Vitae congue mauris rhoncus aenean vel elit. At tellus at urna condimentum mattis pellentesque id. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Tempus imperdiet nulla malesuada pellentesque. Mauris sit amet massa vitae tortor condimentum lacinia. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Fermentum leo vel orci porta non. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Et malesuada fames ac turpis egestas sed tempus urna.Cursus turpis massa tincidunt dui ut ornare lectus. Neque vitae tempus quam pellentesque. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Libero enim sed faucibus turpis in eu mi bibendum neque. Purus gravida quis blandit turpis cursus in hac habitasse. Ultrices dui sapien eget mi. Orci ac auctor augue mauris augue neque gravida in. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Gravida neque convallis a cras. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Non tellus orci ac auctor augue mauris. Risus nec feugiat in fermentum. Suspendisse sed nisi lacus sed viverra tellus in. Donec massa sapien faucibus et molestie ac. Vehicula ipsum a arcu cursus vitae congue mauris. Sed vulputate mi sit amet mauris commodo quis. Facilisis sed odio morbi quis. Ultrices sagittis orci a scelerisque purus semper. Aliquam sem et tortor consequat id porta.Turpis massa sed elementum tempus egestas sed sed. Nisi quis eleifend quam adipiscing. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Consectetur adipiscing elit ut aliquam purus sit amet. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Lectus quam id leo in. Integer eget aliquet nibh praesent. Luctus accumsan tortor posuere ac. Aliquam malesuada bibendum arcu vitae. Mi eget mauris pharetra et ultrices neque ornare.</p>
      <p>Apesar disso, ter frases ajuda a perceber como vai ficar o site. Claro que podia "encher" o resto do website com Lorem Ipsum, no entanto isso seria altamente Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis nunc sed augue lacus viverra vitae congue. Amet mattis vulputate enim nulla aliquet. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Vitae congue mauris rhoncus aenean vel elit. At tellus at urna condimentum mattis pellentesque id. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Tempus imperdiet nulla malesuada pellentesque. Mauris sit amet massa vitae tortor condimentum lacinia. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Fermentum leo vel orci porta non. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Et malesuada fames ac turpis egestas sed tempus urna.Cursus turpis massa tincidunt dui ut ornare lectus. Neque vitae tempus quam pellentesque. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Libero enim sed faucibus turpis in eu mi bibendum neque. Purus gravida quis blandit turpis cursus in hac habitasse. Ultrices dui sapien eget mi. Orci ac auctor augue mauris augue neque gravida in. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Gravida neque convallis a cras. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Non tellus orci ac auctor augue mauris. Risus nec feugiat in fermentum. Suspendisse sed nisi lacus sed viverra tellus in. Donec massa sapien faucibus et molestie ac. Vehicula ipsum a arcu cursus vitae congue mauris. Sed vulputate mi sit amet mauris commodo quis. Facilisis sed odio morbi quis. Ultrices sagittis orci a scelerisque purus semper. Aliquam sem et tortor consequat id porta.Turpis massa sed elementum tempus egestas sed sed. Nisi quis eleifend quam adipiscing. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Consectetur adipiscing elit ut aliquam purus sit amet. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Lectus quam id leo in. Integer eget aliquet nibh praesent. Luctus accumsan tortor posuere ac. Aliquam malesuada bibendum arcu vitae. Mi eget mauris pharetra et ultrices neque ornare.</p>
      <p>Apesar disso, ter frases ajuda a perceber como vai ficar o site. Claro que podia "encher" o resto do website com Lorem Ipsum, no entanto isso seria altamente Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis nunc sed augue lacus viverra vitae congue. Amet mattis vulputate enim nulla aliquet. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Vitae congue mauris rhoncus aenean vel elit. At tellus at urna condimentum mattis pellentesque id. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Tempus imperdiet nulla malesuada pellentesque. Mauris sit amet massa vitae tortor condimentum lacinia. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Fermentum leo vel orci porta non. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Et malesuada fames ac turpis egestas sed tempus urna.Cursus turpis massa tincidunt dui ut ornare lectus. Neque vitae tempus quam pellentesque. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Libero enim sed faucibus turpis in eu mi bibendum neque. Purus gravida quis blandit turpis cursus in hac habitasse. Ultrices dui sapien eget mi. Orci ac auctor augue mauris augue neque gravida in. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Gravida neque convallis a cras. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Non tellus orci ac auctor augue mauris. Risus nec feugiat in fermentum. Suspendisse sed nisi lacus sed viverra tellus in. Donec massa sapien faucibus et molestie ac. Vehicula ipsum a arcu cursus vitae congue mauris. Sed vulputate mi sit amet mauris commodo quis. Facilisis sed odio morbi quis. Ultrices sagittis orci a scelerisque purus semper. Aliquam sem et tortor consequat id porta.Turpis massa sed elementum tempus egestas sed sed. Nisi quis eleifend quam adipiscing. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Consectetur adipiscing elit ut aliquam purus sit amet. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Lectus quam id leo in. Integer eget aliquet nibh praesent. Luctus accumsan tortor posuere ac. Aliquam malesuada bibendum arcu vitae. Mi eget mauris pharetra et ultrices neque ornare.</p>
      <p>Apesar disso, ter frases ajuda a perceber como vai ficar o site. Claro que podia "encher" o resto do website com Lorem Ipsum, no entanto isso seria altamente Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis nunc sed augue lacus viverra vitae congue. Amet mattis vulputate enim nulla aliquet. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Vitae congue mauris rhoncus aenean vel elit. At tellus at urna condimentum mattis pellentesque id. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Tempus imperdiet nulla malesuada pellentesque. Mauris sit amet massa vitae tortor condimentum lacinia. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Fermentum leo vel orci porta non. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Et malesuada fames ac turpis egestas sed tempus urna.Cursus turpis massa tincidunt dui ut ornare lectus. Neque vitae tempus quam pellentesque. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Libero enim sed faucibus turpis in eu mi bibendum neque. Purus gravida quis blandit turpis cursus in hac habitasse. Ultrices dui sapien eget mi. Orci ac auctor augue mauris augue neque gravida in. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Gravida neque convallis a cras. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Non tellus orci ac auctor augue mauris. Risus nec feugiat in fermentum. Suspendisse sed nisi lacus sed viverra tellus in. Donec massa sapien faucibus et molestie ac. Vehicula ipsum a arcu cursus vitae congue mauris. Sed vulputate mi sit amet mauris commodo quis. Facilisis sed odio morbi quis. Ultrices sagittis orci a scelerisque purus semper. Aliquam sem et tortor consequat id porta.Turpis massa sed elementum tempus egestas sed sed. Nisi quis eleifend quam adipiscing. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Consectetur adipiscing elit ut aliquam purus sit amet. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Lectus quam id leo in. Integer eget aliquet nibh praesent. Luctus accumsan tortor posuere ac. Aliquam malesuada bibendum arcu vitae. Mi eget mauris pharetra et ultrices neque ornare.</p>
    </div>
  );
}

export default App;

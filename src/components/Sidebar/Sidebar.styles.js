import styled from '@emotion/styled'

export const SidebarContainer = styled.div
    `
    width: ${p => p.isSidebarOpen ? '20%' : '5%'};
    max-width:280px;
    min-width: 80px;
    color: #fff;
    background-image: 
    linear-gradient(
        315deg,
        rgba(13, 50, 77, 0.8) 0%,
        rgba(127, 90, 131, 0.8) 74%
        ),
        url(${props => props.bgImage});
    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative; //toggler Container
    transition: .4s ease-in all;
    `
// header styled component
export const SidebarHeader = styled.h3`
        padding: 20px 0;
        text-align: center;
        margin-bottom: 10px;
        letter-spacing: 6px;
        font-family: ${p => p.font}
`

// menu items styled component   
export const MenuItemContainer = styled.div``; 
export const ItemContainer = styled.div``; 

export const MenuItem = styled.div`
        ${p => !p.isSidebarOpen && `
                text-align: center;
                ${p.selected && 'background-color: rgba(0, 0, 0, 0.3)'}
        `};
        padding: 6px 20px;
        margin-top: 20px;
        font-weight: 600;
        color: ${p => p.selected ? '#fff' : '#beae9a'};
        font-family: ${p => p.font};
        white-space: nowrap;
        position: relative; // Dropdown icon parent

        &:hover {
                color: #fff;
                transition: .1s ease-in all;
        }

        &:after {
                content: '';
                border: 0.5px solid ${p => p.selected ? '#fff' : '#beae9a'};
                display: block;
                margin: 8px 0 4px;
        }

        ${p => !p.selected && `
          &:hover {
                &:after {
                  border: 0.5px solid rgba(255, 255, 255,0.4);
                  transition: .1s ease-in all;
                }
          }
        `}
        
`; 

// menu text styled component 
export const Text = styled.p`
        display: ${p => p.isSidebarOpen ? 'inline' : 'none'}
`
// menu icon styled component 
export const Icon = styled.img`
        ${p => p.isSidebarOpen && 
                `padding-right: 20px;
                transition: .2s ease-in padding-right`
        };
        height: 16px;
        width: 16px;
       
`
// Submenu items styled component
export const SubMenuItemContainer = styled.div`
  font-size: 14px;
  ${p => p.isSidebarOpen && 'padding-left: 15%'};
  ${p => !p.isSidebarOpen && 'text-align: center'};
  
`;
export const SubMenuItem = styled.div`
  color: #beae9a;

  &:hover {
        color: #fff;
  }
`;
// Dropdown icon styled component
export const DropdownIcon = styled.span `
  position: absolute;
  top: 12px;
  right: 24px;
  border: solid ${p => p.selected ? '#fff' : '#beae9a'};
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(45deg);
`
// Toggler styled components
export const TogglerContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`
export const Toggler = styled.div`
 height: 40px;
 cursor: pointer;
 position: relative;

 &:after {
   content: '';
   position: absolute;
   left: 0;
   top: .25em;
   height: .1em;
   width: 100%;
   background: #fff;
   box-shadow: 
    0 .75em 0 0 #fff,
    0 1.5em 0 0 #fff
 }
`
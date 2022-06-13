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

export const MenuItem = styled.div`
        padding: 6px 20px;
        margin-top: 20px;
        font-weight: 600;
        color: ${p => p.selected ? '#fff' : '#beae9a'};
        font-family: ${p => p.font};

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
        display: inline
`
// menu icon styled component 
export const Icon = styled.img`
        height: 16px;
        width: 16px;
        padding-right: 20px;
       
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